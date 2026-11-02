import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages project site URL:
  // https://ehsannaeemirad-droid.github.io/persian-grammar-duo/
  base: "/persian-grammar-duo/",
});
