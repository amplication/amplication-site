import Link from 'next/link';

const FooterBottomBar = () => {
  return (
    <div className="text-center w-full mb-14 relative border border-solid border-purple-light laptop:border-footer border-l-0 border-r-0 border-b-0">
      <ul className="w-full laptop:flex laptop:justify-between items-center">
        <li className="py-3.5 laptop:py-8">
          <p className="text-xs text-gray font-poppins laptop:text-base">
            {`©${new Date().getFullYear()} amplication`}
          </p>
        </li>
        <li className="flex-col flex laptop:flex-row gap-4 justify-end py-3.5 laptop:py-8">
          <Link href="/terms">
            <a className="text-xs text-gray font-poppins underline laptop:text-base hover:text-purple-bright-hover">
              Terms & Conditions
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a className="text-xs text-gray font-poppins underline laptop:text-base hover:text-purple-bright-hover">
              Privacy Policy
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterBottomBar;
