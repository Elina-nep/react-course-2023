import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["tests/setup.js"],
    coverage: {
      provider: "istanbul",
      include: ["src/**/*", "tests/*"],
      exclude: [
        "src/main.tsx",
        "src/entry-client.tsx",
        "src/entry-server.tsx",
        "src/pages/Html.tsx",
        "src/utils/createApi.ts",
      ],
      all: true,
    },
  },
  server: {
    watch: {
      ignored: ["/coverage/"],
    },
  },
};

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: vitestConfig.test,
  build: {
    sourcemap: true,
  },
});
