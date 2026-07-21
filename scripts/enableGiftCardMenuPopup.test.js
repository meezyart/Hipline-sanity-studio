const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const {
  GIFT_CARD_URL,
  buildGiftCardPopupMenuItems
} = require('./enableGiftCardMenuPopup')

test('external links expose the Open As Popup editor setting', () => {
  const schema = fs.readFileSync(
    path.resolve(__dirname, '../schemas/objects/blocks/navLink.js'),
    'utf8'
  )

  assert.match(schema, /name:\s*'openAsPopup'/)
  assert.match(schema, /title:\s*'Open As Popup\?'/)
  assert.match(schema, /Popup links require an HTTPS URL/)
})

test('enables popup behavior only on the expected Gift Cards link', () => {
  const menuItems = [
    { _key: 'passes', _type: 'navPage', title: 'Passes' },
    {
      _key: 'gift',
      _type: 'navLink',
      title: 'Gift Cards',
      url: GIFT_CARD_URL,
      openInNewTab: true
    }
  ]

  assert.deepEqual(buildGiftCardPopupMenuItems(menuItems), [
    menuItems[0],
    { ...menuItems[1], openAsPopup: true }
  ])
})

test('is idempotent and refuses an ambiguous or changed Gift Cards link', () => {
  const managed = {
    _key: 'gift',
    _type: 'navLink',
    title: 'Gift Cards',
    url: GIFT_CARD_URL,
    openAsPopup: true
  }

  assert.deepEqual(buildGiftCardPopupMenuItems([managed]), [managed])
  assert.throws(() => buildGiftCardPopupMenuItems([]), /exactly one/i)
  assert.throws(
    () => buildGiftCardPopupMenuItems([
      managed,
      { ...managed, _key: 'gift-copy' }
    ]),
    /exactly one/i
  )
})
