import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: "http://localhost:3001/",
    experimentalStudio: true,
  },
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  video: false,
});
