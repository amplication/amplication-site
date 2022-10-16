import {useRouter} from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * @param {{tags: {posts: any[]}[]}} param0
 * @returns
 */
const Filter = ({tags}) => {
  const tagClass =
    'px-4 pb-2 cursor-pointer border-b-2 border-transparent inline-block whitespace-nowrap before:absolute before:text-white before:content-[attr(data-before)] before:flex';

  const router = useRouter();
  const {tagSlug} = router.query;

  return (
    <div className="no-scrollbar overflow-x-auto overflow-hidden relative flex flex-row flex-nowrap w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop text-lg !pb-9 !pt-6">
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
      {tags.map(tag => {
        if (tag.posts.length) {
          return (
            <Link href={`/tags/${tag.slug}`} key={tag.slug} passHref>
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
          );
        }
      })}
    </div>
  );
};

Filter.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Filter;
