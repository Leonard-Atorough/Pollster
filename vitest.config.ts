import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles:["./client/src/vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "**node_modules/**",
        "**test/**",
        "**src/mocks/**",
        "**src/types/**",
        "**src/index.tsx",
        "**src/main.tsx",
        "**src/vitest.config.ts",
      ],
    },
    projects: ["./client", "./server"],
  },
});
