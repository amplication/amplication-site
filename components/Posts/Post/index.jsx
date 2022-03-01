import Author from './Author';
import Tags from './Tags';
import Thumbnail from './Tumbnail';

const Post = (props) => {
  const post = props || null;
  if (post) {
    return (
      <div className={ 'w-1/3' }>
        <Thumbnail src={ post.featuredImage } alt={ post.title }/>
        <div className={ 'px-4' }>
          <Author
            avatar={ post.author?.profileImage }
            name={ post.author?.firstName + '' + post.author?.lastName }
            date={ post.createdAt }
          />
          {/*<Tags list={post.tags}/>*/ }
          <h2 className={ 'text-lg font-semibold mt-4' }>
            <a href={ post.link }
               className={ 'text-white hover:text-blue-700 transition-colors' }>{ post.title }</a>
          </h2>
          <div
            className={ 'text-base text-white leading-6 mt-2' }>{ post.content }</div>
        </div>
      </div>
    );
  }
};

export default Post;
