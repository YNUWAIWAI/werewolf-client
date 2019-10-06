const {defaults: tsjPreset} = require('ts-jest/presets')
const {compilerOptions} = require('../tsconfig')

module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: [
    './setupTests.js'
  ],
  transform: tsjPreset.transform
}
