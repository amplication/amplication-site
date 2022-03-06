import Author from '../PostCard/Author';
import Tags from '../PostCard/Tags';
import Title from '../PostCard/Title';
import Thumbnail from '../PostCard/Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';

const PostHot = (props) => {
  const post = props.data || null;
  if (post) {
    return (
      <div className='flex relative rounded-2xl overflow-hidden mb-[100px] bg-light-blue shadow-hot-post'>
        <div className='absolute top-0 left-0 ml-10 lg:ml-8 bg-[#8DD9B9] text rounded-bl-lg rounded-br-lg w-[91px] py-[6px] text-center text-sm font-poppins font-semibold text-dark-100'>
          Hot News
        </div>
        <div className='w-1/2 flex justify-center flex-col px-8'>
          <Author
            className='mt-0'
            avatar={ post.author?.profileImage }
            name={ post.author?.firstName + ' ' + post.author?.lastName }
            date={ post.createdAt }
          />
          <Tags list={post.tags} className='mt-6' />
          <Title level={2} className="text-2xl leading-9 font-medium my-6">
            <Link href={helpers.getPostSlug(post.title, post.id)} passHref>
              <a className="text-white hover:text-blue-700 transition-colors">{ post.title }</a>
            </Link>
          </Title>
          <div className="text-base text-white leading-6 line-clamp-2">
            {helpers.removeMarkdown( post.content )}
          </div>
        </div>
        <div className='w-1/2 rounded-r-2xl overflow-hidden'>
          <Thumbnail
            alt={ post.title }
            className='aspect-hot !rounded-l-none'
            src={ helpers.isValidUrl( post.featuredImage ) ? post.featuredImage : null }
          />
        </div>
      </div>
    );
  }
};

export default PostHot;
