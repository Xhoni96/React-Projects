/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from 'vite-plugin-svgr';
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: [
  //     {
  //       find: '@', // support for absolute imports
  //       replacement: path.resolve(__dirname, 'src')
  //     }
  //   ]
  // },
  server: {
    open: "/index.html",
    host: true,
    // proxy:   try it
  },
});
