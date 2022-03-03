import DocumentHead from '../components/Common/DocumentHead';
import client from '../services';
import {gql} from '@apollo/client';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Filter from '../components/Posts/Filter';
import Footer from '../components/Footer';

const Home = ({posts, tags}) => {
  return (
    <>
      <DocumentHead
        pageTitle="some"
        pageDescription="some"
      />

      <div className='page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[65px] laptop:pt-0 bg-purple-dark'>
        <Header/>

        <main className="w-full bg-dark-black-100 font-poppins overflow-hidden">
          <Filter tags={tags} />
          <Posts posts={posts} />
        </main>

        <Footer />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const hotPostCount = 1;
  const postsPerPage = 3;
  const postsByTagID = context.query.tagID ? `where: {tags: {some: {id: {equals: "${context.query.tagID}"}}}}, ` : '';
  const postsTake    = context.query.page ? postsPerPage + 1 : hotPostCount + postsPerPage + 1;
  const postsSkip    = context.query.page ? ( parseInt( context.query.page ) - 1 ) * postsPerPage + hotPostCount : 0;

  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(take: ${postsTake}, skip: ${postsSkip}, orderBy: {createdAt: Desc} ${postsByTagID}) {
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
      `
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
