import PropTypes from 'prop-types';

const Title = (props) => {
  const Tag = props.level ? `h${ props.level }` : 'div';

  return (
    <Tag className={'text-ellipsis line-clamp-2 ' + props.className ?? ''}>
      { props.text || props.children }
    </Tag>
  );
}

Title.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string,
};

Title.defaultProps = {
  level: 2,
  text: '',
}

export default Title;
