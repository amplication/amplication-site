import { gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import Button from '../components/Common/Button';
import Plugin from "../components/Plugins/plugin-card";
import helpers from '../helpers';
import { MainLayout } from '../layouts';
import * as analytics from '../lib/analytics';
import client from '../services/plugin-api';

const Plugins = ({ plugins }) => {
  const handleStartNowClick = useCallback((eventName) => {
    analytics.event({
      action: eventName
    });
  }, []);

  return (
    <>
      <NextSeo
        title="Plugins: Extend the generated code with plugins | Amplication"
        description="Extend and customize your services by using plugins for various technologies and integrations."
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
            <Button
              text="Learn more about plugins"
              isLink={true}
              onClick={() => handleStartNowClick("PluginsLearnMoreClick")}
              className="!inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent !px-2"
              href="https://docs.amplication.com/plugins/overview/"
              delayLinkMs={300}
            />
            <Button
              text="Create your own plugin"
              isLink={true}
              onClick={() => handleStartNowClick("PluginsCreateYourOwnClick")}
              className="!inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent !px-2"
              href="https://docs.amplication.com/plugins/overview/"
              delayLinkMs={300}
            />
            <Button
              text="Request a new plugin"
              isLink={true}
              onClick={() => handleStartNowClick("PluginsRequestNewClick")}
              className="!inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent  !px-2"
              href="https://docs.amplication.com/plugins/overview/"
              delayLinkMs={300}
            />

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
