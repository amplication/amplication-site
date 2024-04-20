import client from '../services';
import { gql } from '@apollo/client';
import helpers from '../helpers';
import PropTypes from 'prop-types';
import CustomerStories from '../components/CustomerStories';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import HeroBlock from '../components/CustomerStories/HeroBlock';

const Customers = ({ stories }) => {
  return (
    <>
      <NextSeo
        title="Customer Stories | Amplication"
        description="Learn how companies use Amplication to build applications to production."
      />

      <PageSection>
        <HeroBlock />
      </PageSection>
      <PageSection alternate>


        <main className="w-full font-poppins z-10 laptop:mb-[100px] laptop:pt-10">
          {Array.isArray(stories) && !!stories.length && <CustomerStories stories={stories} />}
          {(!Array.isArray(stories) || !stories.length) && (
            <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12">
              No customer stories found
            </div>
          )}
        </main>
      </PageSection>

    </>
  );
};

export const getServerSideProps = async (context) => {
  const hotPostCount = 2;
  const postsPerPage =
    helpers.getCustomerStoriesPerPage() *
    (context.query.page ? parseInt(context.query.page) : 1);

  const take = hotPostCount + postsPerPage + 1;

  try {
    const { data } = await client.query({
      query: gql`
        query {
          stories(
            take: ${take},
            orderBy: {publishedAt: Desc},
            where: {draft: {not: true}}
          ) {
            publishedAt
            featuredImage
            slug
            tag            
            title
          }
        }
      `,
    });
    return {
      props: {
        stories: data?.stories,
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
