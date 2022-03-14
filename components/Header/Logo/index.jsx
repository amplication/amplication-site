import Link from 'next/link';
import Image from 'next/image';
import logoMobileImage from '../../../public/images/logo.svg';
import logoDesktopImage from '../../../public/images/logo_desktop.svg';
import {useEffect, useState} from 'react';

const Logo = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 991) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      setIsMobile(window.innerWidth < 992);
    });
    setIsMobile(window.innerWidth < 992);
  }, [])

  return (
    <div>
      <Link href='/blog'>
        <a className='flex justify-center items-center'>
          {
            isMobile
            ?
            <Image src={logoMobileImage} alt='Amplication Blog' />
            :
            <Image src={logoDesktopImage} alt='Amplication Blog' />
          }
        </a>
      </Link>
    </div>
  )
}

export default Logo
