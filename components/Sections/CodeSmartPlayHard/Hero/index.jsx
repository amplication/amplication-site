import Form from '../Form';
import Image from 'next/image';
import AppDashboard from '../../../../public/images/xbox.png';

const Hero = () => {
  return (
    <>
      <div className="my-[80px] w-full flex flex-col gap-10 laptop:flex-row items-center  justify-between text-center laptop:text-left">
        <div className="flex flex-col gap-2 flex-1 items-center laptop:items-start">
          <h1 className="text-5xl laptop:text-4xl desktop:text-7xl font-bold ">
            Code. Deploy. Game&nbsp;On!
          </h1>
          <h2 className="text-lg laptop:text-2xl desktop:text-3xl font-semibold">
            Boost your coding & gaming experience with Amplication.
          </h2>
          <div className="text-sm laptop:text-base large:text-lg text-white">
            Join our exclusive MWC 2024 raffle and get the chance to win an Xbox
            Series X!
          </div>
          <Form />
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <div className="hero-blur max-w-[450px]">
            <Image
              src={AppDashboard}
              alt={'Amplication platform'}
              className="max-w-[200px]"
            />
            <div
              className="absolute w-[150px] h-[150px] rounded-full bg-purple 
            right-[40px] top-[20px]"
            >
              <div className="rotate-12 flex items-center justify-center text-center text-xl font-bold absolute w-[120px] h-[120px] rounded-full bg-transparent border-2 border-solid border-white right-[15px] top-[15px]">
                Win an Xbox!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
