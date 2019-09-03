const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  collectCoverageFrom: [
    'src/scripts/**/*.{ts,tsx}'
  ],
  coverageReporters: [
    'json'
  ],
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    {
      prefix: '<rootDir>/'
    }
  ),
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    './tools/setupTests.js'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'integration'
  ]
}
