module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  babelConfig: true,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
  }
};
