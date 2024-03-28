import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { AstroUserConfig } from "astro/config";

export async function GET(context: AstroUserConfig) {
	const files = import.meta.glob("./**/*.md");

	const rssFeed = await pagesGlobToRssItems(files);

	return rss({
		title: "Astro Learner | Blog",
		description: "My Journey Learning Astro",
		site: context.site ?? "https://localhost:4321",
		// biome-ignore lint/suspicious/noExplicitAny: 🤷‍♂️
		items: rssFeed as any,
		customData: "<language>en-us</language>",
	});
}
