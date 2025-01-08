import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";


const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "InvenTech",
    short_name: "InvenTech",
    description: "Diamond & Gold Jewellery",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      // {
      //   src: "/maskable_icon.png",
      //   sizes: "225x225",
      //   type: "image/png",
      //   purpose: "any maskable",
      // },
    ],
    theme_color: "#262761",
    background_color: "#262761",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
