import Author from './Author';
import Tags from './Tags';
import Title from './Title';
import Thumbnail from './Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';

const PostCard = (props) => {
  const post = props.data || null;
  if (post) {
    return (
      <div itemScope="" itemType="http://schema.org/Article">
        <Thumbnail
          src={ helpers.isValidUrl( post.featuredImage ) ? post.featuredImage : null }
          alt={ post.title }
        />
        <div className="px-4">
          <Author
            avatar={ post.author?.profileImage }
            name={ post.author?.firstName + '' + post.author?.lastName }
            date={ post.createdAt }
          />
          <Tags list={post.tags}/>
          <Title level={2} className="text-lg font-semibold mt-4">
            <Link href={helpers.makePostSlug(post.title, post.id)} passHref>
              <a className="text-white hover:text-blue-700 transition-colors">{ post.title }</a>
            </Link>
          </Title>
          <div className="text-base text-white leading-6 mt-2 line-clamp-2">
            {helpers.removeMarkdown( post.content )}
          </div>
        </div>
      </div>
    );
  }
};

export default PostCard;

