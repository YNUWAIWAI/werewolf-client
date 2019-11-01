module.exports = {
  collectCoverageFrom: [
    'src/scripts/**/*.{ts,tsx}'
  ],
  coverageReporters: [
    'json'
  ],
  preset: 'ts-jest',
  setupFiles: [
    'fake-indexeddb/auto'
  ],
  setupFilesAfterEnv: [
    './tools/setupTests.js'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'integration'
  ]
}
