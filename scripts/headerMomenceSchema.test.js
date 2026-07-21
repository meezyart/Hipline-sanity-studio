const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')

test('header editor exposes Momence controls without legacy account fields', () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, '..', 'schemas', 'documents', 'sections', 'header.js'),
    'utf8'
  )

  assert.match(source, /Show Account Sign-In Icon/)
  assert.match(source, /Show Cart Icon/)
  assert.doesNotMatch(source, /Top Account Button|Mind Body|HealCode|topAccount/i)
})

test('legacy provider schema contains no editor-facing HealCode instructions', () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, '..', 'schemas', 'objects', 'hipline', 'mbo.js'),
    'utf8'
  )

  assert.doesNotMatch(source, /HealCode|Mind Body|data-service-id|pricing-link/i)
})

test('Momence settings manage the header cart separately from Gift Cards', () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, '..', 'schemas', 'documents', 'settings', 'momence.js'),
    'utf8'
  )

  assert.match(source, /name: 'cartUrl'/)
  assert.match(source, /title: 'Cart URL'/)
  assert.match(source, /name: 'giftCardUrl'/)
})
