import client from '../services';
import { gql } from '@apollo/client';
import helpers from '../helpers';
import PropTypes from 'prop-types';
import CustomerStories from '../components/CustomerStories';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';

const Customers = ({ stories }) => {
  return (
    <>
      <NextSeo
        title="Customer Stories | Amplication"
        description="Learn how companies use Amplication to build applications to production."
      />



      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] laptop:pt-10">
        {Array.isArray(stories) && !!stories.length && <CustomerStories stories={stories} />}
        {(!Array.isArray(stories) || !stories.length) && (
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12">
            No customer stories found
          </div>
        )}
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const hotPostCount = 2;
  const postsPerPage =
    helpers.getCustomerStoriesPerPage() *
    (context.query.page ? parseInt(context.query.page) : 1);

  const postsTake = hotPostCount + postsPerPage + 1;

  try {
    const { data } = await client.query({
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
            publishedAt
            featuredImage
            slug
            tags {
              name
              slug
            }
            title
          }
        }
      `,
    });
    return {
      props: {
        stories: data?.posts,
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      stories: null
    },
  };
};

Customers.propTypes = {
  stories: PropTypes.array,
};

Customers.defaultProps = {
  stories: [],
};

Customers.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Customers;
