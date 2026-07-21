const https = require('node:https')

const HOST_ID = 253441

const PASS_UPDATES = [
  {
    passName: 'NEWBIE PASS',
    documentId: '186732f8-6ae0-4105-a627-17e4f216ff2d',
    membershipId: 768424,
    expectedMomenceName: 'Newbie Pass'
  },
  {
    passName: 'HIPLINE+',
    documentId: '9ad5bc4d-8c48-41b7-a578-ea342bf830e7',
    membershipId: 768126,
    expectedMomenceName: 'Hipline+ Membership'
  },
  {
    passName: 'HIPLINE BASIC',
    documentId: '41149699-c4fb-408a-8f87-360d47989ddf',
    membershipId: 768425,
    expectedMomenceName: 'Hipline Basic Membership'
  },
  {
    passName: 'VIRTUAL ONLY',
    documentId: '014b7147-56fc-4bf8-8b66-e3035e1e55cb',
    membershipId: 768430,
    expectedMomenceName: 'Virtual Only Membership'
  },
  {
    passName: 'SINGLE CLASS',
    documentId: 'cd7ad476-64e7-4604-a195-7fa1253ae3e5',
    membershipId: 766999,
    expectedMomenceName: 'Single class'
  },
  {
    passName: '5 CLASS BUNDLE',
    documentId: '5aef577e-ceda-4830-b13f-c56995aaa316',
    membershipId: 766994,
    expectedMomenceName: '5 class pass (25/class)'
  },
  {
    passName: '10 CLASS BUNDLE',
    documentId: 'a83943ae-6969-4483-88a7-b89760eeac2c',
    membershipId: 766996,
    expectedMomenceName: '10 class pass (22/class)'
  },
  {
    passName: '20 CLASS BUNDLE',
    documentId: '480ebb36-78d7-437a-b876-33a7112a2170',
    membershipId: 766998,
    expectedMomenceName: '20 class pack (18/class)'
  },
  {
    passName: 'POP-UP CLASS',
    documentId: '139b517d-c008-4568-9570-e6d6882bf51d',
    membershipId: 767001,
    expectedMomenceName: 'Single class Pop-Up'
  },
  {
    passName: 'ON DEMAND',
    documentId: 'a2905cb2-99ba-4086-ac77-9818992fd46e',
    membershipId: 776335,
    expectedMomenceName: 'Hipline On-Demand Library'
  },
  {
    passName: 'GIFT CARDS',
    documentId: 'c39a24ce-d220-4b4f-870e-de75a3d9621d',
    purchaseUrl: `https://momence.com/gcc/${HOST_ID}`
  },
  {
    passName: 'CHILDCARE',
    documentId: '6af01e1e-32a9-4fae-b377-aeb983987d10',
    membershipId: 767010,
    expectedMomenceName: 'Single Childcare'
  }
].map(update => ({
  ...update,
  purchaseUrl: update.purchaseUrl || `https://momence.com/m/${update.membershipId}`
}))

const SETTINGS_DOCUMENT = {
  _id: 'settingsMomence',
  _type: 'settingsMomence',
  accountUrl: 'https://momence.com/sign-in',
  videoLibraryUrl: `https://momence.com/video/courses/${HOST_ID}`,
  giftCardUrl: `https://momence.com/gcc/${HOST_ID}`,
  scheduleUrl: 'https://momence.com/u/hipline-zNlk68',
  allowedEmbedHosts: ['momence.com'],
  schedule: {
    hostId: String(HOST_ID),
    teacherIds: [],
    locationIds: [],
    tagIds: [],
    defaultFilter: 'show-all',
    locale: 'en'
  }
}

const RELEASE_WARNINGS = []

const ON_DEMAND_PAGE = {
  _id: 'pageMomenceOnDemand',
  _type: 'page',
  title: 'On-Demand',
  slug: { _type: 'slug', current: 'on-demand' },
  includeInSitemap: true,
  pageSections: [
    {
      _key: 'momenceVideoLibrary',
      _type: 'momenceVideoSection',
      heading: 'On-Demand Video Library',
      frameTitle: 'Hipline on-demand video library',
      fallbackLabel: 'Open the Video Library'
    }
  ]
}

