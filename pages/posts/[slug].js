import DocumentHead from '../../components/Common/DocumentHead';
import client from '../../services';
import helpers from '../../helpers';
import {gql} from '@apollo/client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Thumbnail from '../../components/Posts/PostCard/Tumbnail';
import Author from '../../components/Posts/PostCard/Author';
import Tags from '../../components/Posts/PostCard/Tags';
import Title from '../../components/Posts/PostCard/Title';
import showdown from 'showdown';
import PostCard from '../../components/Posts/PostCard';
import { Swiper, SwiperSlide } from 'swiper';
import 'swiper/css';

const Post = ({posts, post}) => {
  return (
    <>
      <DocumentHead
        pageTitle='some'
        pageDescription='some'
      />

      <div className='page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[65px] laptop:pt-0 bg-purple-dark'>
        <Header/>

        <main className='flex justify-between w-full bg-dark-black-100 font-poppins overflow-hidden p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-6 laptop:pt-12 laptop:pb-10'>
          <article className='w-[881px]'>
            { post &&
              <>
                <Title level={1} className='text-lg font-medium text-white text-[32px] leading-[48px] mb-8' text={ post.title } />
                <Tags list={ post.tags }/>
                <Author
                  className={ 'mt-8' }
                  avatar={ post.author?.profileImage }
                  name={ post.author?.firstName + ' ' + post.author?.lastName }
                  date={ post.createdAt }
                  large={ true }
                />
                <Thumbnail
                  className={ 'my-8 rounded-2xl aspect-thumbnail-hero laptop:aspect-thumbnail-hero' }
                  src={ helpers.isValidUrl( post.featuredImage ) ? post.featuredImage : null }
                  alt={ post.title }
                />
                <div
                  className='text-base text-white leading-6 mt-2'
                  dangerouslySetInnerHTML={{
                    __html: new showdown.Converter({
                      tables: true,
                    }).makeHtml( post.content )
                  }}
                >

                </div>
              </>
            }
          </article>

          <aside className='w-[425px]'>
            sidebar
          </aside>
        </main>

        <div className='w-full p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop'>
          <Title level={2} className='text-2xl laptop:text-[32px] leading-9 laptop:leading-[48px] font-semibold text-white mb-[-8px] laptop:mb-[-16px] mt-[60px]'>
            Related Posts<span className='text-[#53DBEE]'>.</span>
          </Title>
        </div>

        { posts.length ?
          (
            // <Swiper
            //   spaceBetween={24}
            //   slidesPerView={3}
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            // >
            //   {
            //     posts.map((post, i) => {
            //       return (
            //         <SwiperSlide key={post} virtualIndex={i}>
            //           <PostCard data={ post } key={ post.id } className={i === 2 ? 'tablet:hidden laptop:block' : ''} />
            //         </SwiperSlide>
            //       )
            //     })
            //   }
            // </Swiper>
            <div className={'w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-6 laptop:pt-12 laptop:pb-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7.5'}>
              {
                posts.map((post, i) => {
                  return <PostCard data={ post } key={ post.id } className={i === 2 ? 'tablet:hidden laptop:block' : ''} />
                })
              }
            </div>
          ) : (
            <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 text-white text-center !pb-12'>
              Posts not found
            </div>
          )
        }

        <Footer />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const postID = helpers.getPostID(context.query ? context.query.slug : '');
  try {
    const {data} = await client.query({
      query: gql`
        query {
          posts(take: 3, orderBy: {createdAt: Desc}, where: {id: {not: "${postID}"}}) {
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
          post(where: {id: "${postID}"}) {
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
        }
      `
    });
    return {
      props: {
        posts: data?.posts,
        post: data?.post
      },
    };
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      posts: null,
      post: null
    },
  }
};

export default Post;
