import { useCallback } from 'react';
import Tag from './Tag';
import Title from './Title';
import Logo from './Logo';
import helpers from '../../../helpers';
import Link from 'next/link';
import * as analytics from '../../../lib/analytics';
import PropTypes from 'prop-types';
import Button from '../../Common/Button';

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
          className={props.className !== 'undefined' ? props.className : ''}
          onClick={handleClick}
        >
          <div
            className={
              'overflow-hidden border border-solid border-dark-black-70 hover:border-lite hover:bg-purple-light rounded-lg p-8 '
            }
          >
            <div className="overflow-hidden flex flex-row justify-between items-start	">
              <Logo
                className=""
                src={
                  helpers.isValidUrl(story.featuredImage)
                    ? story.featuredImage
                    : ''
                }
                alt={story.title}
              />
              <Tag tag={story.tag} />
            </div>
            <Title>{story.title}</Title>
            <Button
              text="Learn more"
              isLink={true}
              //onClick={() => handleStartNowClick("PluginsLearnMoreClick")}
              className="border border-1 border-white !inline-block  !text-xs    !font-normal  !bg-transparent hover:!bg-transparent !px-2"
              href={helpers.getCustomerStorySlug(story.slug)}
              delayLinkMs={300}
            />
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
