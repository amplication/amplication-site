import { useCallback } from 'react';
import Author from './Author';
import Tags from './Tags';
import Title from './Title';
import Thumbnail from './Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';
import * as analytics from '../../../lib/analytics';
import PropTypes from 'prop-types';

const CustomerStoryCard = (props) => {
  const story = props.data;

  const handleClick = useCallback(() => {
    analytics.event({
      action: props.clickEventName,
      params: {
        slug: story.slug,
      },
    });
  }, [story.slug, props.clickEventName]);

  if (Object.keys(story).length) {
    return (
      <Link href={helpers.getCustomerStorySlug(story.slug)} passHref>
        <a
          className={
            'text-white transition-colors text-ellipsis display-block laptop:mb-0 group ' +
            (props.className !== 'undefined' ? props.className : '')
          }
          onClick={handleClick}
        >
          <div
            className={
              'overflow-hidden border border-solid border-dark-black-70  h-full hover:shadow-hover-story rounded-lg p-6 ' +
              (props.className !== 'undefined' ? props.className : '')
            }
          >
            <div className="overflow-hidden">
              <Thumbnail
                className=""
                src={
                  helpers.isValidUrl(story.featuredImage)
                    ? story.featuredImage
                    : ''
                }
                alt={story.title}
              />
            </div>
            <div className="px-6 laptop:px-4 flex items-left flex-col h-52 ">
              <Tags list={story.tags} />
              <Title className="text-lg font-medium mt-4">{story.title}</Title>
              <div className="flex-auto border-y border-t-0 border-solid border-dark-black-70"></div>
              <Author
                avatar={story.author?.profileImage}
                name={story.author?.firstName + ' ' + story.author?.lastName}
                date={story.publishedAt}
              />
            </div>
          </div>
        </a>
      </Link>
    );
  }
};

CustomerStoryCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  clickEventName: PropTypes.string,
};

export default CustomerStoryCard;
