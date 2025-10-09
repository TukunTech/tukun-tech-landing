module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests/unit'],
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup-jest.js'],
  collectCoverage: true,
  collectCoverageFrom: ['docs/js/**/*.js', 'docs/*.html'],
  coverageDirectory: 'coverage',
};
