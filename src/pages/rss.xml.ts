import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { AstroUserConfig } from "astro/config";

export async function GET(context: AstroUserConfig) {
	const posts = await getCollection("posts");

	return rss({
		title: "Astro Learner | Blog",
		description: "My Journey Learning Astro",
		site: context.site ?? "https://localhost:4321",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
		customData: "<language>en-us</language>",
	});
}
