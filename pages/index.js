import DocumentHead from '../components/Common/DocumentHead';
import client from '../services';
import {gql} from '@apollo/client';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Filter from '../components/Posts/Filter';
import Footer from '../components/Footer';
import {useState} from 'react';

const Home = ({posts, tags}) => {
  const [postLoading, setPostLoading] = useState(false);
  const isPostsLoading = (value) => {
    setPostLoading(value);
  }

  return (
    <>
      <DocumentHead
        pageTitle="some"
        pageDescription="some"
      />

      <Header/>

      <div className='page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[65px] laptop:pt-0 bg-purple-dark'>
        <Header/>

        <main className="w-full bg-dark-black-100 font-poppins">
          <Filter tags={tags} isPostsLoading={isPostsLoading} />

          {postLoading ? (
            <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12'>
              Posts loading...
            </div>
          ) : (
            <Posts posts={posts} isPostsLoading={isPostsLoading} />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const postsByTagId = context.query.tagID ? `where: {tags: {some: {id: {equals: "${context.query.tagID}"}}}}, ` : '';

  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(take: 9, ${postsByTagId} orderBy: {createdAt: Desc}) {
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
          }
        }
      `,
    });
    return {
      props: {
        posts: data?.posts,
        tags: data?.tags,
      },
    };
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      posts: null,
      tags: null,
    },
  }
};

export default Home;
