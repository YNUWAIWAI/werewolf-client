const {defaults: tsjPreset} = require('ts-jest/presets')

module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: [
    './setupTests.js'
  ],
  transform: tsjPreset.transform
}
