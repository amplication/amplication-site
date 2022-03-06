import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Filter = ({tags}) => {
  const [activeTagID, setActiveTagID] = useState('');
  const tagClass = 'px-4 pb-2 cursor-pointer border-b-2 border-transparent inline-block whitespace-nowrap';

  const router = useRouter();
  const { tagID } = router.query;

  useEffect(() => {
    setActiveTagID(typeof tagID !== 'undefined' ? tagID : '');
  }, [tags]);

  const setQueryTagID = ( tagID = '' ) => {
    setActiveTagID(tagID);
  }

  if ( tags ) {
    return (
      <div className='flex flex-row flex-nowrap w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop w-full text-white text-lg !py-12'>
        <Link href={''}>
          <span
            onClick={() => setQueryTagID()}
            className={tagClass + ( activeTagID === '' ? ' font-bold border-b-light-turquoise' : '' )}>
            All
          </span>
        </Link>
        { tags.map(tag =>
          <Link href={`?tagID=${tag.id}`} key={tag.id}>
            <span
              onClick={() => setQueryTagID(tag.id)}
              className={'border-transparent hover:border-b-light-turquoise ' + tagClass + ( activeTagID === tag.id ? ' font-bold border-b-light-turquoise' : '' )}
            >
              {tag.name}
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

export default Filter;
