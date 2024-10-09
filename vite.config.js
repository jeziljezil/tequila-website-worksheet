import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
// })

export default defineConfig({
  base: "/tequila-website-worksheet/", // Update this to match your repository name
  plugins: [react()],
  // other options...
});
