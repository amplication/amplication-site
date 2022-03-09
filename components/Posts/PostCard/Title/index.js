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
  props: PropTypes.object,
};

Title.defaultProps = {
  props: {},
}

export default Title;
