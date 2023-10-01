import Link from 'next/link';
import Image from 'next/image';
import HacktoberfestImage from '../../../public/images/hacktoberfest/logo-hacktoberfest.svg';

const HacktoberfestBar = () => {
  return (
    <div className="relative z-10 w-full bg-light-blue laptop:mb-[-1px]">
      <Link href="/hacktoberfest-2023">
        <a className="font-jetbrains w-full flex flex-col laptop:flex-row gap-1 laptop:gap-4 justify-center text-xs text-center items-center max-w-container m-container p-container py-2 cursor-pointer  ">
          <Image
            src={HacktoberfestImage}
            height={32}
            width={131}
            alt={'Hacktoberfest & Amplication'}
            className="mr-2"
          />
          <span>Amplication is a proud sponsor of Hacktoberfest 2023. </span>
          <span>Click here to participate.</span>
        </a>
      </Link>
    </div>
  );
};

export default HacktoberfestBar;
