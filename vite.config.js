import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/super-website/", // 设置基本路径
  plugins: [react()],
});
