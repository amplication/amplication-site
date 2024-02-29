import Form from '../Form';
import Image from 'next/image';
import AppDashboard from '../../../../public/images/break-the-monolith/break-the-monolith-hero.svg';

const Hero = () => {
  return (
    <>
      <div className="my-[80px] w-full flex flex-col items-center  justify-between text-center laptop:text-left ">
        <div className="flex flex-col gap-10 laptop:flex-row  justify-between flex-1 ">
          <div className="flex flex-col gap-4 flex-1 items-center laptop:items-start">
            <h1 className="text-4xl laptop:text-5xl desktop:text-5xl font-bold ">
              Transform Your Monolith to Microservices
            </h1>

            <div className="text-sm laptop:text-base large:text-lg text-white">
            See how our Break the Monolith feature reshapes your approach to 
            microservices architecture. 
            Dive into our sandbox environment and see how Amplication modernizes 
            your system architecture and transforms your development workflow.
            </div>
            <h2 className="text-2xl laptop:text-xl desktop:text-2xl font-semibold">
              Experience Break the Monolith, Access Sandbox Now
            </h2>
            <Form />
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <div className=" max-w-[450px]">
              <Image
                src={AppDashboard}
                alt={'Amplication platform'}
                className="max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
