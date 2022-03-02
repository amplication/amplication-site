import { useRouter } from 'next/router';
import DocumentHead from '../components/Common/DocumentHead';
import client from '../services';
import {gql} from '@apollo/client';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Filter from '../components/Posts/Filter';

const Home = ({posts, tags}) => {
  const router = useRouter();
  const updateTagID = (value) => {
    console.log(value);
    router.push({
      query: {
        tagID: value,
      },
    });
  }

  return (
    <>
      <DocumentHead
        pageTitle="some"
        pageDescription="some"
      />

      <Header/>

      <main className="w-full bg-dark-black-100">
        <Filter tags={tags} updateTagID={updateTagID} />
        <Posts posts={posts} />
      </main>
    </>
  )
};

export const getServerSideProps = async () => {
  // , where: {tags: {every: {id: {equals: "ckzi8vhkg125901s6hrno1z39"}}}}
  try {
    const {data} = await client.query({
      query: gql`
      query {
        posts(take: 9, orderBy: {createdAt: Desc}, where: {tags: {every: {id: {equals: ""}}}}) {
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
