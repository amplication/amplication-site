import Link from "next/link";
import Image from "next/image";
import logoImage from '../../../public/images/logo.svg';
import logoImageDesktop from '../../../public/images/logo_desktop.svg';

const Logo = () => {
  return (
    <div className=''>
      <Link href='/'>
        <a className='inline-block'>
          <Image src={logoImage} />
        </a>
      </Link>
      {/*<a className='hidden laptop:inline-block'>*/}
      {/*  <Image src={logoImageDesktop} />*/}
      {/*</a>*/}
    </div>
  )
}

export default Logo