import PostCard from './PostCard';
import SubscribeForm from "../Common/SubscribeForm";
import PostHot from './PostHot';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import helpers from '../../helpers';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Skeleton from "./Skeleton";

const Posts = ({posts}) => {
  const [hotPost, setHotPost] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [loader, setLoader] = useState(false);
  const [skeletonCount, setSkeletonCount] = useState(1);

  const postPerPage = helpers.getPostPerPage();

  const router = useRouter();
  const { tagID, page } = router.query;

  useEffect(() => {
    if ( Array.isArray(posts) && posts.length ) {
      let skeletonsCount = posts.length - postPerPage * (typeof page === 'undefined' ? 1 : parseInt(page));
      skeletonsCount += (typeof tagID === 'undefined') ? -1 : 0;
      skeletonsCount = skeletonsCount < 0 ? 0 : skeletonsCount;
      setSkeletonCount(skeletonsCount);

      if (typeof tagID === 'undefined') {
        setHotPost(posts.shift());
      }
      if (typeof page === 'undefined') {
        setLoadMore(true);

        if (posts.length > 9) {
          setPostsList(posts.splice(0, postPerPage));
        } else {
          setPostsList(posts);
        }
      } else {
        setPostsList(posts.splice(0, postPerPage * (typeof page === 'undefined' ? 1 : parseInt(page))));
      }

      if (!posts.length) {
        setLoadMore(false);
      }
    } else {
      setSkeletonCount(0);
      setPostsList([]);
    }
    setLoader(false);
  }, [posts]);

  return (
    <>
      { hotPost &&
        (
          <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop mb-[1.875rem] laptop:m-container-desktop laptop:p-container-desktop col-span-3'>
            <PostHot data={hotPost} />
          </div>
        )
      }

      <div className='w-full max-w-container m-container p-container mb-14 laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop laptop:mt-0 laptop:mb-[75px]'>
        <Swiper
          className='flex flex-col-reverse !overflow-visible'
          loop={false}
          spaceBetween={30}
          slidesPerView={3}
          onAfterInit={(swiper) => {
            const wrapper = swiper.$wrapperEl[0];
            if (window.innerWidth <= 640) {
              wrapper.classList.add('flex-col', 'gap-7.5')
              wrapper.removeAttribute('style')
              swiper.disable()
            }
          }}
          onResize={(swiper) => {
            const wrapper = swiper.$wrapperEl[0];
            if (window.innerWidth <= 640) {
              wrapper.classList.add('flex-col', 'gap-7.5')
              wrapper.removeAttribute('style')
              swiper.disable()
            } else {
              wrapper.classList.remove('flex-col', 'gap-7.5')
              swiper.enable();
            }
            swiper.init();
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          {
            postsList.slice(0, 3).map((post, i) => {
              return (
                <SwiperSlide className='!h-auto' key={ post.id } virtualIndex={i}>
                  <PostCard data={ post } key={ post.id } />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div className={'w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5 laptop:gap-x-7.5 laptop:gap-y-[61px]'}>

        <div className={`col-span-1 tablet:col-span-2 laptop:col-span-3 text-white text-center pt-0 laptop:pb-0 laptop:pt-0 ${postsList.length > 3 ? 'mb-[1.625rem] laptop:mb-[45px]' : '' }`} key='subscribe'>
          <SubscribeForm />
        </div>
        {
          postsList.slice(3, ( postPerPage * ( typeof page !== 'undefined' ? parseInt(page) + 1 : 2 ) )).map((post) => {
            return <PostCard data={ post } key={ post.id }/>
          })
        }

        {(loader && skeletonCount) &&
          <Skeleton
            postPerPage = { skeletonCount }
          />
        }

      </div>

      { ( ( loadMore || typeof page === 'undefined' ) && postsList.length >= postPerPage && !loader ) &&
        (
          <div className='pt-12 pb-0 laptop:pb-0 laptop:pt-[75px] text-center'>
            <Link href={(tagID ? `/tags/${tagID}` : '') + `?page=${page ? parseInt(page) + 1 : 2}`} scroll={false}>
              <a
                onClick={() => setLoader(true)}
                className={'w-[118px] inline-block py-2 px-4 rounded transition-all duration-300 text-center text-white bg-dark-black-70 hover:bg-purple' + (loader ? ' loader' : '')}
              >
                Load More
              </a>
            </Link>
          </div>
        )
      }

    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
};

Posts.defaultProps = {
  posts: [],
}

export default Posts;

