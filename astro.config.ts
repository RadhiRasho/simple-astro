import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	site: "https://localhost:4321",
	prefetch: {
		prefetchAll: false,
	},
});
