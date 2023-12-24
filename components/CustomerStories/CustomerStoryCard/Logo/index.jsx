import PropTypes from 'prop-types';
import Image from 'next/image';

const Logo = (props) => {
  return <Image width={156} height={80} src={props.src} alt={props.alt} />;
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  src: '',
  alt: '',
};

export default Logo;
