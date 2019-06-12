const base = require('./jest.config')
module.exports = Object.assign({}, base, {
    reporters: ["jest-junit"],
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**","!lib/**/*.example.{ts,tsx}"],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
})
