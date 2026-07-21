const assert = require('node:assert/strict')
const test = require('node:test')

const {
  HOST_ID,
  ON_DEMAND_PAGE,
  PASS_UPDATES,
  SETTINGS_DOCUMENT,
  buildMenuItems,
  buildPassPatch,
  validateCatalog
} = require('./phase1MomenceCutover')

const catalog = PASS_UPDATES
  .filter(update => update.membershipId)
  .map(update => ({
    id: update.membershipId,
    hostId: HOST_ID,
    name: update.expectedMomenceName
  }))

test('maps every active pass document to the verified Hipline Momence product', () => {
  assert.equal(PASS_UPDATES.length, 12)
  assert.equal(new Set(PASS_UPDATES.map(update => update.documentId)).size, 12)
  assert.equal(validateCatalog(catalog), undefined)

  const tenClass = PASS_UPDATES.find(update => update.passName === '10 CLASS BUNDLE')
  assert.equal(tenClass.purchaseUrl, 'https://momence.com/m/766996')

  const fiveClass = PASS_UPDATES.find(update => update.passName === '5 CLASS BUNDLE')
  assert.equal(fiveClass.purchaseUrl, 'https://momence.com/m/766994')
})

test('rejects a Momence product that belongs to another host or has the wrong name', () => {
  const wrongCatalog = catalog.map(product => ({ ...product }))
  wrongCatalog[0].hostId = 123
  wrongCatalog[1].name = 'Wrong membership'

  assert.throws(
    () => validateCatalog(wrongCatalog),
    /does not belong to Hipline.*does not match/i
  )
})

test('builds a minimal managed purchase patch', () => {
  assert.deepEqual(buildPassPatch(PASS_UPDATES[0]), {
    purchaseProvider: 'momence',
    purchaseUrl: PASS_UPDATES[0].purchaseUrl,
    purchaseButtonLabel: 'Buy Now',
    purchasePresentation: 'popup',
    momenceProductId: String(PASS_UPDATES[0].membershipId)
  })

  const giftCards = PASS_UPDATES.find(update => update.passName === 'GIFT CARDS')
  assert.deepEqual(buildPassPatch(giftCards), {
    purchaseProvider: 'momence',
    purchaseUrl: giftCards.purchaseUrl,
    purchaseButtonLabel: 'Buy Now',
    purchasePresentation: 'popup'
  })
})

test('defines the public Momence settings singleton used by the storefront', () => {
  assert.deepEqual(SETTINGS_DOCUMENT, {
    _id: 'settingsMomence',
    _type: 'settingsMomence',
    accountUrl: 'https://momence.com/sign-in',
    videoLibraryUrl: 'https://momence.com/video/courses/253441',
    giftCardUrl: 'https://momence.com/gcc/253441',
    scheduleUrl: 'https://momence.com/u/hipline-zNlk68',
    allowedEmbedHosts: ['momence.com'],
    schedule: {
      hostId: '253441',
      teacherIds: [],
      locationIds: [],
      tagIds: [],
      defaultFilter: 'show-all',
      locale: 'en'
    }
  })
})

test('defines a static On-Demand page with the managed Momence Video section', () => {
  assert.deepEqual(ON_DEMAND_PAGE, {
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
  })
})

test('replaces only the existing On-Demand external menu item', () => {
  const menuItems = [
    { _key: 'passes', _type: 'navPage', title: 'Passes' },
    {
      _key: 'b0583981740c',
      _type: 'navLink',
      title: 'On-Demand',
      url: 'https://momence.com/video/courses/253441'
    },
    { _key: 'gift', _type: 'navLink', title: 'Gift Cards' }
  ]

  assert.deepEqual(buildMenuItems(menuItems), [
    menuItems[0],
    {
      _key: 'b0583981740c',
      _type: 'navPage',
      title: 'On-Demand',
      page: { _type: 'reference', _ref: ON_DEMAND_PAGE._id }
    },
    menuItems[2]
  ])
})

test('refuses to rewrite navigation when the expected On-Demand item changed', () => {
  assert.throws(
    () => buildMenuItems([{ _key: 'different', _type: 'navLink', title: 'On-Demand' }]),
    /expected On-Demand navigation item/i
  )
})
