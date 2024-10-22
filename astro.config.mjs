// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://deosti.com.br/modelos/adv/justica/",
    output: "static",
    integrations: [react(), tailwind()],
});
