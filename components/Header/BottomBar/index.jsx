import {useEffect, useState} from 'react';

const BottomBar = () => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    if ( !version ) {
      fetch( 'https://api.github.com/repos/amplication/amplication/releases/latest',
        {
          method: 'GET',
        })
        .then( response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then( data => {
          console.log(data.name)
          if ( typeof data !== 'undefined' && data.name) {
            setVersion(data.name);
          }
        })
        .catch( error => {
          console.log(error);
        })
    }
  }, []);

  return (
    version &&
    <div className='w-full'>
      <div className='w-full container-desktop-enlarged'>
        <span className='text-white font-ubuntumono text-xs text-center laptop:text-base py-2 px-4 laptop:py-2 bg-purple-bright inline-block rounded-b'>
          {version}
        </span>
      </div>
    </div>
  )
}

export default BottomBar;
