import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["/db-test-config\\.ts"],
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { useESM: true }],
  },
};
export default config;
