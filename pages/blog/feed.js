import {gql} from '@apollo/client';
import client from '../../services';
import generateRSS from '../../lib/rss';

const Feed = () => {};

export const getServerSideProps = async context => {
  const postsTake = 10;
  let posts = [];

  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(take: ${postsTake}, orderBy: {createdAt: Desc}, where: {draft: {not: true}}) {
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
            createdAt
          }
        }
      `,
    });

    posts = data.posts;
  } catch (e) {
    console.error(e);
  }

  context.res.setHeader('Content-Type', 'text/xml');
  context.res.write(
    generateRSS({
      title: "Amplication's Blog",
      description:
        'Boost your knowledge and step up your game with top storys on backend development, Node.js and open-source from the Amplication team.',
      path: 'blog/feed',
      posts,
    })
  );
  context.res.end();
  return {props: {}};
};

export default Feed;
