import type { Config } from "jest";

const config: Config = {
  roots: ['<rootDir>/src'],
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    "!**/node_modules/**",
  ],
};

export default config;