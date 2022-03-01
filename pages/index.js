import DocumentHead from '../components/Common/DocumentHead';
import Header from "../components/Header";
import Footer from "../components/Footer";
import client from '../services';
import {gql} from '@apollo/client';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({posts, tags}) => (
  <>
    <DocumentHead
      pageTitle="Page Title"
      pageDescription="Page Description"/>

    <div className='page min-h-screen flex flex-col justify-start justify-items-stretch'>
      <Header />
      <main className="w-full bg-dark-black-100">
        <Posts posts={ posts } tags={ tags }/>
      </main>
      <Footer />
    </div>
  </>
);

export const getServerSideProps = async () => {
  try {
    const {data} = await client.query({
      query: gql`
      query {
        posts(take: 3, orderBy: { createdAt: Desc }) {
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
