import PostCard from './PostCard';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";

const Posts = ({posts}) => {
  const [hotPost, setHotPost] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const router = useRouter();
  const { tagID, page } = router.query;

  const setQuery = (page, tagid) => {
    let query = {
      query: {
        page: (page ? parseInt(page) + 1 : 2),
      }
    }
    if (tagid) {
      query = {...query, ...{
          query: {
            tagID: tagid
          }
        }};
    }
    return query;
  }

  useEffect(() => {
    if (Array.isArray(posts) && posts.length) {
      if (hotPost === null) {
        setHotPost(posts.shift());
      }
      setPostsList(posts.splice(0, 3));
      if (!posts.length) {
        setLoadMore(false);
      }
    }
  }, [posts]);

  if ( postsList.length ) {
    return (
      <>
        { hotPost &&
        (
          <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 grid grid-cols-3 gap-7.5'>
            HOT POST
          </div>
        )
        }

        <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 grid grid-cols-3 gap-7.5'>
          {
            postsList.slice(0, 3).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }
          <div className='p-card col-span-3 text-white text-center' key='subscribe'>insert the subscription form here</div>
          {
            postsList.slice(3, 9).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }
        </div>

        { ( ( loadMore || typeof page === 'undefined' ) && postsList.length >= 3 ) &&
        (
          <div className='pt-8 pb-8 text-center'>
            <Link href={`?page=${page ? parseInt(page) + 1 : 2}` + (tagID ? `&tagID=${tagID}` : '')}>
              <a
                //onClick={() => router.push(setQuery(page, tagID))}
                className='w-[118px] py-2 px-4 rounded text-white transition bg-dark-black-70 hover:bg-purple'>
                Load More
              </a>
            </Link>
          </div>
        )
        }
      </>
    )
  }

  return (
    <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12'>
      Posts not found
    </div>
  )
}

export default Posts;