const HEADER_MENU_ID = '955cf4b3-685b-41cb-bd20-cb91bba391a3'
const ON_DEMAND_MENU_KEY = 'b0583981740c'

const normalizeName = value => String(value || '').trim().toLowerCase()

const buildPassPatch = update => ({
  purchaseProvider: 'momence',
  purchaseUrl: update.purchaseUrl,
  purchaseButtonLabel: 'Buy Now',
  purchasePresentation: 'popup',
  ...(update.membershipId ? { momenceProductId: String(update.membershipId) } : {})
})

const buildMenuItems = menuItems => {
  const matches = menuItems.filter(item => item._key === ON_DEMAND_MENU_KEY)

  if (matches.length !== 1) {
    throw new Error('Expected On-Demand navigation item was not found exactly once')
  }

  const current = matches[0]
  const alreadyManaged = current._type === 'navPage' &&
    current.page && current.page._ref === ON_DEMAND_PAGE._id
  const expectedExternal = current._type === 'navLink' &&
    current.title === 'On-Demand' &&
    current.url === SETTINGS_DOCUMENT.videoLibraryUrl

  if (!alreadyManaged && !expectedExternal) {
    throw new Error('Expected On-Demand navigation item changed; refusing to rewrite it')
  }

  if (alreadyManaged) return menuItems

  return menuItems.map(item => item._key === ON_DEMAND_MENU_KEY
    ? {
        _key: ON_DEMAND_MENU_KEY,
        _type: 'navPage',
        title: 'On-Demand',
        page: { _type: 'reference', _ref: ON_DEMAND_PAGE._id }
      }
    : item
  )
}

const validateCatalog = catalog => {
  const productsById = new Map(catalog.map(product => [product.id, product]))
  const errors = []

  PASS_UPDATES.filter(update => update.membershipId).forEach(update => {
    const product = productsById.get(update.membershipId)

    if (!product) {
      errors.push(`${update.passName}: Momence product ${update.membershipId} was not found`)
      return
    }

    if (product.hostId !== HOST_ID) {
      errors.push(`${update.passName}: Momence product ${update.membershipId} does not belong to Hipline`)
    }

    if (normalizeName(product.name) !== normalizeName(update.expectedMomenceName)) {
      errors.push(`${update.passName}: Momence product ${update.membershipId} does not match ${update.expectedMomenceName}`)
    }
  })

  if (errors.length) throw new Error(errors.join('; '))
}

const getJson = url => new Promise((resolve, reject) => {
  https.get(url, response => {
    let body = ''

    response.setEncoding('utf8')
    response.on('data', chunk => { body += chunk })
    response.on('end', () => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        reject(new Error(`Momence returned HTTP ${response.statusCode} for ${url}`))
        return
      }

      try {
        resolve(JSON.parse(body))
      } catch (error) {
        reject(new Error(`Momence returned invalid JSON for ${url}`))
      }
    })
  }).on('error', reject)
})

const loadVerifiedCatalog = async () => {
  const updates = PASS_UPDATES.filter(update => update.membershipId)
  const catalog = await Promise.all(updates.map(update =>
    getJson(`https://momence.com/_api/readonly/plugin/memberships/${update.membershipId}`)
  ))

  validateCatalog(catalog)
  return catalog
}

const settingsPatch = Object.fromEntries(
  Object.entries(SETTINGS_DOCUMENT).filter(([key]) => !['_id', '_type'].includes(key))
)

const onDemandPagePatch = Object.fromEntries(
  Object.entries(ON_DEMAND_PAGE).filter(([key]) => !['_id', '_type'].includes(key))
)

