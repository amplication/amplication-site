import PropTypes from 'prop-types';
import Image from 'next/image';

const Thumbnail = (props) => {
  return (
    <div className={'rounded-t-2xl overflow-hidden aspect-thumbnail-normal laptop:aspect-thumbnail overflow-fix ' + (typeof props.className !== 'undefined' ? props.className : '')}>
      <span className='group-hover:scale-105 transition-all duration-[2000ms] rounded-t-2xl w-full h-full pb-[52%] block relative overflow-hidden bg-purple-bright'>
        <Image
          alt={props.alt || ''}
          src={props.src && props.src.trim() !== '' ? props.src.trim() : 'https://placehold.co/476x300?text=amplication'}
          layout='fill'
          objectFit={props.objectFit ?? 'initial'}
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
