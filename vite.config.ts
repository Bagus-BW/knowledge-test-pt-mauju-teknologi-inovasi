import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@template": path.resolve(__dirname, "./src/components/template"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@plugins": path.resolve(__dirname, "./src/plugins"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@schemas": path.resolve(__dirname, "./src/schemas"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    }
  }
})
