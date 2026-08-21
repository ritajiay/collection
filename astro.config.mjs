// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static', // 確保是 static 以適應 GitHub Pages
  site: 'https://ritajiay.github.io',
  base: '/collection/',
  trailingSlash: 'always',
});