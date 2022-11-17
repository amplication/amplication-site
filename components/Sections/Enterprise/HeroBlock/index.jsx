import Image from 'next/image';
import Link from 'next/link';
import Screenshot from '../../../../public/images/screenshots/screenshot-1.svg';
import Person1 from '../../../../public/images/persons/person-1.png';
import Person2 from '../../../../public/images/persons/person-2.png';
import Person3 from '../../../../public/images/persons/person-3.png';
import Person4 from '../../../../public/images/persons/person-4.png';
import Person5 from '../../../../public/images/persons/person-5.png';
import Button from '../../../Common/Button';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !pt-10 !pb-16 desktop:!pt-36 desktop:!pb-[13rem]">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video">
                <div className="content-block flex flex-column justify-content-center">
                  <div className="animated-header !mt-0 medium:!mt-14">
                    <h1 className="!text-[42px] desktop:!text-[56px] text-left !leading-[56px] desktop:!leading-[72px] font-bold">
                      <span className="block font-bold">
                        Build microservices <br /> 20x faster.
                      </span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[40px] desktop:leading-[60px] font-bold">
                        Reliably. Securely. Consistently.
                      </span>
                    </h1>
                    <div className="explainer text-lg text-white my-2 !max-w-[628px]">
                      Amplication is changing the way backend services are built
                      and delivered. We help you build backend services with the
                      highest standards, consistency, and scalability across
                      your organization.
                    </div>
                  </div>
                  <div className="d-flex mt-4 align-items-center justify-content-center justify-content-lg-start">
                    <Link href={'https://app.amplication.com/'} passHref={true}>
                      <a
                        target="_blank"
                        className="btn btn-primary btn-sm !text-lg !h-10 mr-2 w-full max-w-[180px]"
                        rel="noreferrer"
                      >
                        Get started
                      </a>
                    </Link>
                    <Button
                      text="Contact us"
                      className="outline-button !text-lg !h-10 ml-2 w-full max-w-[180px]"
                      isLink={false}
                      onClick={() => Intercom('show')}
                    />
                  </div>
                </div>
                <div className="relative !max-w-[80%] h-[66vw] mx-auto hidden medium:block laptop:!max-w-[55%] laptop:h-auto">
                  <div
                    className="absolute flex items-center justify-center top-12 bottom-0 left-[-6%]"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <svg
                      width="1018"
                      height="1149"
                      viewBox="0 0 1018 1149"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1137.5"
                        cy="558.5"
                        r="590"
                        stroke="white"
                        strokeOpacity="0.1"
                      />
                      <circle
                        cx="1140"
                        cy="586"
                        r="276.5"
                        stroke="white"
                        strokeOpacity="0.1"
                      />
                      <path
                        d="M364.5 565.5C163.744 565.5 1 402.756 1 202"
                        stroke="white"
                        strokeOpacity="0.1"
                      />
                      <path
                        d="M554 527.5C554 728.256 391.256 891 190.5 891"
                        stroke="white"
                        strokeOpacity="0.1"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div
                      className="backdrop-filter backdrop-blur-sm p-[17px] border-[1px] bg-white/10 border-white/20 rounded-full w-[120px] h-[120px] absolute top-[-8%] left-[-12%] z-20"
                      data-aos="zoom-in"
                      data-aos-delay="0"
                    >
                      <Image src={Person1} alt={''} />
                    </div>
                    <div
                      className="backdrop-filter backdrop-blur-sm p-[20px] border-[1px] bg-white/10 border-white/20 rounded-full w-[140px] h-[140px] absolute top-[-10%] left-[68%] z-20"
                      data-aos="zoom-in"
                      data-aos-delay="450"
                    >
                      <Image src={Person2} alt={''} />
                    </div>
                    <div
                      className="backdrop-filter backdrop-blur-sm p-[24px] border-[1px] bg-white/10 border-white/20 rounded-full w-[167px] h-[167px] absolute top-[81%] left-[65%] z-20"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                    >
                      <Image src={Person3} alt={''} />
                    </div>
                    <div
                      className="backdrop-filter backdrop-blur-sm p-[17px] border-[1px] bg-white/10 border-white/20 rounded-full w-[120px] h-[120px] absolute top-[96%] left-[15%]"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <Image src={Person4} alt={''} />
                    </div>
                    <div
                      className="backdrop-filter backdrop-blur-sm p-[20px] border-[1px] bg-white/10 border-white/20 rounded-full w-[136px] h-[136px] absolute top-[20%] left-[106%] z-20"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <Image src={Person5} alt={''} />
                    </div>
                  </div>
                  <div
                    className="z-10 laptop:left-[20px] top-[50px] relative"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <Image src={Screenshot} alt={''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBlock;
