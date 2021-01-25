module.exports = {
  testMatch: [
    '**/resources/js/**/*.test.{js,jsx}',
    '**/scripts/**/*.test.js',
    '**/test/**/*.test.js',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/resources/js/**/*.{js,jsx}',
  ],
  coverageDirectory: 'Report',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/wwwroot/',
  ],
  setupFiles: [
    './test/setupTests.js',
  ],
  coverageReporters: ['json', 'lcov', 'clover', 'text', 'text-summary', 'cobertura'],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
};
