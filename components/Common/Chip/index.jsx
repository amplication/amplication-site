import PropTypes from 'prop-types';

const Chip = ({ children }) => {
  return <span className="chip">{children}</span>;
};

Chip.propTypes = {
  children: PropTypes.string,
};

export default Chip;
