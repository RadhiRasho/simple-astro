import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{astro,html,md,mdx,svelte,tsx}"],
	theme: {
		backgroundImage: {
			prayer: "url(prayer.jpeg)",
		},
		extend: {},
	},
	plugins: [],
};

export default config;
