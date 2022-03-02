import DocumentHead from '../components/Common/DocumentHead';
import client from '../services';
import {gql} from '@apollo/client';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Filter from '../components/Posts/Filter';
import Footer from "../components/Footer";

const Home = ({posts, tags, query}) => {
  return (
    <>
      <DocumentHead
        pageTitle="some"
        pageDescription="some"
      />

      <Header/>

      <main className="w-full bg-dark-black-100">
        <Filter tags={tags}/>

        <Posts posts={posts}/>
      </main>

      <Footer/>
    </>
  )
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
        query: context.query,
      },
    };
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      posts: null,
      tags: null,
      query: context.query,
    },
  }
};

export default Home;
