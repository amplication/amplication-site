import Form from '../Form';
import Link from 'next/link';
import Image from 'next/image';
import logoDesktopImage from '../../../../public/images/logo_desktop.svg';

const Hero = () => {
  return (
    <>
      <div className=" w-full flex flex-col items-center  justify-between  min-h-[100vh] text-center bg-app-modernization bg-bottom bg-no-repeat bg-cover px-14 pb-[200px] min-h-[600px] ">
        <div className="max-w-[880px] mb-14 mt-[150px]">
          <Link href="/">
            <a className="flex justify-center items-center">
              <Image src={logoDesktopImage} alt="Amplication" />
            </a>
          </Link>
          <h1 className=" font-extrabold text-[48px] laptop:leading-[60px] laptop:text-[60px] laptop:leading-[72px]  mt-14">
            Your ultimate path for software modernization
          </h1>
          <h2 className="  text-[24px] leading-[36px]">
            Analyze your projects’ codebase and automatically generate your
            modernization blueprint. <br /> Ideal for updating legacy monolithic
            applications and complex microservices architectures.
          </h2>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Hero;
