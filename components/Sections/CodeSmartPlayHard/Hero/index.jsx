import Form from '../Form';
import Image from 'next/image';
import AppDashboard from '../../../../public/images/xbox.png';

const Hero = () => {
  return (
    <>
      <div className="my-[80px] w-full flex flex-col items-center  justify-between text-center laptop:text-left ">
        <div className="flex flex-col gap-10 laptop:flex-row  justify-between flex-1 ">
          <div className="flex flex-col gap-2 flex-1 items-center laptop:items-start">
            <h1 className="text-5xl laptop:text-4xl desktop:text-7xl font-bold ">
              Code. Deploy. Game&nbsp;On!
            </h1>
            <h2 className="text-lg laptop:text-2xl desktop:text-3xl font-semibold">
              Boost your coding & gaming experience with Amplication.
            </h2>
            <div className="text-sm laptop:text-base large:text-lg text-white ">
              Join our exclusive KubeCon raffle and get the chance to win an
              Xbox Series X! To enter, create a production-ready service with
              Amplication in 30 seconds. Just a few clicks and you&apos;re in!
            </div>
            <div className="hidden laptop:block">
              <Form />
            </div>
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
          <div className="block laptop:hidden">
            <Form />
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center mt-20 ">
          <div className="text-2xl laptop:text-4xl desktop:text-5xl font-bold ">
            Code with Amplication and win big!
          </div>

          <div className="text-sm laptop:text-base large:text-lg text-white !mt-3 !mb-4 !max-w-[710px]">
            Amplication automates backend creation, helping you deploy scalable
            and reliable services faster and efficiently. Empower your business
            with modern applications. Streamline and revolutionize your
            development process.
          </div>
        </div>
        <div className="hidden laptop:block w-full hero-blur--side"></div>
      </div>
    </>
  );
};

export default Hero;
