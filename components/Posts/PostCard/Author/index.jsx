import helpers from '../../../../helpers';
import PropTypes from 'prop-types';
import Image from "next/image";

const Author = (props) => {
  return (
    <div className={'flex items-center flex-row mt-6 ' + props.className ?? ''}>
      <span className={'w-8 h-8 rounded-full overflow-hidden relative ' + ( props.large ? 'laptop:w-[50px] laptop:h-[50px]' : '' )}>
        <Image
          src={props.avatar}
          alt={props.name || 'Amplication Team'}
          layout='fill'
          objectPosition='center'
        />
      </span>
      <div
        className={'flex flex-col ml-3 text-xs ' + ( props.large ? 'laptop:text-lg' : '' )}
      >
        <div className='text-white capitalize'>{props.name || 'Amplication Team'}</div>
        <div className={'text-white ' + ( props.large ? 'laptop:text-sm' : '' )}>{helpers.getPostDate(props.date)}</div>
      </div>
    </div>
  )
}

Author.propTypes = {
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string,
  large: PropTypes.bool,
};

Author.defaultProps = {
  name: '',
  large: false,
};

export default Author
