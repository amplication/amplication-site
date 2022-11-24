import {useEffect, useState} from 'react';

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
  }, []);

  return (
    version && (
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop flex">
        <span className="text-white !leading-snug font-ubuntumono text-xs text-center laptop:text-base py-1 w-[81px] laptop:py-2 bg-purple-bright inline-block rounded-b">
          {version}
        </span>
        {router.asPath !== '/enterprise' && (
          <Link href={'/enterprise'} passHref={true}>
            <a
              className="inline laptop:hidden float-right text-lg py-2 hover:text-white text-[#54DBEE] transition-all font-light relative"
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
