import PropTypes from 'prop-types';
import Image from 'next/image';
import {useState} from 'react';

const Thumbnail = props => {
  const [src, setSrc] = useState('');
  const updateImageState = () => setSrc(props.src);

  return (
    <div
      className={
        'rounded-t-2xl overflow-hidden aspect-thumbnail-normal laptop:aspect-thumbnail overflow-fix ' +
        (typeof props.className !== 'undefined' ? props.className : '')
      }
    >
      <span className="group-hover:scale-105 transition-all duration-[2000ms] rounded-t-2xl w-full h-full pb-[52%] block relative overflow-hidden bg-purple-bright">
        {props.src && (
          <Image
            onLoadingComplete={e => updateImageState(e)}
            alt={props.alt || ''}
            src={
              props.src && props.src.trim() !== ''
                ? props.src.trim()
                : 'https://placehold.co/476x300?text=amplication'
            }
            layout="fill"
            objectFit={props.objectFit ?? 'initial'}
            objectPosition="center"
          />
        )}
        {!src && (
          <Image
            alt={props.alt || ''}
            src={'https://placehold.co/476x300?text=amplication'}
            layout="fill"
            objectFit={props.objectFit ?? 'initial'}
            objectPosition="center"
          />
        )}
      </span>
    </div>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
  className: PropTypes.string,
};

Thumbnail.defaultProps = {
  src: '',
  alt: '',
  objectFit: '',
};

export default Thumbnail;
