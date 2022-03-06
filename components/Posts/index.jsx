import PostCard from './PostCard';
import PostHot from './PostHot';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import helpers from '../../helpers';

const Posts = ({posts}) => {
  const [hotPost, setHotPost] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const postPerPage = helpers.getPostPerPage();

  const router = useRouter();
  const { tagID, page } = router.query;

  useEffect(() => {
    if ( Array.isArray(posts) && posts.length ) {
      if (
        typeof tagID === 'undefined' && typeof page === 'undefined'   // is home page
      ) {
        setHotPost(posts.shift());
      } else {
        setHotPost(null);
      }

      if (typeof page === 'undefined') {
        setLoadMore(true);
        setPostsList(posts.splice(0, postPerPage));
      } else {
        setPostsList([...postsList, ...posts.splice(0, postPerPage)]);
      }

      if (!posts.length) {
        setLoadMore(false);
      }
    } else {
      setPostsList([]);
    }
  }, [posts]);

  if ( postsList.length ) {
    return (
      <>
        { hotPost &&
          (
            <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop col-span-3'>
              <PostHot data={hotPost} />
            </div>
          )
        }

        <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 grid grid-cols-3 gap-7.5'>
          {
            postsList.slice(0, 3).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }

          <div className='p-card col-span-3 text-white text-center' key='subscribe'>
            insert the subscription form here
          </div>

          {
            postsList.slice(3, ( postPerPage * ( typeof page !== 'undefined' ? parseInt(page) + 1 : 2 ) )).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }
        </div>

        { ( ( loadMore || typeof page === 'undefined' ) && postsList.length >= postPerPage ) &&
          (
            <div className='pt-8 pb-8 text-center'>
              <Link href={`?page=${page ? parseInt(page) + 1 : 2}` + (tagID ? `&tagID=${tagID}` : '')} scroll={false}>
                <a className='w-[118px] py-2 px-4 rounded text-white transition bg-dark-black-70 hover:bg-purple'>
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

