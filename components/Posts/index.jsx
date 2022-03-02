import PostCard from './PostCard';

const Posts = ({posts}) => {
  if ( posts ) {
    return (
      <div className='w-full overflow-hidden max-w-container m-container p-container py-12 grid grid-cols-3 gap-7.5'>
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
    )
  }

  return (
    <div className='w-full overflow-hidden max-w-container m-container p-container py-12 text-white text-center'>
      Posts not found
    </div>
  )
}

export default Posts;
