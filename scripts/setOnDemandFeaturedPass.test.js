const test = require('node:test')
const assert = require('node:assert/strict')

const {
  ON_DEMAND_PASS_ID,
  addFeaturedPass
} = require('./setOnDemandFeaturedPass.js')

test('adds the managed pass reference to the Momence Video section only', () => {
  assert.deepEqual(
    addFeaturedPass([
      { _key: 'title', _type: 'pageTitleSection' },
      { _key: 'video', _type: 'momenceVideoSection', heading: 'On-Demand' }
    ]),
    [
      { _key: 'title', _type: 'pageTitleSection' },
      {
        _key: 'video',
        _type: 'momenceVideoSection',
        heading: 'On-Demand',
        featuredPass: { _type: 'reference', _ref: ON_DEMAND_PASS_ID }
      }
    ]
  )
})

test('refuses ambiguous On-Demand page content', () => {
  assert.throws(() => addFeaturedPass([]), /exactly one Momence Video section/)
})
