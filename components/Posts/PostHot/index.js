import Author from '../PostCard/Author';
import Tags from '../PostCard/Tags';
import Title from '../PostCard/Title';
import Thumbnail from '../PostCard/Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostHot = (props) => {
  const post = props.data;
  if ((Object.keys(post).length)) {
    return (
      <div className='flex flex-col-reverse relative rounded-2xl overflow-hidden bg-light-blue shadow-hot-post laptop:flex-row laptop:mb-[100px]'>
        <div className='absolute top-0 left-0 ml-6 laptop:ml-8 bg-[#8DD9B9] text rounded-bl-lg rounded-br-lg w-[91px] py-2 laptop:py-[6px] text-center text-sm font-poppins font-semibold text-dark-100'>
          Hot News
        </div>
        <div className='w-full flex justify-center flex-col py-[30px] px-6 laptop:w-1/2 laptop:px-8 laptop:py-0'>
          <Author
            className='!mt-0'
            avatar={ post.author?.profileImage }
            name={ post.author?.firstName + ' ' + post.author?.lastName }
            date={ post.createdAt }
          />
          <Tags list={post.tags} className='mt-6' />
          <Title level={2} className="text-lg leading-[27px] laptop:text-2xl laptop:leading-9 font-medium my-6">
            <Link href={helpers.getPostSlug(post.title, post.id)} passHref>
              <a className="text-white hover:text-blue-700 transition-colors">{ post.title }</a>
            </Link>
          </Title>
          <div className="text-[15px] text-white line-clamp-2 laptop:text-base leading-6">
            {helpers.removeMarkdown( post.content )}
          </div>
        </div>
        <div className='w-full overflow-hidden laptop:w-1/2 rounded-2xl laptop:rounded-l-none'>
          <Thumbnail
            alt={ post.title }
            className='aspect-hot-normal !rounded-l-none laptop:aspect-hot'
            src={ helpers.isValidUrl( post.featuredImage ) ? post.featuredImage : '' }
          />
        </div>
      </div>
    );
  }
};

PostHot.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostHot;
