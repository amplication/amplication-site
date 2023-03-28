import {useRouter} from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';

/**
 * @param {{tags: {posts: any[]}[]}} param0
 * @returns
 */
const Filter = ({tags}) => {
  const tagClass =
    'px-1 pb-2 cursor-pointer border-b-2 border-transparent inline-block whitespace-nowrap before:absolute before:text-white before:content-[attr(data-before)] before:flex';

  const router = useRouter();
  const {tagSlug} = router.query;

  return (
    <div className="no-scrollbar overflow-x-auto overflow-hidden relative flex flex-row flex-nowrap w-full max-w-container m-container p-container laptop:max-w-container-desktop-blog laptop:m-container-desktop laptop:p-container-desktop text-sm !pb-9 !pt-6 whitespace-nowrap">
      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
        modules={[FreeMode]}
        freeMode={{
          enabled: true,
          minimumVelocity: '0.2',
        }}
      >
        <SwiperSlide className={'!w-auto'}>
          <Link href="/blog" passHref>
            <a
              data-before="All"
              className={
                'after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded after:h-1 after:bg-transparent hover:after:bg-light-turquoise relative ' +
                tagClass +
                (tagSlug === undefined
                  ? ' before:font-bold after:bg-light-turquoise'
                  : ' before:font-normal')
              }
            >
              <span className="text-transparent">All</span>
            </a>
          </Link>
        </SwiperSlide>

        {tags.map(tag => {
          if (tag.posts.length) {
            return (
              <SwiperSlide key={tag.slug} className={'!w-auto'}>
                <Link href={`/tags/${tag.slug}`} passHref>
                  <a
                    data-before={tag.name}
                    className={
                      'after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded after:h-1 after:bg-transparent hover:after:bg-light-turquoise relative ' +
                      tagClass +
                      (tagSlug === tag.slug
                        ? ' before:font-bold after:bg-light-turquoise'
                        : ' before:font-normal')
                    }
                  >
                    <span className="text-transparent">{tag.name}</span>
                  </a>
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

Filter.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Filter;
