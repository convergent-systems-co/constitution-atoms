import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://constitution-atoms.com",
  integrations: [react()],
  output: "static",
});
