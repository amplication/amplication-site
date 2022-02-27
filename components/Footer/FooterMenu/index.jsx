import Link from "next/link";

const FooterMenu = () => {
  return (
    <div className='w-full mb-12'>
      <p className='font-poppins font-medium text-white text-center text-sm mb-5'>
        Contact us
      </p>
      <ul className='w-full flex flex-col justify-start items-center'>
        <li className='mb-1'>
          <Link href='mailto:amplication@gmail.com'>
            <a className='text-gray text-base'>
              contact@amplication.com
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu