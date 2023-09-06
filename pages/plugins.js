import { gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Plugin from "../components/Plugins/Plugin";
import helpers from '../helpers';
import { MainLayout } from '../layouts';
import client from '../services/plugin-api';

const Plugins = ({ plugins }) => {

  return (
    <>
      <NextSeo
        title="Plugins: Node.js Insights for Developers & Enterprises | Amplication"
        description="Boost your knowledge and step up your game with top stories on backend development, Node.js and open-source from the Amplication team."
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] laptop:pt-10">
        {Array.isArray(plugins) && !!plugins.length && (<div>
          <div className={
            'w-full max-w-container m-container p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5 laptop:gap-x-7.5 laptop:gap-y-[61px]'
          }>
            {plugins.map((plugin) => (
              <Plugin key={plugin.pluginId} plugin={plugin} />

            ))}
          </div>
        </div>)}
        {(!Array.isArray(plugins) || !plugins.length) && (
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12">
            plugins not found
          </div>
        )}
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const hotPostCount = 1;
  const postsPerPage =
    helpers.getPostPerPage() *
    (context.query.page ? parseInt(context.query.page) : 1);

  const postsTake = hotPostCount + postsPerPage + 1;

  try {
    const { data } = await client.query({
      query: gql`
        query {
          plugins {
            id
            pluginId
            name
            icon
            description
            taggedVersions
            npm
            github
            website
          }
        }
      `,
    });
    return {
      props: {
        plugins: data?.plugins
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      posts: null,
    },
  };
};

Plugins.propTypes = {
  posts: PropTypes.array
};

Plugins.defaultProps = {
  posts: []
};

Plugins.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Plugins;
