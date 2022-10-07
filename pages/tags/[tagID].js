import Posts from "../../components/Posts";
import Filter from "../../components/Posts/Filter";
import PropTypes from "prop-types";
import client from "../../services";
import { gql } from "@apollo/client";
import helpers from "../../helpers";
import { NextSeo } from "next-seo";
import Layout from "../../layouts";

const TagsPage = (props) => {
  let { posts, tags } = props;

  return (
    <>
      <NextSeo
        title="Amplication - Generate Node.js apps, just code what matters"
        description="Amplication is an open-source development tool. It helps you develop
          quality Node.js applications without spending time on repetitive
          coding tasks."
        canonical={`${process.env.NEXT_PUBLIC_SITE}/blog`}
      />
      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] laptop:pt-10">
        {Array.isArray(tags) && !!tags.length && <Filter tags={tags} />}
        {Array.isArray(posts) && !!posts.length && <Posts posts={posts} />}
        {(!Array.isArray(posts) || !posts.length) && (
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12">
            Posts not found
          </div>
        )}
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const postsPerPage =
    helpers.getPostPerPage() *
    (context.params.page ? parseInt(context.params.page) : 1);
  const postsTake = postsPerPage + 1;
  const postsByTagID = context.params.tagID
    ? `, where: {tags: {some: {id: {equals: "${context.params.tagID}"}}}}, `
    : "";

  try {
    const { data } = await client.query({
      query: gql`
        query {
          posts(take: ${postsTake}, orderBy: {createdAt: Desc}${postsByTagID}) {
            id
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
          tags {
            id
            name
            posts(take: 1) {
              id
            }
          }
        }
      `,
    });

    return {
      props: {
        posts: data.posts ? data.posts : null,
        tags: data.tags ? data.tags : null,
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      posts: null,
      tags: null,
    },
  };
};

TagsPage.propTypes = {
  posts: PropTypes.array,
  tags: PropTypes.array,
};

TagsPage.defaultProps = {
  posts: [],
  tags: [],
};
TagsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default TagsPage;
