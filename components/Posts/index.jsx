import PostCard from './PostCard';

const Posts = ({posts}) => {
  if ( Array.isArray(posts) && posts.length ) {
    return (
      <>
        <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop py-12 grid grid-cols-3 gap-7.5'>
          {
            posts.slice(0, 3).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }
          <div className='p-card col-span-3 text-white text-center' key='subscribe'>insert the subscription form here</div>
          {
            posts.slice(3, 9).map((post) => {
              return <PostCard data={ post } key={ post.id }/>
            })
          }
        </div>

        {posts.length >= 9 && (
          <div className='pt-8 pb-8 text-center'>
            <button
              className='w-[118px] py-2 px-4 rounded text-white transition bg-dark-black-70 hover:bg-purple'
              onClick={() => setPostLimit((prev) => prev + 9)}
            >
              Load More
            </button>
          </div>
        )}
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
