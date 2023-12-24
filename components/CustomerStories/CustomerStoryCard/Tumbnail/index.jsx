import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';

const Thumbnail = (props) => {
  return <Image width={156} height={80} src={props.src} alt={props.alt} />;
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Thumbnail.defaultProps = {
  src: '',
  alt: '',
};

export default Thumbnail;
