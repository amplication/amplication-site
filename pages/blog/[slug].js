import {gql} from '@apollo/client';
// eslint-disable-next-line node/no-extraneous-import
import 'highlight.js/styles/github-dark-dimmed.css';
import Link from 'next/link';
import {NextSeo} from 'next-seo';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import {Pagination} from 'swiper';
// eslint-disable-next-line node/no-missing-import
import 'swiper/css';
// eslint-disable-next-line node/no-missing-import
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

import client from '../../services';
import helpers from '../../helpers';
import Header from '../../components/Posts/Header';
import Thumbnail from '../../components/Posts/PostCard/Tumbnail';
import Author from '../../components/Posts/PostCard/Author';
import Tags from '../../components/Posts/PostCard/Tags';
import Title from '../../components/Posts/PostCard/Title';
import PostCard from '../../components/Posts/PostCard';
import Sidebar from '../../components/Sidebar';
import errorPage from '../404';
import {MainLayout} from '../../layouts';
import TOC from '../../components/Posts/TOC';

const Post = ({posts, post}) => {
  if (!post) {
    return errorPage();
  }

  const title = post.metaTitle || post.title;
  const description = helpers.trimText(
    post.metaDescription || helpers.removeMarkdown(post.content)
  );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        pageImage={
          helpers.isValidUrl(post.featuredImage) ? post.featuredImage : ''
        }
        noindex={!!post.draft}
        nofollow={!!post.draft}
        openGraph={{
          url: helpers.getPostSlug(post.slug),
          title,
          description,
          images: [
            {
              url: post.featuredImage,
              alt: post.title,
            },
          ],
          site_name: 'Amplication Blog',
        }}
        twitter={{
          handle: '@amplication',
          site: 'amplication.com',
          cardType: 'summary_large_image',
        }}
        canonical={helpers.getCanonical(helpers.getPostSlug(post.slug))}
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
              <Link href="/blog">
                <a className="text-white font-poppins font-medium text-sm hover:text-purple-bright-hover">
                  Blog
                </a>
              </Link>{' '}
              /
            </li>
            <li className="text-turquoise inline-block">
              <span className="text-turquoise font-poppins font-medium text-sm">
                {post.title}
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <main className="flex flex-col flex-wrap laptop:flex-row justify-between w-full bg-dark-black-100 font-poppins max-medium:overflow-hidden p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-8 gap-8 desktop:gap-28">
        <div className="max-medium:w-full medium:max-w-[881px] flex-1 order-1 flex flex-col laptop:block overflow-hidden">
          {post && (
            <>
              <Title
                level={1}
                className="order-1 text-lg font-semibold text-white text-[32px] leading-[48px] laptop:mt-8 laptop:mb-8"
                text={post.title}
              />
              <Tags list={post.tags} className="order-3" />
              <Author
                className={'order-2 mt-4 laptop:mt-8'}
                avatar={post.author?.profileImage}
                name={post.author?.firstName + ' ' + post.author?.lastName}
                date={post.publishedAt}
                large={true}
              />
              <Thumbnail
                objectFit="initial"
                className={'order-4 mt-8 mb-16 rounded-2xl !aspect-auto'}
                src={
                  helpers.isValidUrl(post.featuredImage)
                    ? post.featuredImage
                    : null
                }
                alt={post.title}
              />
              <div className="font-normal order-5 blog-content text-base text-white">
                <div className="d-xl-none">
                  <TOC markdown={post.content} />
                </div>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeHighlight]}
                  components={{
                    h1: Header,
                    h2: Header,
                    h3: Header,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </>
          )}
        </div>

        <aside className="max-medium:w-full medium:max-w-[425px] medium:w-[32%] order-9 laptop:order-2">
          <Sidebar>
            <TOC markdown={post.content} open={true} />
          </Sidebar>
        </aside>

        {Array.isArray(posts) && !!posts.length && (
          <>
            <div className="w-full pt-4 pb-6 laptop:py-16 desktop:pt-0 order-4">
              <div className="w-full mb-6 laptop:mb-8">
                <Title className="text-2xl laptop:text-[32px] leading-9 laptop:leading-[48px] font-semibold text-white">
                  Related Posts<span className="text-[#53DBEE]">.</span>
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
                {posts.map((post, i) => {
                  return (
                    <SwiperSlide
                      className="!h-auto"
                      key={post.slug}
                      virtualIndex={i}
                    >
                      <PostCard data={post} key={post.slug} />
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

export const getStaticProps = async context => {
  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(where: {slug: {equals: "${context.params.slug}"}}) {
            publishedAt
            content
            draft
            featuredImage
            metaDescription
            metaTitle
            slug
            title
            tags {
              id
              name
              slug
            }
            author {
              id
              firstName
              lastName
              profileImage
            }
          }
        }
      `,
    });
    const post = data.posts?.pop();
    let posts = null;

    if (post && post.slug) {
      const tags =
        post.tags && post.tags.length
          ? `, tags: {some: {id: {in: ["${post.tags
              .map(tag => {
                return tag.id;
              })
              .join('" ,"')}"]}}}`
          : '';

      posts = await client.query({
        query: gql`
          query {
            posts(take: 3, orderBy: {publishedAt: Desc}, where: {slug: {not: "${post.slug}"} ${tags}}) {
              slug
              title
              featuredImage
              tags {
                name
                slug
              }
              author {
                id
                firstName
                lastName
                profileImage
              }
              publishedAt
            }
          }
        `,
      });
    }
    return {
      props: {
        posts: posts ? posts.data.posts : null,
        post,
      },
      revalidate: 30,
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      posts: null,
      post: null,
    },
    revalidate: 30,
  };
};

export async function getStaticPaths() {
  const {data} = await client.query({
    query: gql`
      query {
        posts(take: 1000, orderBy: {publishedAt: Desc}) {
          slug
          title
        }
      }
    `,
  });

  const paths = data.posts.map(post => ({
    params: {
      slug: post.slug,
    },
  }));

  return {paths, fallback: 'blocking'};
}

Post.propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array,
};

Post.defaultProps = {
  post: {},
  posts: [],
};
Post.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Post;
