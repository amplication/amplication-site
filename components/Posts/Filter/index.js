import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Filter = ({tags, updateTagID}) => {
  const [activeTagID, setActiveTagID] = useState('');
  const tagClass = 'px-4 pb-2 cursor-pointer border-b-2 border-transparent inline-block';

  const router = useRouter();
  const { tagID } = router.query

  const setQueryTagID = ( tagID = '' ) => {
    setActiveTagID(tagID);
  }

  useEffect(() => {
    if (tagID) {
      setActiveTagID(tagID);
    }
  }, []);

  //console.log(tags);
  if ( tags ) {
    return (
      <div className='w-full max-w-container m-container p-container py-6 text-white text-lg'>
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
    <div className='w-full text-white text-center'>
      Tags not found
    </div>
  )
}

export default Filter;
