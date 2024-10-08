// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), react()],

  output: "server",
  adapter: cloudflare()
});