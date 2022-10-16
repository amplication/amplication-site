import { Feed } from "feed";
import helpers from "../../helpers";

const md = require("markdown-it")();

/**
 * @param {{title: string, description: string, path: string, posts: any[]}} arg0
 * @returns {string}
 */
export default function generateRSS({ title, description, path, posts }) {
  const siteURL = process.env.NEXT_PUBLIC_SITE;

  const feed = new Feed({
    title,
    description,
    id: siteURL,
    generator: siteURL,
    language: "en",
    feedLinks: {
      atom: `${siteURL}/${path}`,
    },
  });

  posts.map((post) => {
    const url = siteURL + helpers.getPostSlug(post.slug);
    const author = post.author.firstName + " " + post.author.lastName;
    const content = post?.content ?? "";
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      url,
      date: new Date(post.createdAt),
      category: post.tags.map((t) => ({ name: t.name, term: t.slug })),
      author: [
        {
          name: author,
        },
      ],
      image: post.featuredImage,
      content: md.render(content),
      description: helpers.removeMarkdown(content).substring(0, 200),
    });
  });

  return feed.atom1();
}
