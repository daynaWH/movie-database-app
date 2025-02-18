import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        devSourcemap: true,
    },
    base: "/movie-database-app/",
    build: {
        outDir: "movie-database-app",
    },
});
