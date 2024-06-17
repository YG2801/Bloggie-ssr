import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: ["react-router-dom", "react-redux", "@reduxjs/toolkit"],
    },
    build: {
        outDir: "dist/client",
        rollupOptions: {
            input: "/src/entry-client.jsx",
        },
    },
    ssr: {
        outDir: "dist/server",
        rollupOptions: {
            input: "/src/entry-server.jsx",
        },
    },
});
