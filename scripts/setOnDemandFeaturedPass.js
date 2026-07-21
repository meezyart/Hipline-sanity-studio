const ON_DEMAND_PAGE_ID = 'pageMomenceOnDemand'
const ON_DEMAND_PASS_ID = 'a2905cb2-99ba-4086-ac77-9818992fd46e'

const addFeaturedPass = pageSections => {
  const matches = pageSections.filter(section => section && section._type === 'momenceVideoSection')
  if (matches.length !== 1) {
    throw new Error('Expected exactly one Momence Video section on the On-Demand page')
  }

  return pageSections.map(section => section && section._type === 'momenceVideoSection'
    ? {
        ...section,
        featuredPass: { _type: 'reference', _ref: ON_DEMAND_PASS_ID }
      }
    : section
  )
}

const run = async () => {
  const applyProduction = process.argv.includes('--apply-production')
  const client = require('part:@sanity/base/client')
    .withConfig({ apiVersion: '2021-10-21', useCdn: false })
  const page = await client.fetch(
    '*[_id == $pageId][0]{_id, _rev, pageSections}',
    { pageId: ON_DEMAND_PAGE_ID }
  )

  if (!page || !Array.isArray(page.pageSections)) {
    throw new Error(`On-Demand page ${ON_DEMAND_PAGE_ID} was not found`)
  }

  const pageSections = addFeaturedPass(page.pageSections)
  if (!applyProduction) {
    console.log(JSON.stringify({ mode: 'dry-run', pageId: ON_DEMAND_PAGE_ID, pageSections }, null, 2))
    console.log('\nNo content was changed. Re-run with -- --apply-production after approval.')
    return
  }

  const result = await client
    .patch(ON_DEMAND_PAGE_ID)
    .ifRevisionId(page._rev)
    .set({ pageSections })
    .commit()
  console.log(`Attached the On-Demand pass in revision ${result._rev}.`)
}

if (require.main === module) {
  run().catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = {
  ON_DEMAND_PAGE_ID,
  ON_DEMAND_PASS_ID,
  addFeaturedPass
}
