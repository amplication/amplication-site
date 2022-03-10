import PropTypes from 'prop-types';

const Thumbnail = (props) => {
  return (
    <div className={'rounded-t-2xl overflow-hidden aspect-thumbnail-normal laptop:aspect-thumbnail ' + props.className ?? ''}>
      <img
        className='w-full h-full object-cover'
        alt={props.alt || ''} width='476' height='250'
        src={props.src && props.src.trim() !== '' ? props.src.trim() : 'https://placehold.co/476x250?text=amplication'}
      />
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
