import Form from '../Form';
import PageHero from '../../../Common/PageHero';
import dotnetLogo from '../../../../public/images/dotnet/dotnet_logo.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <PageHero
        title={'Unlock Next-Level .NET Backend Development'}
        subTitle={
          'Join our exclusive early-access program for production-ready services in .NET'
        }
        subText={`Elevate your projects with the unmatched speed, reliability, and
        scalability of our .NET backend solution. Seamlessly integrate
        with your existing workflow and accelerate development by up to 20
        times. Say goodbye to time-consuming tasks and hello to a new era
        of efficiency with our highly anticipated .NET backend
        capabilities. Join our exclusive beta program now to revolutionize
        your backend development experience.`}
        //
        imageNode={
          <div className="relative p-[50px]  text-left">
            <Form />
            <div
              className="absolute w-[100px] h-[100px] rounded-[8px] overflow-hidden flex items-center justify-center text-center
            right-0 top-[20px] z-20 rotate-12"
            >
              <Image src={dotnetLogo} alt={'.net logo'} />
            </div>
          </div>
        }
      />
    </>
  );
};

export default Hero;
