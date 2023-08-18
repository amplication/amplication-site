import Posts from '../../components/Posts';
import Filter from '../../components/Posts/Filter';
import PropTypes from 'prop-types';
import client from '../../services';
import { gql } from '@apollo/client';
import helpers from '../../helpers';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../../layouts';

const TagsPage = (props) => {
  const { posts, tags, tag } = props;
  const title = `${tag.name} | Amplication's Blog`;

  return (
    <>
      <NextSeo
        title={title}
        description="Amplication is an open-source development tool. It helps you develop
          quality Node.js applications without spending time on repetitive
          coding tasks."
        canonical={helpers.getCanonical('blog')} //override default canonical
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

  try {
    const { data } = await client.query({
      query: gql`
        query {
          posts(
            take: ${postsTake},
            orderBy: {publishedAt: Desc},
            where: {
              draft: {not: true},
              tags: {some: {slug: {equals: "${context.params.tagSlug}"}}}
            }
          ) {
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
          tags {
            name
            posts(take: 1, where: {draft: {not: true}}) {
              id
            }
            slug
          }
        }
      `,
    });

    const tag = data.tags.find((t) => t.slug === context.params.tagSlug);
    if (!tag) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        posts: data.posts ? data.posts : null,
        tags: data.tags ? data.tags : null,
        tag,
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      posts: null,
      tag: null,
      tags: null,
    },
  };
};

TagsPage.propTypes = {
  posts: PropTypes.array,
  tag: PropTypes.object,
  tags: PropTypes.array,
};

TagsPage.defaultProps = {
  posts: [],
  tag: null,
  tags: [],
};
TagsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default TagsPage;
