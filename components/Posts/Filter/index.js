import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import helpers from "../../../helpers";
import Title from "../PostCard/Title";

const Filter = ({tags, updateTagID}) => {
  const [activeTagID, setActiveTagID] = useState('');
  const tagClass = 'px-4 pb-2 cursor-pointer border-b-2 border-transparent inline-block';

  const router = useRouter();
  const { tagID } = router.query

  const setQueryTagID = ( tagID = '' ) => {
    let url;
    setActiveTagID(tagID);
    if ( tagID ) {
      url = {
        query: { tagID: tagID },
      }
    } else {
      url = {
        query: null,
      }
    }
    router.push(url);
    updateTagID(tagID);
  }

  useEffect(() => {
    if (tagID) {
      setActiveTagID(tagID);
      updateTagID(tagID);
    }
  }, []);

  //console.log(tags);
  if ( tags ) {
    return (
      <div className='w-full max-w-container m-container p-container py-6 text-white text-lg'>
        <span
          onClick={() => setQueryTagID()}
          className={tagClass + ( activeTagID === '' ? ' font-bold border-b-light-turquoise' : '' )}>
          All
        </span>
        { tags.map(tag =>
          <Link href={`?tagID=${tag.id}`} passHref key={tag.id}>
            <span
              key={tag.id}
              //onClick={() => setQueryTagID(tag.id)}
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
