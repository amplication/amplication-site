import {useCallback} from 'react';
import Author from './Author';
import Tags from './Tags';
import Title from './Title';
import Thumbnail from './Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';
import * as analytics from '../../../lib/analytics';
import PropTypes from 'prop-types';

const PostCard = props => {
  const post = props.data;

  const handleClick = useCallback(() => {
    analytics.event({
      action: props.clickEventName,
      params: {
        slug: post.slug,
      },
    });
  });

  if (Object.keys(post).length) {
    return (
      <Link href={helpers.getPostSlug(post.slug)} passHref>
        <a
          className="text-white transition-colors text-ellipsis display-block laptop:mb-0 group"
          onClick={handleClick}
        >
          <div
            className={
              'overflow-hidden border border-solid border-dark-black-70 laptop:border-transparent transition-all duration-1000 laptop:border-transparent h-full hover:shadow-hover-post laptop:hover:border laptop:hover:border-dark-black-70 rounded-2xl pb-6 ' +
              (props.className !== 'undefined' ? props.className : '')
            }
          >
            <div className="overflow-hidden">
              <Thumbnail
                className=""
                src={
                  helpers.isValidUrl(post.featuredImage)
                    ? post.featuredImage
                    : ''
                }
                alt={post.title}
              />
            </div>
            <div className="px-6 laptop:px-4">
              <Author
                avatar={post.author?.profileImage}
                name={post.author?.firstName + ' ' + post.author?.lastName}
                date={post.publishedAt}
              />
              <Tags list={post.tags} />
              <Title className="text-lg font-medium mt-4">{post.title}</Title>
            </div>
          </div>
        </a>
      </Link>
    );
  }
};

PostCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  clickEventName: PropTypes.string,
};

export default PostCard;
