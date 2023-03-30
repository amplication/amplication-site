import Logo1 from '../../../../public/images/logotypes/logo-1.svg';
import Logo2 from '../../../../public/images/logotypes/logo-2.svg';
import Logo3 from '../../../../public/images/logotypes/logo-3.svg';
import Logo4 from '../../../../public/images/logotypes/logo-4.svg';
import Logo5 from '../../../../public/images/logotypes/logo-5.svg';
import Logo6 from '../../../../public/images/logotypes/logo-6.svg';
import Logo7 from '../../../../public/images/logotypes/logo-7.svg';
import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <section className="!pt-5 !pb-4 laptop:!py-20">
        <div className="flex-grow max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <h2 className="roadmap-heading tablet:text-center">
            Empowering developers from leading companies
          </h2>
          <div className="logotypes mt-6 flex flex-wrap align-items-center">
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo1} alt="pull request" />
            </div>
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo2} alt="pull request" />
            </div>
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo3} alt="pull request" />
            </div>
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo4} alt="pull request" />
            </div>
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo5} alt="pull request" />
            </div>
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo6} alt="pull request" />
            </div>
            <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
              <Image src={Logo7} alt="pull request" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
