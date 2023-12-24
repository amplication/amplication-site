import PropTypes from 'prop-types';

const Title = (props) => {
  return (
    <div
      className={
        'text-ellipsis line-clamp-3 text-md font-normal my-8 h-[72px] ' +
        (props.className !== 'undefined' ? props.className : '')
      }
    >
      {props.text || props.children}
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

Title.defaultProps = {
  text: '',
};

export default Title;
