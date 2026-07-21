const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

test('external service sections accept official Momence plugin snippets', () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, '..', 'schemas', 'objects', 'hipline', 'externalService.js'),
    'utf8'
  )

  assert.match(source, /title:\s*'Iframe \/ Momence Plugin'/)
  assert.match(source, /name:\s*'momencePluginCode'/)
  assert.match(source, /title:\s*'Momence plugin code'/)
  assert.match(source, /type:\s*'text'/)
})
