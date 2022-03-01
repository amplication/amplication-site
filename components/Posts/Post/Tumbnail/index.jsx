
const Thumbnail = (props) => {
    return (
        <div className={'rounded-t-2xl overflow-hidden'}>
            <img className='w-full' src={props.src ?? 'https://via.placeholder.com/476x250?text=amplication'} alt={props.alt || ''} />
        </div>
    )
}

export default Thumbnail
