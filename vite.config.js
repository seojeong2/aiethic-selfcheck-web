import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aiesc/",
  plugins: [vue()],
  // base: "/aiesc/",
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, "cert/localhost-key.pem")),
  //     cert: fs.readFileSync(path.resolve(__dirname, "cert/localhost.pem")),
  //   },
  //   host: "localhost",
  //   port: 3000, // 원하는 포트 번호
  // },
  // plugins: [vue()],
});
