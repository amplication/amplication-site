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
      <div className={'border border-solid border-dark-black-70 laptop:border-0 laptop:border-transparent rounded-2xl pb-6 laptop:pb-[61px] ' + props.className ?? ''} >
        <Thumbnail
          src={ helpers.isValidUrl( post.featuredImage ) ? post.featuredImage : '' }
          alt={ post.title }
        />
        <div className="px-6 laptop:px-4">
          <Author
            avatar={ post.author?.profileImage }
            name={ post.author?.firstName + ' ' + post.author?.lastName }
            date={ post.createdAt }
          />
          <Tags list={post.tags}/>
          <Title level={2} className="text-lg font-medium mt-4">
            <Link href={helpers.getPostSlug(post.title, post.id)} passHref>
              <a className="text-white hover:text-blue-700 transition-colors text-ellipsis display-block">{ post.title }</a>
            </Link>
          </Title>
          <div className="hidden text-base text-white leading-6 mt-2 laptop:line-clamp-2">
            {helpers.removeMarkdown( post.content )}
          </div>
        </div>
      </div>
    );
  }
};

PostCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostCard;

