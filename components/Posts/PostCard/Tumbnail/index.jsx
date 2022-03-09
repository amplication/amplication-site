import PropTypes from 'prop-types';

const Thumbnail = (props) => {
    return (
        <div className={'rounded-t-2xl overflow-hidden aspect-thumbnail-normal laptop:aspect-thumbnail ' + props.className ?? ''}>
            <img className='w-full h-full object-cover' src={props.src ?? 'https://placehold.co/476x250?text=amplication'} alt={props.alt || ''} width='476' height='250' />
        </div>
    )
}

Thumbnail.propTypes = {
  props: PropTypes.object,
};

Thumbnail.defaultProps = {
  props: {},
}

export default Thumbnail
