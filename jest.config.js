module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    './tools/setupTests.js'
  ],
  testEnvironment: 'node'
}
