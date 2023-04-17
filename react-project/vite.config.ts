import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["tests/setup.js"],
    coverage: {
      provider: "istanbul",
      include: ["src/**/*", "tests/*"],
      exclude: ["src/main.tsx"],
      all: true,
    },
  },
};

export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
});
