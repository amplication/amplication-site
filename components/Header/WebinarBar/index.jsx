import Link from 'next/link';
import Webinar from '../../../public/images/webinar.png';
import Image from 'next/image';

const WebinarBar = () => {
  return (
    <div className="amplication-base relative z-10 w-full bg-[#111422] h-[60px] max-laptop:h-auto">
      <div className="w-full flex justify-center items-center max-w-container m-container p-container max-laptop:flex-col max-laptop:pb-4">
        <div className="relative h-[60px]">
          <Image
            className="block"
            height="60"
            width="280"
            src={Webinar}
            alt={''}
          />
          <div className="inline-flex justify-center items-center absolute w-fit inset-0 m-auto text-white !h-[34px] !font-bold !text-base !leading-6 px-3 border backdrop-blur-[9.5px] rounded border-solid border-[rgba(255,255,255,0.3)]">
            March 29, 2023
          </div>
        </div>
        <span className="text-white font-semibold text-sm leading-[22px] mx-8 text-center max-laptop:my-4">
          Webinar: How to Build Nodejs Apps Faster With Amplication?
        </span>
        <Link
          href="https://amplication.com/blog/webinar-march-29-2023"
          passHref={true}
        >
          <a className="btn btn-outline-light btn-lg btn-sm !h-[34px] !font-normal !text-sm px-2 whitespace-nowrap">
            Register now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebinarBar;
