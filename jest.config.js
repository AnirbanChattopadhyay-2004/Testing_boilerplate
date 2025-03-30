/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: ["**.test.ts"],
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};