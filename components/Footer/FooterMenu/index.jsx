import Link from 'next/link';

const FooterMenu = () => {
  return (
    <div className="w-full mb-14 laptop:w-auto laptop:mr-[10%] laptop:ml-3 laptop:my-0">
      <p className="font-poppins font-medium text-white text-center text-sm mb-6 laptop:text-lg laptop:text-left laptop:mb-6">
        Contact us
      </p>
      <ul className="w-full flex flex-col justify-start items-center">
        <li className="mb-1">
          <Link href={`mailto:${process.env.NEXT_PUBLIC_MAIL}`}>
            <a className="text-gray laptop:text-lg hover:text-purple-bright-hover">
              {process.env.NEXT_PUBLIC_MAIL}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
