import PropTypes from 'prop-types';

const Tags = (props) => {
    if ( Array.isArray(props.list) && props.list.length ) {
        return (
            <div className={'mt-4 text-tiny text-white flex flex-row ' + props.className ?? ''}>
                { props.list.map(tag => {
                    return (<span className='py-1 px-2 bg-light-blue rounded-full border border-solid border-lite mr-1.5 leading-tag' key={tag.id}>{tag.name}</span>)
                })}
            </div>
        )
    } else {
        return false;
    }
}

Tags.propTypes = {
    props: PropTypes.object,
};

Tags.defaultProps = {
    props: {},
}

export default Tags
