import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/set/union.ts"),
      name: "@fightingdreamer/set-union",
      formats: ["es", "cjs"],
      fileName: "set-union",
    },
    rollupOptions: {
      external: /@fightingdreamer[/].*/,
    },
  },
});
