import { gql } from '@apollo/client';
import 'highlight.js/styles/github-dark-dimmed.css';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomerQuote from '../../components/CustomerStories/CustomerQuote';

import client from '../../services';
import helpers from '../../helpers';
import Header from '../../components/Posts/Header';
import Logo from '../../components/CustomerStories/CustomerStoryCard/Logo';
import Tags from '../../components/Posts/PostCard/Tags';
import Title from '../../components/Posts/PostCard/Title';
import CustomerStoryCard from '../../components/CustomerStories/CustomerStoryCard';
import errorPage from '../404';
import { MainLayout } from '../../layouts';


const CustomerStory = ({ stories, story }) => {
  if (!story) {
    return errorPage();
  }

  const title = story.metaTitle || story.title;
  const description = helpers.trimText(
    story.metaDescription || helpers.removeMarkdown(story.content),
  );
  const headings = helpers.generateHeadings(story.content);

  // const contentWithCta = helpers.injectCtaToMarkdown(
  //   helpers.demoteHeadings(story.content),
  // );

  const contentWithCta = helpers.demoteHeadings(story.content);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        noindex={!!story.draft}
        nofollow={!!story.draft}
        openGraph={{
          url: helpers.getCustomerStorySlug(story.slug),
          title,
          description,
          site_name: 'Amplication.com Customers Stories',
        }}
      />



      <main className="flex flex-col flex-wrap  justify-center items-center w-full bg-dark-black-100 font-poppins max-medium:overflow-hidden p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop py-8 ">


        <div className="max-medium:w-full medium:max-w-[881px] flex-1 order-1 flex flex-col laptop:block overflow-hidden gap-8 mb-16">
          {story && (
            <>
              <div className="mt-16 laptop:mt-12">
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
                      <Link href="/customers">
                        <a className="text-white font-poppins font-medium text-sm hover:text-purple-bright-hover">
                          Customers
                        </a>
                      </Link>{' '}
                      /
                    </li>
                    <li className="text-turquoise inline-block">
                      <span className="text-turquoise font-poppins font-medium text-sm">
                        {story.customerName}
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
              <Tags list={[{ name: story.tag }]} isLink />

              <Logo
                src={
                  helpers.isValidUrl(story.featuredImage)
                    ? story.featuredImage
                    : null
                }
                alt={story.title}
              />
              <Title
                level={1}
                className="order-1 text-lg font-semibold text-white text-[32px] leading-[48px] laptop:mt-8 laptop:mb-8"
                text={story.title}
              />


              <div className="font-normal order-5 blog-content text-base text-white">

                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeHighlight]}
                  components={{
                    h1: Header,
                    h2: Header,
                    h3: Header,
                    customerquote: CustomerQuote
                  }}
                >
                  {contentWithCta}
                </ReactMarkdown>
              </div>
            </>
          )}
        </div>



        {Array.isArray(stories) && !!stories.length && (
          <>
            <div className="w-full pt-4 pb-6 laptop:py-16 desktop:pt-0 order-4">
              <div className="w-full mb-6 laptop:mb-8">
                <Title className="text-xl laptop:text-xl font-semibold text-white">
                  Related Customer Stories<span className="text-[#53DBEE]">.</span>
                </Title>
              </div>
              <Swiper
                className="flex flex-col-reverse !overflow-visible"
                loop={false}
                spaceBetween={24}
                slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  clickableClass: 'swiper-pagination-clickable !relative pt-4',
                  bulletClass: 'swiper-pagination-bullet !bg-white',
                  bulletActiveClass:
                    'swiper-pagination-bullet-active relative top-[1px] !bg-secondary-turquoise !w-2.5 !h-2.5',
                }}
              >
                {stories.map((story, i) => {
                  return (
                    <SwiperSlide
                      className="!h-auto"
                      key={story.slug}
                      virtualIndex={i}
                    >
                      <CustomerStoryCard
                        data={story}
                        key={story.slug}
                        clickEventName="relatedBlogItemClicked"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export const getStaticProps = async (context) => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          stories(where: {slug: {equals: "${context.params.slug}"}}) {
            publishedAt
            content
            draft
            featuredImage
            customerName
            metaDescription
            metaTitle
            slug
            title
            tag
          }
        }
      `,
    });
    const story = data.stories?.pop();
    let stories = null;

    if (story && story.slug) {
      stories = await client.query({
        query: gql`
          query {
            stories(take: 3, orderBy: {publishedAt: Desc}, where: {slug: {not: "${story.slug}"}, draft: {not: true}}) {
              slug
              title
              featuredImage
              tag
              publishedAt
            }
          }
        `,
      });
    }
    return {
      props: {
        stories: stories ? stories.data.stories : null,
        story,
      },
      revalidate: 30,
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      stories: null,
      story: null,
    },
    revalidate: 30,
  };
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        stories(take: 1000, orderBy: { publishedAt: Desc }) {
          slug
          title
        }
      }
    `,
  });

  const paths = data.stories.map((story) => ({
    params: {
      slug: story.slug,
    },
  }));

  return { paths, fallback: 'blocking' };
}

CustomerStory.propTypes = {
  story: PropTypes.object,
  stories: PropTypes.array,
};

CustomerStory.defaultProps = {
  story: {},
  stories: [],
};
CustomerStory.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default CustomerStory;
