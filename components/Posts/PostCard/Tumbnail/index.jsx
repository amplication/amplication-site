import PropTypes from 'prop-types';
import Image from 'next/image';

const Thumbnail = (props) => {
  return (
    <div className={'rounded-t-2xl overflow-hidden aspect-thumbnail-normal laptop:aspect-thumbnail ' + (props.className !== 'undefined' ? props.className : '')}>
      <span className='w-full h-full pb-[52%] block relative overflow-hidden'>
        <Image
          alt={props.alt || ''}
          src={props.src && props.src.trim() !== '' ? props.src.trim() : 'https://placehold.co/476x250?text=amplication'}
          layout='fill'
          objectFit={props.objectFit ?? 'cover'}
          objectPosition='center'
        />
      </span>
    </div>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Thumbnail.defaultProps = {
  alt: '',
}

export default Thumbnail
