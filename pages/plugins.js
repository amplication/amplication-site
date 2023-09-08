import { gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Plugin from "../components/Plugins/plugin-card";
import helpers from '../helpers';
import { MainLayout } from '../layouts';
import client from '../services/plugin-api';
import Link from 'next/link';

const Plugins = ({ plugins }) => {

  return (
    <>
      <NextSeo
        title="Plugins: Extend the generate code with plugins | Amplication"
        description="Boost your knowledge and step up your game with top stories on backend development, Node.js and open-source from the Amplication team."
      />
      <main className="w-full font-poppins z-10 mt-12 mb-12 laptop:mb-[100px] ">
        <section className={'background-transparent amplication-base mb-12'}>
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
            <div className="row align-items-center justify-content-center mb-4">
              <h1

                className="mx-auto h1 !font-semibold  tracking-normal text-center max-w-[960px]"
              >Find a Plugin</h1>

            </div>
            <div >
              <h2 className="h3 text-center max-w-[960px] mx-auto text-gray">
                Extend and customize your services by using plugins for various technologies and integrations.
              </h2>
            </div>
          </div>

        </section>
        <div className={'w-full max-w-container m-container p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop  laptop:pb-0   '}>
          <div className='mb-10'>
            <Link href="https://docs.amplication.com/plugins/overview/">
              <a className="text-white text-xs font-poppins font-medium py-1 px-2 inline-block">
                Learn more about plugins
              </a>
            </Link>
            <Link href="https://docs.amplication.com/plugins/how-to-create-plugin/">
              <a className="text-white text-xs font-poppins font-medium py-1 px-2 inline-block">
                Create your own plugin
              </a>
            </Link>
            <Link href="https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+feature+request&projects=&template=feature.yml&title=%F0%9F%A7%A9%20Plugin%20request:">
              <a className="text-white text-xs font-poppins font-medium py-1 px-2 inline-block">
                Request a new plugin
              </a>
            </Link>
          </div>
        </div>



        <div className={'mt-4 w-full max-w-container m-container p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5 laptop:gap-x-7.5 laptop:gap-y-[61px]'}>
          {plugins.map((plugin) => (
            <Plugin key={plugin.pluginId} plugin={plugin} />
          ))}
          {(!Array.isArray(plugins) || !plugins.length) && (
            <div>
              plugins not found
            </div>
          )}
        </div>

      </main >
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
      plugins: null,
    },
  };
};

Plugins.propTypes = {
  plugins: PropTypes.array
};

Plugins.defaultProps = {
  plugins: []
};

Plugins.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Plugins;
