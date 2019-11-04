module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '^actions$': '<rootDir>/src/actions',
    '^reducers$': '<rootDir>/src/reducers',
    '^store$': '<rootDir>/src/store'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup/setupEnzyme.js'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup'],
  collectCoverage: true
};
