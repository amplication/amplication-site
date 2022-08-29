import { gql } from "@apollo/client";
import client from "../../../services";
import generateRSS from "../../../lib/rss";

const TagsFeed = () => {};

export const getServerSideProps = async (context) => {
  const postsTake = 10;
  let posts = [];
  let title = "Amplication's Blog";
  try {
    const { data } = await client.query({
      query: gql`
        query {
          posts(
            take: ${postsTake},
            orderBy: {createdAt: Desc},
            where: {tags: {some: {id: {equals: "${context.params.tagID}"}}}}
          ) {
            id
            title
            featuredImage
            content
            tags {
              name
            }
            author {
              firstName
              lastName
            }
            createdAt
          }
          tag(where: { id: "${context.params.tagID}" }) {
            name
          }
        }
      `,
    });

    posts = data.posts;
    title = data.tag.name + " | " + title;
  } catch (e) {
    console.error(e);
  }

  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(
    generateRSS({
      title,
      description:
        "Boost your knowledge and step up your game with top storys on backend development, Node.js and open-source from the Amplication team.",
      path: `tags/${context.params.tagID}/feed`,
      posts,
    })
  );
  context.res.end();
  return { props: {} };
};

export default TagsFeed;
