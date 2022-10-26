import PropTypes from 'prop-types';

const Tags = props => {
  if (props.list.length) {
    return (
      <div
        className={
          'mt-4 text-tiny text-white flex flex-row ' +
          (props.className !== 'undefined' ? props.className : '')
        }
      >
        {props.list.map(tag => {
          return (
            <span
              className="py-1 px-2 bg-light-blue rounded-full border border-solid border-lite mr-1.5 leading-tag font-medium"
              key={tag.slug}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        className={
          'mt-4 text-tiny text-white flex flex-row ' +
          (props.className !== 'undefined' ? props.className : '')
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
};

Tags.defaultProps = {
  list: [],
};

export default Tags;
