import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: ["react-router-dom", "react-redux", "@reduxjs/toolkit"],
    },
    build: {
        rollupOptions: {
            input: {
                client: "src/entry-client.jsx",
                server: "src/entry-server.jsx",
            },
        },
    },
});
