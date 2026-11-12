import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    reactRouter(),
    tailwindcss(),
  ],
});
