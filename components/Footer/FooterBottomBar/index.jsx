import Link from "next/link";

const FooterBottomBar = () => {
  return (
    <div className='w-full relative border border-solid border-purple-light laptop:border-footer border-l-0 border-r-0 border-b-0'>
      <ul className='w-full flex justify-start items-center'>
        <li className='w-1/2 py-3.5 laptop:py-8'>
          <p className='text-white text-xs text-gray font-poppins laptop:text-base'>
            {`©${new Date().getFullYear()} amplication`}
          </p>
        </li>
        <li className='w-1/2 text-right py-3.5 laptop:py-8'>
          <Link href={ `${process.env.NEXT_PUBLIC_SITE}/privacy-policy` }>
            <a className='text-white text-xs text-gray font-poppins underline laptop:text-base hover:text-purple-bright-hover'>
              Privacy Policy
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterBottomBar
