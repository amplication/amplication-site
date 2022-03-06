
const Thumbnail = (props) => {
    return (
        <div className={'rounded-t-2xl overflow-hidden aspect-thumbnail ' + props.className ?? ''}>
            <img className='w-full h-full object-cover' src={props.src ?? 'https://via.placeholder.com/476x250?text=amplication'} alt={props.alt || ''} />
        </div>
    )
}

export default Thumbnail
