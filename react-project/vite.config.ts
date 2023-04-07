import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["tests/setup.js"],
    coverage: {
      provider: "istanbul",
      include: ["src/**/*", "tests/*"],
      all: true,
    },
  },
});
