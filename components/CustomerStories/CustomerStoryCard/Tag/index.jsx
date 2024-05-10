import PropTypes from 'prop-types';
import Link from 'next/link';

const Tag = ({ tag, className }) => {
  return (
    <div
      className={
        'text-tiny text-white flex flex-row flex-wrap gap-y-3 ' +
        (className !== 'undefined' ? className : '')
      }
    >
      <span
        className="py-1 px-2 bg-dark-black-60 rounded-full font-normal text-[10px] flex items-center justify-center min-w-[50px]"
        key={tag.slug}
      >
        {tag}
      </span>
    </div>
  );
};

Tag.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
};

Tag.defaultProps = {
  tag: '',
};

export default Tag;
