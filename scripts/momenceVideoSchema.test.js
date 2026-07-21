const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

test('Momence Video sections let editors select an On-Demand pass', () => {
  const schema = fs.readFileSync(
    path.resolve(__dirname, '..', 'schemas', 'objects', 'hipline', 'momenceVideo.js'),
    'utf8'
  )

  assert.match(schema, /name:\s*'featuredPass'/)
  assert.match(schema, /type:\s*'reference'/)
  assert.match(schema, /type:\s*'passBlock'/)
})
