import Image from 'next/image';
import Link from 'next/link';
import Person6 from "../../../../public/images/persons/person-6.png";
import Person7 from "../../../../public/images/persons/person-7.png";
import Person4 from "../../../../public/images/persons/person-4.png";
import Person9 from "../../../../public/images/persons/person-9.png";
import Person10 from "../../../../public/images/persons/person-10.png";
import Screenshot from "../../../../public/images/screenshots/screenshot-1.svg";

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !py-8 desktop:!pt-36 desktop:!pb-[13rem] !overflow-visible">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video">
                <div className="content-block flex flex-column justify-content-center mb-20 laptop:mb-0">
                  <div className="animated-header !mt-14">
                    <h1 className="!text-[42px] desktop:!text-[56px] text-left !leading-[56px] desktop:!leading-[72px] font-bold" data-aos="fade-up">
                      <span className="block">
                        Helping developers build better and faster
                      </span>
                    </h1>
                    <div className="explainer text-lg text-white my-2 !max-w-[628px]" data-aos="fade-up" data-aos-delay="200">
                      Amplication enables developers to create services that users love simply and efficiently.
                    </div>
                  </div>
                  <div className="d-flex mt-4 align-items-center justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-delay="400">
                    <Link href={'https://amplication.breezy.hr/'} passHref={true} >
                      <a target="_blank" className="btn btn-primary btn-sm !text-lg !h-10 mr-2 w-full max-w-[180px]" rel="noreferrer">
                        View Careers
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative !max-w-[80%] h-[66vw] mx-auto laptop:!max-w-[55%] laptop:h-auto">
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div className="backdrop-filter backdrop-blur-sm p-[17px] border-[1px] bg-white/10 border-white/20 rounded-full w-[120px] h-[120px] absolute top-[-8%] left-[-12%] z-20" data-aos="zoom-in" data-aos-delay="0">
                      <Image src={Person6} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[20px] border-[1px] bg-white/10 border-white/20 rounded-full w-[140px] h-[140px] absolute top-[-10%] left-[68%] z-20" data-aos="zoom-in" data-aos-delay="450">
                      <Image src={Person7} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[24px] border-[1px] bg-white/10 border-white/20 rounded-full w-[167px] h-[167px] absolute top-[81%] left-[65%] z-20" data-aos="zoom-in" data-aos-delay="150">
                      <Image src={Person4} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[17px] border-[1px] bg-white/10 border-white/20 rounded-full w-[120px] h-[120px] absolute top-[96%] left-[15%]" data-aos="zoom-in" data-aos-delay="600">
                      <Image  src={Person9} alt={''} />
                    </div>
                    <div className="backdrop-filter backdrop-blur-sm p-[20px] border-[1px] bg-white/10 border-white/20 rounded-full w-[136px] h-[136px] absolute top-[20%] left-[106%] z-20" data-aos="zoom-in" data-aos-delay="300">
                      <Image src={Person10} alt={''} />
                    </div>
                  </div>
                  <div className="z-10 laptop:left-[20px] top-[50px] relative" data-aos="zoom-in" data-aos-delay="200">
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
