import PropTypes from 'prop-types';
import helpers from '../../../helpers';

const Header = props => {
  const DynamicTag = `h${props.level}`;
  const id = helpers.slugify(props.children[0] || '');
  return <DynamicTag id={id}>{props.children}</DynamicTag>;
};

Header.propTypes = {
  level: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.any),
};

export default Header;
