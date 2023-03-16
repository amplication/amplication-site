import client from '../services';
import {gql} from '@apollo/client';
import helpers from '../helpers';
import PropTypes from 'prop-types';
import Posts from '../components/Posts';
import Filter from '../components/Posts/Filter';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';

const Blog = ({posts, tags}) => {
  return (
    <>
      <NextSeo
        title="Blog: Node.js Insights for Developers & Enterprises | Amplication"
        description="Boost your knowledge and step up your game with top stories on backend development, Node.js and open-source from the Amplication team."
        canonical={helpers.getCanonical('blog')}
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] laptop:pt-10">
        {Array.isArray(tags) && !!tags.length && <Filter tags={tags} />}
        {Array.isArray(posts) && !!posts.length && <Posts posts={posts} />}
        {(!Array.isArray(posts) || !posts.length) && (
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12">
            Posts not found
          </div>
        )}
      </main>
    </>
  );
};

export const getServerSideProps = async context => {
  const hotPostCount = 1;
  const postsPerPage =
    helpers.getPostPerPage() *
    (context.query.page ? parseInt(context.query.page) : 1);

  const postsTake = hotPostCount + 2 * postsPerPage;

  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(
            take: ${postsTake},
            orderBy: {publishedAt: Desc},
            where: {draft: {not: true}}
          ) {
            author {
              id
              firstName
              lastName
              profileImage
            }
            content
            publishedAt
            featuredImage
            slug
            tags {
              name
              slug
            }
            title
          }
          tags {
            name
            posts(take: 1, where: {draft: {not: true}}) {
              slug
            }
            slug
          }
        }
      `,
    });
    return {
      props: {
        posts: data?.posts,
        tags: data?.tags,
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      posts: null,
      tags: null,
    },
  };
};

Blog.propTypes = {
  posts: PropTypes.array,
  tags: PropTypes.array,
};

Blog.defaultProps = {
  posts: [],
  tags: [],
};

Blog.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Blog;
