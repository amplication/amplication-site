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
        subText={`We are bringing the speed, reliability, and scalability that's already trusted by 
        tens of thousands of Node.js developers, to your .NET projects. 
        Seamlessly integrate with your existing workflow and accelerate your development by 30X. 
        Say ‘Goodbye’ to time-consuming tasks and ‘Hello’ to a new era of efficiency with our highly 
        anticipated .NET backend capabilities.`}
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
