module.exports = {
  collectCoverageFrom: [
    'src/scripts/**/*.{ts,tsx}'
  ],
  coverageReporters: [
    'json'
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    './tools/setupTests.js'
  ],
  testEnvironment: 'node'
}
