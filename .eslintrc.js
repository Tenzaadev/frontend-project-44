module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
  },
  env: {
    node: true,
    es6: true,
  },
};

module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['lcov', 'text-summary'],
  testEnvironment: 'node',
};
