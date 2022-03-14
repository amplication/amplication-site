import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from "prop-types";

const Filter = ({tags}) => {
  const [activeTagID, setActiveTagID] = useState('');
  const tagClass = 'px-4 pb-2 cursor-pointer border-b-2 border-transparent inline-block whitespace-nowrap before:absolute before:text-white before:content-[attr(data-before)] before:flex';

  const router = useRouter();
  const { tagID } = router.query;

  useEffect(() => {
    setActiveTagID(typeof tagID !== 'undefined' ? tagID : '');
  }, [tags, tagID]);

  const setQueryTagID = ( tagID = '' ) => {
    setActiveTagID(tagID);
  }

  return (
    <div className='overflow-hidden relative flex flex-row flex-nowrap w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop text-lg !pb-9 !pt-6'>
      <Link href={'/'}>
        <span
          onClick={() => setQueryTagID()}
          data-before='All'
          className={'after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded after:h-1 after:bg-transparent hover:after:bg-light-turquoise relative ' + tagClass + ( activeTagID === '' ? ' before:font-bold after:bg-light-turquoise' : ' before:font-normal' )}>
          <span className='font-bold text-transparent'>All</span>
        </span>
      </Link>
      { tags.map(tag => {
        if ( !!tag.posts.length ) {
          return (
            <Link href={`/tags/${tag.id}`} key={tag.id}>
              <span
                onClick={() => setQueryTagID(tag.id)}
                data-before={tag.name}
                className={'after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded after:h-1 after:bg-transparent hover:after:bg-light-turquoise relative ' + tagClass + ( activeTagID === tag.id ? ' before:font-bold after:bg-light-turquoise' : ' before:font-normal' )}
              >
                <span className='font-bold text-transparent'>{tag.name}</span>
              </span>
            </Link>
          )
        }
      }) }
    </div>
  )

}

Filter.defaultProps = {
  tags: PropTypes.array.isRequired,
};

export default Filter;
