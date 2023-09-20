import Image from 'next/image';
import HeroImage from '../../../../public/images/hacktoberfest/hero.svg';
import BinaryStrip from './binary-strip';

const Hero = () => {
  return (
    <>
      <div className="relative w-full flex flex-col align-items-center  justify-between  h-[calc(100vh-90px)] text-center bg-grid min-h-[600px]">
        <BinaryStrip />
        <div>
          <div className="h-[118px] mb-12">
            <Image
              src={HeroImage}
              alt={'Hacktoberfest & Amplication'}
              className="h-full"
            />
          </div>
          <span className="block font-extrabold text-4xl">
            Celebrate Open-source <br /> and Hacktoberfest 2023 with Amplication
          </span>
        </div>
        <BinaryStrip />
      </div>
    </>
  );
};

export default Hero;
