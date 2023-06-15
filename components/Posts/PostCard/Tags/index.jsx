import PropTypes from 'prop-types';
import Link from 'next/link';

const Tags = ({list, className, isLink}) => {
  if (list.length) {
    return (
      <div
        className={
          'mt-4 text-tiny text-white flex flex-row flex-wrap gap-y-3 ' +
          (className !== 'undefined' ? className : '')
        }
      >
        {list.map(tag => {
          return (
            <span
              className="py-1 px-2 bg-light-blue rounded-full border border-solid border-lite mr-1.5 leading-tag font-medium"
              key={tag.slug}
            >
              {isLink ? (
                <Link href={'/tags/' + tag.slug}>{tag.name}</Link>
              ) : (
                <>{tag.name}</>
              )}
            </span>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        className={
          'mt-4 text-tiny text-white flex flex-row flex-wrap gap-col-3 ' +
          (className !== 'undefined' ? className : '')
        }
      >
        <span className="py-1 px-2 bg-light-blue rounded-full border border-solid border-lite mr-1.5 leading-tag">
          Other
        </span>
      </div>
    );
  }
};

Tags.propTypes = {
  list: PropTypes.array,
  className: PropTypes.string,
  isLink: PropTypes.bool,
};

Tags.defaultProps = {
  list: [],
};

export default Tags;
