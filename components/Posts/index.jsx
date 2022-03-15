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

const Posts = ({posts}) => {
  const [hotPost, setHotPost] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [loader, setLoader] = useState(false);

  const postPerPage = helpers.getPostPerPage();

  const router = useRouter();
  const { tagID, page } = router.query;

  useEffect(() => {
    if ( Array.isArray(posts) && posts.length ) {
      if (typeof tagID === 'undefined') {
        setHotPost(posts.shift());
      }

      if (typeof page === 'undefined') {
        setLoadMore(true);
        setPostsList(posts.splice(0, postPerPage));
      } else {
        setPostsList(posts.splice(0, postPerPage * (typeof page === 'undefined' ? 1 : parseInt(page))));
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
      { hotPost &&
        (
          <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop col-span-3'>
            <PostHot data={hotPost} />
          </div>
        )
      }

      <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop mt-6 laptop:mt-0 laptop:mb-10'>
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

      <div className={'w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-6 laptop:pt-12 laptop:pb-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5'}>

        <div className='col-span-1 tablet:col-span-2 laptop:col-span-3 text-white text-center py-6 laptop:pb-[61px] laptop:pt-0' key='subscribe'>
          <SubscribeForm />
        </div>
        {
          postsList.slice(3, ( postPerPage * ( typeof page !== 'undefined' ? parseInt(page) + 1 : 2 ) )).map((post) => {
            return <PostCard data={ post } key={ post.id }/>
          })
        }
      </div>

      { ( ( loadMore || typeof page === 'undefined' ) && postsList.length >= postPerPage ) &&
        (
          <div className='pt-6 pb-4 text-center'>
            <Link href={(tagID ? `/tags/${tagID}` : '') + `?page=${page ? parseInt(page) + 1 : 2}`} scroll={false}>
              <a
                onClick={() => setLoader(true)}
                className={'w-[118px] inline-block py-2 px-4 rounded text-white bg-dark-black-70 hover:bg-purple' + (loader ? ' loader' : '')}
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

