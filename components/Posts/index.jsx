import PostCard from './PostCard';
import PostHot from './PostHot';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import helpers from '../../helpers';

const Posts = ({posts, excludeHot = false}) => {
  const [hotPost, setHotPost] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const postPerPage = helpers.getPostPerPage();

  const router = useRouter();
  const { tagID, page } = router.query;

  useEffect(() => {
    if ( Array.isArray(posts) && posts.length ) {
      if (!excludeHot) {
        if ( typeof tagID === 'undefined' && typeof page === 'undefined' ) {
          setHotPost(posts.shift());
        } else {
          setHotPost(null);
        }
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

        <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-6 laptop:pt-12 laptop:pb-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5'>
          {
            postsList.slice(0, 3).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }

          { !excludeHot &&
            <div className='col-span-1 tablet:col-span-2 laptop:col-span-3 text-white text-center py-6 laptop:pb-[61px] laptop:pt-0' key='subscribe'>
              insert the subscription form here
            </div>
          }

          {
            postsList.slice(3, ( postPerPage * ( typeof page !== 'undefined' ? parseInt(page) + 1 : 2 ) )).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }
        </div>

        { ( ( loadMore || typeof page === 'undefined' ) && postsList.length >= postPerPage ) &&
          (
            <div className='pb-[68px] text-center'>
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

