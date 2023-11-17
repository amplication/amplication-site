import { gql } from '@apollo/client';
import 'highlight.js/styles/github-dark-dimmed.css';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PluginDetails from '../../components/Plugins/plugin-details';
import Button from '../../components/Common/Button';

import client from '../../services/plugin-api';

import helpers from '../../helpers';
import { MainLayout } from '../../layouts';
import errorPage from '../404';
import StartNowPlugin from '../../components/Plugins/start-now-plugin';



const Plugin = ({ plugin }) => {
  if (!plugin) {
    return errorPage();
  }

  const logoUrl = helpers.getPluginLogoUrl(plugin);
  const title = plugin.name;
  const description = plugin.description;


  return (
    <>
      <NextSeo
        title={title}
        description={description}
        pageImage={
          helpers.isValidUrl(logoUrl) ? logoUrl : ''
        }

        openGraph={{
          url: helpers.getPluginSlug(plugin.pluginId),
          title,
          description,
          images: [
            {
              url: logoUrl,
              alt: title,
            },
          ],
          site_name: 'Amplication plugins',
        }}
      />

      <div className="w-full p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop mt-16 laptop:mt-12">
        <nav>
          <ul className="flex justify-start items-center flex-wrap">
            <li className="text-white inline-block mr-1">
              <Link href={process.env.NEXT_PUBLIC_SITE}>
                <a className="text-white font-poppins font-medium text-sm hover:text-purple-bright-hover">
                  Home
                </a>
              </Link>{' '}
              /
            </li>
            <li className="text-white inline-block mr-1">
              <Link href="/plugins">
                <a className="text-white font-poppins font-medium text-sm hover:text-purple-bright-hover">
                  Plugins
                </a>
              </Link>{' '}
              /
            </li>
            <li className="text-turquoise inline-block">
              <span className="text-turquoise font-poppins font-medium text-sm">
                {title}
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <main className="flex flex-col flex-wrap laptop:flex-row justify-between w-full bg-dark-black-100 font-poppins max-medium:overflow-hidden p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-8 gap-8 desktop:gap-28">
        <div className="max-medium:w-full  flex-1 order-1 flex flex-col laptop:block overflow-hidden">
          {plugin && <PluginDetails plugin={plugin} />}
        </div>

      </main>
      <StartNowPlugin plugin={plugin} />
    </>
  );
};

export const getStaticProps = async (context) => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          plugins(where: {pluginId: {equals: "${context.params.slug}"}}) {
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

    const plugin = data.plugins?.pop();


    return {
      props: {
        plugin,
      },
      revalidate: 30,
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      plugin: null,
    },
    revalidate: 30,
  };
};

export async function getStaticPaths() {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          plugins {
            id
            pluginId
          }
        }
      `,
    });

    const paths = data.plugins.map((plugin) => ({
      params: {
        slug: plugin.pluginId,
      },
    }));

    return { paths, fallback: 'blocking' };


  } catch (e) {
    console.error(e);
  }

  return {
    paths: [
      {
        params: {
          slug: "none",
        },
      }
    ], fallback: 'blocking'
  };


}

Plugin.propTypes = {
  plugin: PropTypes.object
};

Plugin.defaultProps = {
  plugin: {}
};
Plugin.getLayout = function getLayout(page) {
  return <MainLayout hideFooterBanner={true}>{page}</MainLayout>;
};
export default Plugin;
