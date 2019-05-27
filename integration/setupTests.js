const {configureToMatchImageSnapshot} = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  failureThreshold: 0.1,
  failureThresholdType: 'percent'
})

expect.extend({
  toMatchImageSnapshot
})
jest.setTimeout(30000)
