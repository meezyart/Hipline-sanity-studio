const HEADER_MENU_ID = '955cf4b3-685b-41cb-bd20-cb91bba391a3'
const GIFT_CARD_URL = 'https://momence.com/gcc/253441'

const isGiftCardLink = item =>
  item &&
  item._type === 'navLink' &&
  item.title === 'Gift Cards' &&
  item.url === GIFT_CARD_URL

const buildGiftCardPopupMenuItems = menuItems => {
  const matches = menuItems.filter(isGiftCardLink)
  if (matches.length !== 1) {
    throw new Error('Expected exactly one published Gift Cards navigation link')
  }

  return menuItems.map(item => isGiftCardLink(item)
    ? { ...item, openAsPopup: true }
    : item
  )
}

const run = async () => {
  const applyProduction = process.argv.includes('--apply-production')
  const client = require('part:@sanity/base/client')
    .withConfig({ apiVersion: '2021-10-21', useCdn: false })
  const menu = await client.fetch(
    '*[_id == $menuId][0]{_id, _rev, menuItems}',
    { menuId: HEADER_MENU_ID }
  )

  if (!menu || !Array.isArray(menu.menuItems)) {
    throw new Error(`Header menu ${HEADER_MENU_ID} was not found`)
  }

  const menuItems = buildGiftCardPopupMenuItems(menu.menuItems)
  if (!applyProduction) {
    console.log(JSON.stringify({ mode: 'dry-run', menuId: HEADER_MENU_ID, menuItems }, null, 2))
    console.log('\nNo content was changed. Re-run with -- --apply-production after approval.')
    return
  }

  const result = await client
    .patch(HEADER_MENU_ID)
    .ifRevisionId(menu._rev)
    .set({ menuItems })
    .commit()
  console.log(`Enabled the Gift Cards menu popup in revision ${result._rev}.`)
}

if (require.main === module) {
  run().catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = {
  GIFT_CARD_URL,
  HEADER_MENU_ID,
  buildGiftCardPopupMenuItems
}
