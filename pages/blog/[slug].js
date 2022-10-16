import client from "../../services";
import helpers from "../../helpers";
import { gql } from "@apollo/client";
import Thumbnail from "../../components/Posts/PostCard/Tumbnail";
import Link from "next/link";
import Author from "../../components/Posts/PostCard/Author";
import Tags from "../../components/Posts/PostCard/Tags";
import Title from "../../components/Posts/PostCard/Title";
import PostCard from "../../components/Posts/PostCard";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../components/Sidebar";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from "prop-types";
import errorPage from "../404";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark-dimmed.css";
import { NextSeo } from "next-seo";
import { MainLayout } from "../../layouts";

const Post = ({ posts, post }) => {
  if (!post) {
    return errorPage();
  }

  const rawPostContent = helpers.removeMarkdown(post.content);

  return (
    <>
      <NextSeo
        title={post.title}
        description={rawPostContent.substring(0, 150)}
        pageImage={
          helpers.isValidUrl(post.featuredImage) ? post.featuredImage : ""
        }
        openGraph={{
          url: helpers.getPostSlug(post.slug),
          title: post.title,
          description: rawPostContent.substring(0, 150),
          images: [
            {
              url: post.featuredImage,
              alt: post.title,
            },
          ],
          site_name: "Amplication Blog",
        }}
        twitter={{
          handle: "@amplication",
          site: "amplication.com",
          cardType: "summary_large_image",
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
              </Link>{" "}
              /
            </li>
            <li className="text-white inline-block mr-1">
              <Link href="/blog">
                <a className="text-white font-poppins font-medium text-sm hover:text-purple-bright-hover">
                  Blog
                </a>
              </Link>{" "}
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
                className={"order-2 mt-4 laptop:mt-8"}
                avatar={post.author?.profileImage}
                name={post.author?.firstName + " " + post.author?.lastName}
                date={post.createdAt}
                large={true}
              />
              <Thumbnail
                objectFit="initial"
                className={"order-4 mt-8 mb-16 rounded-2xl !aspect-auto"}
                src={
                  helpers.isValidUrl(post.featuredImage)
                    ? post.featuredImage
                    : null
                }
                alt={post.title}
              />
              <div className="font-normal order-5 blog-content text-base text-white">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeHighlight]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </>
          )}
        </div>

        <aside className="max-medium:w-full medium:max-w-[425px] medium:w-[32%] order-9 laptop:order-2">
          <Sidebar />
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
                  clickableClass: `swiper-pagination-clickable !relative pt-4`,
                  bulletClass: `swiper-pagination-bullet !bg-white`,
                  bulletActiveClass: `swiper-pagination-bullet-active relative top-[1px] !bg-secondary-turquoise !w-2.5 !h-2.5`,
                }}
              >
                {posts.map((post, i) => {
                  return (
                    <SwiperSlide
                      className="!h-auto"
                      key={post.id}
                      virtualIndex={i}
                    >
                      <PostCard data={post} key={post.id} />
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
  console.log(context.params.slug);
  try {
    const { data } = await client.query({
      query: gql`
        query {
          posts(where: {slug: {equals: "${context.params.slug}"}}) {
            slug
            title
            content
            featuredImage
            tags {
              id
              name
            }
            author {
              id
              firstName
              lastName
              profileImage
            }
            createdAt
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
              .map((tag) => {
                return tag.id;
              })
              .join('" ,"')}"]}}}`
          : "";

      posts = await client.query({
        query: gql`
          query {
            posts(take: 3, orderBy: {createdAt: Desc}, where: {slug: {not: "${post.slug}"} ${tags}}) {
              slug
              title
              featuredImage
              tags {
                id
                name
              }
              author {
                id
                firstName
                lastName
                profileImage
              }
              createdAt
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
  const { data } = await client.query({
    query: gql`
      query {
        posts(take: 1000, orderBy: { createdAt: Desc }) {
          id
          title
        }
      }
    `,
  });

  const paths = data.posts.map((post) => ({
    params: {
      slug: `${post.title}`.split(" ").join("-").toLowerCase(),
    },
  }));

  return { paths, fallback: "blocking" };
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
  return <MainLayout hideBackground>{page}</MainLayout>;
};
export default Post;
