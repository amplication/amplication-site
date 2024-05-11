import { gql } from '@apollo/client';
import client from '../../../services';
import generateRSS from '../../../lib/rss';

const TagsFeed = () => { };

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
            orderBy: {publishedAt: Desc},
            where: {
              draft: {not: true},
              tags: {some: {slug: {equals: "${context.params.tagSlug}"}}}
            }
          ) {
            slug
            title
            featuredImage
            content
            tags {
              name
              slug
            }
            author {
              firstName
              lastName
            }
            publishedAt
          }
          tags(where: {slug: {equals: "${context.params.tagSlug}"}}) {
            name
          }
        }
      `,
    });

    const tagName = data.tags.pop().name;
    posts = data.posts;
    title = tagName ? tagName + ' | ' + title : title;
  } catch (e) {
    console.error(e);
  }

  context.res.setHeader('Content-Type', 'text/xml');
  context.res.write(
    generateRSS({
      title,
      description:
        'Boost your knowledge and step up your game with top stories on backend development, .NET, Node.js and open-source from the Amplication team.',
      path: `tags/${context.params.tagSlug}/feed`,
      posts,
    }),
  );
  context.res.end();
  return { props: {} };
};

export default TagsFeed;
