import helpers from '../../../../helpers';

const Author = (props) => {
  return (
    <div className={'flex items-center flex-row mt-6 ' + props.className ?? ''}>
      <img className="w-8 h-8 rounded-full" src={props.avatar} alt={props.name || 'Amplication Team'} />
      <div className="flex flex-col ml-3 text-xs">
        <div className="text-white capitalize">{props.name || 'Amplication Team'}</div>
        <div className="text-white">{helpers.getPostDate(props.date)}</div>
      </div>
    </div>
  )
}

export default Author
