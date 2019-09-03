const {defaults: tsjPreset} = require('ts-jest/presets')
const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('../tsconfig')

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    {
      prefix: '<rootDir>/'
    }
  ),
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: [
    './setupTests.js'
  ],
  transform: tsjPreset.transform
}
