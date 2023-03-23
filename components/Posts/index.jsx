import Link from 'next/link';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
// eslint-disable-next-line node/no-missing-import
import 'swiper/css';

import PostCard from './PostCard';
import SubscribeForm from '../Common/SubscribeForm';
import helpers from '../../helpers';
import Skeleton from './Skeleton';

const Posts = ({posts}) => {
  const [postsList, setPostsList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [loader, setLoader] = useState(false);

  const postPerPage = helpers.getPostPerPage();

  const router = useRouter();
  const {tagID, page} = router.query;

  useEffect(() => {
    if (Array.isArray(posts) && posts.length) {
      if (typeof page === 'undefined') {
        setLoadMore(true);

        if (posts.length > postPerPage) {
          setPostsList(posts.splice(0, postPerPage));
        } else {
          setPostsList(posts);
        }
      } else {
        setPostsList(
          posts.splice(
            0,
            postPerPage * (typeof page === 'undefined' ? 1 : parseInt(page))
          )
        );
      }

      if (!posts.length) {
        setLoadMore(false);
      }
    } else {
      setPostsList([]);
    }
    setLoader(false);
  }, [posts]);

  return (
    <>
      <div
        className={
          'w-full max-w-container m-container p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5 laptop:gap-x-7.5 laptop:gap-y-[61px]'
        }
      >
        {postsList.slice(0, 6).map((post, i) => {
          return (
            <PostCard
              data={post}
              key={post.slug}
              clickEventName="blogItemClicked"
            />
          );
        })}
        <div
          className={`col-span-1 tablet:col-span-2 laptop:col-span-3 text-white text-center pt-0 laptop:pb-0 laptop:pt-0 ${
            postsList.length > 3 ? 'mb-[1.625rem] laptop:mb-[45px]' : ''
          }`}
          key="subscribe"
        >
          <SubscribeForm />
        </div>
        {postsList
          .slice(
            6,
            postPerPage * (typeof page !== 'undefined' ? parseInt(page) + 1 : 2)
          )
          .map(post => {
            return (
              <PostCard
                data={post}
                key={post.slug}
                clickEventName="blogItemClicked"
              />
            );
          })}

        {loader && <Skeleton postPerPage={3} />}
      </div>

      {(loadMore || typeof page === 'undefined') &&
        postsList.length >= postPerPage &&
        !loader && (
          <div className="pt-12 pb-0 laptop:pb-0 laptop:pt-[75px] text-center">
            <Link
              href={
                (tagID ? `/tags/${tagID}` : '') +
                `?page=${page ? parseInt(page) + 1 : 2}`
              }
              scroll={false}
            >
              <a
                onClick={() => setLoader(true)}
                className={
                  'w-[118px] inline-block py-2 px-4 rounded transition-all duration-300 text-center text-white bg-dark-black-70 hover:bg-purple' +
                  (loader ? ' loader' : '')
                }
              >
                Load More
              </a>
            </Link>
          </div>
        )}
    </>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;
