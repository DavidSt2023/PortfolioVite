import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import svgr from '@svgr/rollup';
// https://vite.dev/config/
export default defineConfig({
  base: '/PortfolioVite/',
  plugins: [react(), tailwindcss(),svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})