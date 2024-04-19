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
import PageSection from '../components/Common/PageSection';

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
      <main className="w-full font-poppins z-10 mt-12  ">
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
          <div className='mb-4'>
            <Button
              text="Learn more about plugins"
              isLink={true}
              onClick={() => handleStartNowClick("PluginsLearnMoreClick")}
              className="!inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent !px-2 text-secondary-turquoise"
              href="https://docs.amplication.com/getting-started/plugins/"
              delayLinkMs={300}
              target={"_blank"}
            />
            <Button
              text="Create your own plugin"
              isLink={true}
              onClick={() => handleStartNowClick("PluginsCreateYourOwnClick")}
              className="!inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent !px-2  text-secondary-turquoise"
              href="https://docs.amplication.com/plugins/how-to-create-plugin/"
              delayLinkMs={300}
              target={"_blank"}
            />
            <Button
              text="Request a new plugin"
              isLink={true}
              onClick={() => handleStartNowClick("PluginsRequestNewClick")}
              className="!inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent  !px-2  text-secondary-turquoise"
              href="https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+feature+request&projects=&template=feature.yml"
              delayLinkMs={300}
              target={"_blank"}
            />

          </div>
        </div>




        <PageSection alternate>

          <div className={'mt-4  w-full max-w-container m-container p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0'}>
            <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 medium:grid-cols-3 gap-7.5   py-8'>
              {plugins.map((plugin) => (
                <Plugin key={plugin.pluginId} plugin={plugin} />
              ))}
              {(!Array.isArray(plugins) || !plugins.length) && (
                <div>
                  plugins not found
                </div>
              )}
            </div>
          </div>
        </PageSection>

      </main >
    </>
  );
};

export const getServerSideProps = async (context) => {
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
