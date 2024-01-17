import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // eslint-disable-next-line no-undef
    "process.env": process.env,
  },
  server: {
    port: 3000,
    open: true,
  },
  base: "./",
});
