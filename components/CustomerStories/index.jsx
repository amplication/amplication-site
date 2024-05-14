import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import CustomerStoryCard from './CustomerStoryCard';
import helpers from '../../helpers';
import Skeleton from '../Posts/Skeleton';

const CustomerStories = ({ stories }) => {
  const [storiesList, setStoriesList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [loader, setLoader] = useState(false);

  const storiesPerPage = helpers.getCustomerStoriesPerPage();

  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    if (Array.isArray(stories) && stories.length) {
      if (typeof page === 'undefined') {
        setLoadMore(true);

        if (stories.length > storiesPerPage) {
          setStoriesList(stories.splice(0, storiesPerPage));
        } else {
          setStoriesList(stories);
        }
      } else {
        setStoriesList(
          stories.splice(
            0,
            storiesPerPage * (typeof page === 'undefined' ? 1 : parseInt(page)),
          ),
        );
      }

      if (!stories.length) {
        setLoadMore(false);
      }
    } else {
      setStoriesList([]);
    }
    setLoader(false);
  }, [page, storiesPerPage, stories]);

  return (
    <>
      <div
        className="laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0
laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop pt-0 laptop:pt-0 laptop:pb-0"
      >
        <div
          className={
            'w-full  grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-6 gap-6 '
          }
        >
          {storiesList.slice(0, 2).map((story) => {
            return (
              <CustomerStoryCard
                className={'col-span-3'}
                data={story}
                key={story.slug}
                clickEventName="customerStoryItemClicked"
              />
            );
          })}

          {storiesList
            .slice(
              2,
              storiesPerPage *
                (typeof page !== 'undefined' ? parseInt(page) + 1 : 2),
            )
            .map((story) => {
              return (
                <CustomerStoryCard
                  className={'col-span-2'}
                  data={story}
                  key={story.slug}
                  clickEventName="customerStoryItemClicked"
                />
              );
            })}

          {loader && <Skeleton storiesPerPage={3} />}
        </div>
      </div>
      {(loadMore || typeof page === 'undefined') &&
        storiesList.length >= storiesPerPage &&
        !loader && (
          <div className="pt-12 pb-0 laptop:pb-0 laptop:pt-[75px] text-center">
            <Link
              href={`?page=${page ? parseInt(page) + 1 : 2}`}
              scroll={false}
            >
              <a
                onClick={() => setLoader(true)}
                className={
                  'w-[118px] inline-block py-2 px-4 rounded transition-all duration-300 text-center text-white bg-dark-black-60 hover:bg-purple' +
                  (loader ? ' loader' : '')
                }
              >
                Load More
              </a>
            </Link>
          </div>
        )}
    </>
  );
};

CustomerStories.propTypes = {
  stories: PropTypes.array,
};

CustomerStories.defaultProps = {
  stories: [],
};

export default CustomerStories;
