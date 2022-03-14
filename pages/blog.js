import client from '../services';
import {gql} from '@apollo/client';
import helpers from '../helpers';
import PropTypes from 'prop-types';
import DocumentHead from '../components/Common/DocumentHead';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Filter from '../components/Posts/Filter';
import Footer from '../components/Footer';
import Background from '../components/Background';

const Blog = ({posts, tags}) => {
  return (
    <>
      <DocumentHead
        pageTitle="some"
        pageDescription="some"
      />

      <div className='page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[65px] laptop:pt-0 bg-purple-dark relative'>
        <Header/>

        <main className="w-full font-poppins z-10">
          { (Array.isArray(tags) && !!tags.length) && <Filter tags={tags} /> }
          { (Array.isArray(posts) && !!posts.length) && <Posts posts={posts} /> }
          { (!Array.isArray(posts) || !posts.length) &&
          <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12'>
            Posts not found
          </div>
          }
        </main>

        <Footer />
        <Background />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const hotPostCount = 1;
  const postsPerPage = helpers.getPostPerPage();
  const postsByTagID = context.query.tagID ? `, where: {tags: {some: {id: {equals: "${context.query.tagID}"}}}}, ` : '';
  const postsTake    = context.query.page ? postsPerPage + 1 : hotPostCount + postsPerPage + 1;
  const postsSkip    = context.query.page ? ( parseInt( context.query.page ) - 1 ) * postsPerPage + ( context.query.tagID ? 0 : hotPostCount ) : 0;

  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(take: ${postsTake}, skip: ${postsSkip}, orderBy: {createdAt: Desc}${postsByTagID}) {
            id
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
          tags {
            id
            name
            posts(take: 1) {
              id
            }
          }
        }
      `
    });
    return {
      props: {
        posts: data?.posts,
        tags: data?.tags
      },
    };
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      posts: null,
      tags: null
    },
  }
};

Blog.propTypes = {
  posts: PropTypes.array,
  tags: PropTypes.array,
};

Blog.defaultProps = {
  posts: [],
  tags: [],
};

export default Blog;
