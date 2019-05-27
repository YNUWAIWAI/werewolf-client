const {configureToMatchImageSnapshot} = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot()

expect.extend({
  toMatchImageSnapshot
})
jest.setTimeout(30000)
