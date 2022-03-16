import Author from './Author';
import Tags from './Tags';
import Title from './Title';
import Thumbnail from './Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCard = (props) => {
  const post = props.data;
  if (Object.keys(post).length) {
    return (
      <Link href={helpers.getPostSlug(post.title, post.id)} passHref>
        <a className="text-white transition-colors text-ellipsis display-block laptop:mb-[61px] group">
          <div className={'overflow-hidden border border-solid border-dark-black-70 laptop:border-transparent laptop:border-transparent h-full hover:shadow-hover-post laptop:hover:border laptop:hover:border-dark-black-70 rounded-2xl pb-6 ' + props.className ?? ''} >
            <div className='overflow-hidden'>
              <Thumbnail
                className='group-hover:scale-105 transition-all duration-[3000ms]'
                src={ helpers.isValidUrl( post.featuredImage ) ? post.featuredImage : '' }
                alt={ post.title }
              />
            </div>
            <div className="px-6 laptop:px-4">
              <Author
                avatar={ post.author?.profileImage }
                name={ post.author?.firstName + ' ' + post.author?.lastName }
                date={ post.createdAt }
              />
              <Tags list={post.tags}/>
              <Title level={2} className="text-lg font-medium mt-4">
                { post.title }
              </Title>
              <div className="hidden text-base text-white leading-6 mt-2 laptop:line-clamp-2">
                {helpers.removeMarkdown( post.content )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
};

PostCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostCard;

