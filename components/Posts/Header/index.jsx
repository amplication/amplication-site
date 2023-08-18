import PropTypes from 'prop-types';
import helpers from '../../../helpers';

const Header = (props) => {
  const DynamicTag = `h${props.level || 2}`;
  const titleElement = props.children.length > 0 ? props.children[0] : '';
  const id = helpers.slugify(
    typeof titleElement === 'string' ? titleElement : '',
  );
  return <DynamicTag id={id}>{props.children}</DynamicTag>;
};

Header.propTypes = {
  level: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.any),
};

Header.defaultProps = {
  level: 2,
  children: [],
};

export default Header;
