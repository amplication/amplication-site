import Image from 'next/image';
import Link from 'next/link';
import Screenshot from '../../../../public/images/screenshots/screenshot-1.svg';
import Person1 from '../../../../public/images/persons/person-1.png';
import Person2 from '../../../../public/images/persons/person-2.png';
import Person3 from '../../../../public/images/persons/person-3.png';
import Person4 from '../../../../public/images/persons/person-4.png';
import Person5 from '../../../../public/images/persons/person-5.png';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !py-36">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video">
                <div className="content-block flex flex-column justify-content-center">
                  <div className="animated-header">
                    <h1 className="main-title">
                      <span className="animated-header__fixed-text">
                        Build microservices <br /> 20x faster.
                      </span>
                      <span className="animated-header__fixed-text text-[34px] leading-[60px]">
                        Reliably. Securely. Consistently.
                      </span>
                    </h1>
                    <div className="explainer text-base text-white !max-w-[628px]">
                      Amplication is changing the way backend services are built and delivered. Built on the foundation of our popular open-source platform, Amplication helps you build backend serviceswith the highest standards, consistency, and scalability across your business.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex mb-4 align-items-center justify-content-start mt-4">
                    <Link href={'https://discord.gg/Z2CG3rUFnu'} passHref={true} >
                      <a target="_blank" className="btn btn-primary btn-sm !max-w-[126px] !h-10 mr-2" rel="noreferrer">
                        Get started
                      </a>
                    </Link>
                    <Link href={'https://discord.gg/Z2CG3rUFnu'} passHref={true} >
                      <a target="_blank" className="btn btn-outline-light btn-sm !max-w-[126px] !h-10 ml-2" rel="noreferrer">
                        Contact us
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="video relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div className="backdrop-filter backdrop-blur-sm p-[17px] border-[1px] bg-white/10 border-white/20 rounded-full w-[120px] h-[120px] absolute top-[-16%] left-[-17%] z-20" data-aos="zoom-in" data-aos-delay="0">
                      <Image src={Person1} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[20px] border-[1px] bg-white/10 border-white/20 rounded-full w-[140px] h-[140px] absolute top-[-18%] left-[65%] z-20" data-aos="zoom-in" data-aos-delay="450">
                      <Image src={Person2} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[24px] border-[1px] bg-white/10 border-white/20 rounded-full w-[167px] h-[167px] absolute top-[72%] left-[60%] z-20" data-aos="zoom-in" data-aos-delay="150">
                      <Image src={Person3} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[17px] border-[1px] bg-white/10 border-white/20 rounded-full w-[120px] h-[120px] absolute top-[87%] left-[12%]" data-aos="zoom-in" data-aos-delay="600">
                      <Image  src={Person4} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[20px] border-[1px] bg-white/10 border-white/20 rounded-full w-[136px] h-[136px] absolute top-[9%] left-[102%] z-20" data-aos="zoom-in" data-aos-delay="300">
                      <Image src={Person5} alt={''} />
                    </div>
                  </div>

                  <div className="z-10 relative" data-aos="zoom-in" data-aos-delay="200">
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
