import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "localhost", // Default host
    port: 4321, // Custom port for local frontend
    proxy: {
      // "/comms/.../...": "http://localhost:3000", // Proxy requests to your backend API to avoid CORS issues
      "/comms": {
        target: "http://localhost:3000", // Target server to proxy requests
        changeOrigin: true, // Change origin header
        secure: false, // Set to false if target server uses self-signed certs
      },
    },
  },
  plugins: [react()],
});
