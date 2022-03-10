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
  }, [tags]);

  const setQueryTagID = ( tagID = '' ) => {
    setActiveTagID(tagID);
  }

  if ( tags.length ) {
    return (
      <div className='overflow-hidden relative flex flex-row flex-nowrap w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop text-lg !py-12'>
        <Link href={''}>
          <span
            onClick={() => setQueryTagID()}
            data-before='All'
            className={tagClass + ( activeTagID === '' ? ' before:font-bold border-b-light-turquoise' : ' before:font-medium' )}>
            <span className='font-bold text-transparent'>All</span>
          </span>
        </Link>
        { tags.map(tag =>
          <Link href={`?tagID=${tag.id}`} key={tag.id}>
            <span
              onClick={() => setQueryTagID(tag.id)}
              data-before={tag.name}
              className={'border-transparent hover:border-b-light-turquoise ' + tagClass + ( activeTagID === tag.id ? ' before:font-bold border-b-light-turquoise' : ' before:font-medium' )}
            >
              <span className='font-bold text-transparent'>{tag.name}</span>
            </span>
          </Link>
          ) }
      </div>
    )
  }

  return (
    <div className='w-full text-white text-center py-6 !my-12'>
      Tags not found
    </div>
  )
}

Filter.defaultProps = {
  tags: PropTypes.array.isRequired,
};

export default Filter;
