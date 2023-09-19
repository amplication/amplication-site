import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as analytics from '../../../../lib/analytics';
import HeroImage from '../../../../public/images/hacktoberfest/hero.svg';

const Hero = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  }, []);

  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  }, []);

  return (
    <>
      <div className="relative w-full flex flex-col align-items-center  justify-center  h-[calc(100vh-102px)] text-center bg-red">
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
    </>
  );
};

export default Hero;
