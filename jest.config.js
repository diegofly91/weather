// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>__test__/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    },
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'jest-environment-jsdom'
};