import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Backend
        changeOrigin: true, // Muda a origem do header de requisição para o backend
        secure: false, // Para aceitar certificados SSL não válidos (se estiver usando http)
      }, // Redireciona as requisições de /api para o backend
    },
  },
});
