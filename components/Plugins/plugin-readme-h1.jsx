import PropTypes from 'prop-types';

const PluginReadmeH1 = (props) => {
  return (
    <h1 className="!text-lg text-secondary-turquoise">{props.children}</h1>
  );
};

PluginReadmeH1.propTypes = {
  level: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.any),
};

PluginReadmeH1.defaultProps = {
  level: 2,
  children: [],
};

export default PluginReadmeH1;
