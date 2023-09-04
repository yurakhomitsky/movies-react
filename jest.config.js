module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.ts'
  ],
  testMatch: [
    '<rootDir>/src/**/*.test.(j|t)sx',
    '<rootDir>/src/**/*.test.(j|t)s'
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/styleMock.js',
  },
}