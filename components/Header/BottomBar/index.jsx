import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const BottomBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [version, setVersion] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!version) {
      fetch(
        'https://api.github.com/repos/amplication/amplication/releases/latest',
        {
          method: 'GET',
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          if (typeof data !== 'undefined' && data.name) {
            setVersion(data.name);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, [version]);

  return (
    version && (
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop flex !max-w-[1904px]">
        <span className="text-white !leading-[36px] font-ubuntumono text-base font-bold text-center w-[81px] h-9 bg-purple-bright rounded-b">
          {version}
        </span>
        {router.asPath !== '/enterprise' && (
          <Link href={'/enterprise'} passHref={true}>
            <a
              className="hidden float-right text-lg py-2 hover:text-white text-[#54DBEE] transition-all font-light relative ml-auto"
              style={{top: '-' + scrollY + 'px'}}
            >
              Enterprise
            </a>
          </Link>
        )}
      </div>
    )
  );
};

export default BottomBar;
