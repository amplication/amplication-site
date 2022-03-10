import Link from "next/link";
import Image from "next/image";
import logoImage from '../../../public/images/logo.svg';

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <a className='flex justify-center items-center'>
          <Image src={logoImage} />
        </a>
      </Link>
    </div>
  )
}

export default Logo