const run = async () => {
  const applyProduction = process.argv.includes('--apply-production')
  const sanityClient = require('part:@sanity/base/client')
    .withConfig({ apiVersion: '2021-10-21', useCdn: false })

  await loadVerifiedCatalog()

  const documentIds = PASS_UPDATES.map(update => update.documentId)
  const currentPasses = await sanityClient.fetch(
    '*[_id in $documentIds]{_id, passName, purchaseProvider, purchaseUrl, purchaseButtonLabel, purchasePresentation, momenceProductId}',
    { documentIds }
  )
  const currentMenu = await sanityClient.fetch(
    '*[_id == $menuId][0]{_id, menuItems}',
    { menuId: HEADER_MENU_ID }
  )
  const slugOwner = await sanityClient.fetch(
    '*[_type == "page" && slug.current == $slug][0]{_id}',
    { slug: ON_DEMAND_PAGE.slug.current }
  )
  const currentById = new Map(currentPasses.map(pass => [pass._id, pass]))
  const missingDocuments = PASS_UPDATES.filter(update => !currentById.has(update.documentId))
  const renamedDocuments = PASS_UPDATES.filter(update => {
    const current = currentById.get(update.documentId)
    return current && normalizeName(current.passName) !== normalizeName(update.passName)
  })

  if (missingDocuments.length) {
    throw new Error(`Missing Sanity pass documents: ${missingDocuments.map(update => update.passName).join(', ')}`)
  }

  if (renamedDocuments.length) {
    throw new Error(`Sanity pass names do not match the cutover manifest: ${renamedDocuments.map(update => update.passName).join(', ')}`)
  }

  if (!currentMenu || !Array.isArray(currentMenu.menuItems)) {
    throw new Error(`Header menu ${HEADER_MENU_ID} was not found`)
  }

  if (slugOwner && slugOwner._id !== ON_DEMAND_PAGE._id) {
    throw new Error(`The /${ON_DEMAND_PAGE.slug.current}/ slug belongs to ${slugOwner._id}`)
  }

  const nextMenuItems = buildMenuItems(currentMenu.menuItems)

  const preview = PASS_UPDATES.map(update => ({
    passName: update.passName,
    documentId: update.documentId,
    currentUrl: currentById.get(update.documentId).purchaseUrl || null,
    nextUrl: update.purchaseUrl
  }))

  if (!applyProduction) {
    console.log(JSON.stringify({
      mode: 'dry-run',
      settingsDocument: SETTINGS_DOCUMENT,
      passUpdates: preview,
      onDemandPage: ON_DEMAND_PAGE,
      navigationUpdate: {
        menuId: HEADER_MENU_ID,
        itemKey: ON_DEMAND_MENU_KEY,
        nextType: 'navPage',
        nextPageId: ON_DEMAND_PAGE._id
      },
      releaseWarnings: RELEASE_WARNINGS
    }, null, 2))
    console.log('\nNo content was changed. Re-run with -- --apply-production after approval.')
    return
  }

  let transaction = sanityClient
    .transaction()
    .createIfNotExists(SETTINGS_DOCUMENT)
    .patch(SETTINGS_DOCUMENT._id, patch => patch.set(settingsPatch))
    .createIfNotExists(ON_DEMAND_PAGE)
    .patch(ON_DEMAND_PAGE._id, patch => patch.set(onDemandPagePatch))
    .patch(HEADER_MENU_ID, patch => patch.set({ menuItems: nextMenuItems }))

  PASS_UPDATES.forEach(update => {
    transaction = transaction.patch(update.documentId, patch => patch.set(buildPassPatch(update)))
  })

  const result = await transaction.commit()
  console.log(`Published Momence settings, ${PASS_UPDATES.length} pass mappings, and the On-Demand page in transaction ${result.transactionId}.`)
}

if (require.main === module) {
  run().catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = {
  HOST_ID,
  ON_DEMAND_PAGE,
  PASS_UPDATES,
  SETTINGS_DOCUMENT,
  buildMenuItems,
  buildPassPatch,
  validateCatalog
}
