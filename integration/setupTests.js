const {configureToMatchImageSnapshot} = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  failureThreshold: 100,
  failureThresholdType: 'pixel'
})

expect.extend({
  toMatchImageSnapshot
})
jest.setTimeout(30000)
