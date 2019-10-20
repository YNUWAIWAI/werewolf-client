module.exports = {
  collectCoverageFrom: [
    'src/scripts/**/*.{ts,tsx}'
  ],
  coverageReporters: [
    'json'
  ],
  globals: {
    'ts-jest': {
      tsConfig: {
        sourceMap: false
      }
    }
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    './tools/setupTests.js'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'integration'
  ]
}
