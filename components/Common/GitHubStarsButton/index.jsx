import Link from 'next/link';
import {useEffect, useState} from 'react';

const GitHubStarsButton = () => {
  const [starsCount, setStarsCount] = useState(8.7);

  useEffect(() => {
    fetch('https://api.github.com/repos/amplication/amplication', {
      'Content-Type': 'application/json',
    })
      .then(response => response.json())
      .then(data => {
        if (data.stargazers_count) {
          setStarsCount(parseFloat((data.stargazers_count / 1000).toFixed(1)));
        }
      });
  }, []);

  return (
    <Link href={'https://github.com/amplication/amplication'} passHref={true}>
      <a className="group btn btn-lg mb-4 text-white !w-auto !flex-none !px-0">
        <svg
          className="mr-2"
          width="22"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 0C5 0 0 5 0 11.3c0 5 3.2 9.2 7.5 10.7.6 0 .8-.3.8-.6v-2C5.2 20 4.5 18 4.5 18c-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1 1 1.8 2.6 1.3 3.2 1 0-.8.4-1.3.7-1.5-2.5-.3-5-1.3-5-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3 1.1a10.3 10.3 0 0 1 5.6 0c2-1.4 3-1.1 3-1.1.6 1.5.2 2.7 0 3 .8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5 5.6.4.3.8 1 .8 2v3.1c0 .3.1.7.7.6 4.4-1.5 7.5-5.7 7.5-10.7C22 5 17 0 11 0Z"
            fill="#fff"
          />
        </svg>
        {starsCount}K{' '}
        <span className="underline group-hover:no-underline pl-2">Star Us</span>
      </a>
    </Link>
  );
};

export default GitHubStarsButton;
