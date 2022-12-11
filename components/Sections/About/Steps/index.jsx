import Image from 'next/image';
import What1 from '../../../../public/images/about/what-1.svg';
import What2 from '../../../../public/images/about/what-2.svg';
import What3 from '../../../../public/images/about/what-3.svg';
import What4 from '../../../../public/images/about/what-4.svg';
import Why1 from '../../../../public/images/about/why-1.svg';
import Why2 from '../../../../public/images/about/why-2.svg';
import Why3 from '../../../../public/images/about/why-3.svg';
import Why4 from '../../../../public/images/about/why-4.svg';
import Link from 'next/link';

const Steps = () => {
  return (
    <>
      <section className="background-transparent py-8 !pb-20">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="d-flex !flex-col laptop:!flex-row bg-dark-black-100 justify-content-between align-items-center medium:!py-14 medium:!px-12 !py-5 !px-3 !rounded-lg border-[1px] border-dark-black-70">
            <div className="col-md-12 col-lg-6 laptop:mb-0 mb-6">
              <h2 className="main-title bracket-box !text-4xl large:!text-[50px] !leading-tight max-w-[400px]">
                <span>Who</span> are we?
              </h2>
              <Link href={'/team'} passHref={true}>
                <a className="btn btn-primary btn-lg">Meet Our Team</a>
              </Link>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="feature-description text-sm tablet:text-base desktop:text-lg text-white desktop:w-[124%] max-w-[642px]">
                We are a group of developers who loves open source. Our mission
                is to simplify application development, unlock frictionless
                developer experience and bring best practices to any developer
                in any organization. We believe this approach will shape the
                next-generation programming.
              </div>
            </div>
          </div>

          {/*<div className="row feature d-flex justify-content-between align-items-center !my-4 laptop:!my-12">*/}
          {/*  <div className="col-sm-12 col-md-6 pr-3">*/}
          {/*    <div className="bracket-box !text-xl desktop:!text-4xl" data-aos="fade-up">*/}
          {/*      <span className="font-dmmono">Who</span>we are?*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*      className="feature-description text-base desktop:text-lg text-white !max-w-[610px]"*/}
          {/*      data-aos="fade-up"*/}
          {/*      data-aos-delay="300"*/}
          {/*    >*/}
          {/*      We are a group of developers who loves open source. Our mission is*/}
          {/*      to simplify application development, unlock frictionless developer*/}
          {/*      experience and bring best practices to any developer in any organization.*/}
          {/*      <br />*/}
          {/*      We believe this approach will shape the next-generation programming.*/}
          {/*      <br /><br />*/}
          {/*      <Link href={'/team'} passHref={true}>*/}
          {/*        <a className="btn btn-primary btn-lg">*/}
          {/*          Meet Our Team*/}
          {/*        </a>*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-12 col-md-6 relative flex align-items-center pt-12 desktop:pt-0 aspect-square desktop:h-[430px]">*/}
          {/*    <div className="absolute left-[17%] top-[12%] w-[65%]" data-aos="zoom-in" data-aos-delay="500">*/}
          {/*      <Image src={Who1} alt={'github sync'} />*/}
          {/*    </div>*/}
          {/*    <div className="absolute left-[20%] top-[2%] w-[50%] backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="700">*/}
          {/*      <Image src={Who2} alt={'github sync'} />*/}
          {/*    </div>*/}
          {/*    <div className="absolute left-[-11%] top-[-48%] w-[134%]" data-aos="zoom-in" data-aos-delay="900">*/}
          {/*      <Image src={Who3} alt={'github sync'} />*/}
          {/*    </div>*/}
          {/*    <div className="absolute left-[54%] top-[21%] w-[35%]" data-aos="zoom-in" data-aos-delay="1100">*/}
          {/*      <Image src={Who4} alt={'github sync'} />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {false && (
            <>
              <div className="row feature d-flex justify-content-between align-items-center !my-4 laptop:!my-12 desktop:pb-[240px]">
                <div className="col-sm-12 col-md-6 pr-3">
                  <div
                    className="bracket-box !text-xl desktop:!text-4xl"
                    data-aos="fade-up"
                  >
                    <span className="font-dmmono">What</span> we do it?
                  </div>
                  <div
                    className="feature-description text-base desktop:text-lg text-white !max-w-[610px]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Our vision is to create one platform for Node.js app
                    development that will empower professional developers in
                    creating business applications and extend platform
                    capabilities, with the open-source community&apos;s power of
                    collaboration & transparency.
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 relative flex align-items-center  pt-12 desktop:pt-0 aspect-square desktop:h-[430px]">
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <Image src={What1} alt={'github sync'} />
                  </div>
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  >
                    <Image src={What2} alt={'github sync'} />
                  </div>
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                  >
                    <Image src={What3} alt={'github sync'} />
                  </div>
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                  >
                    <Image src={What4} alt={'github sync'} />
                  </div>
                </div>
              </div>

              <div className="row feature d-flex justify-content-between align-items-center !my-4 laptop:!my-12 desktop:pb-[164px]">
                <div className="col-sm-12 col-md-6 pr-3">
                  <div
                    className="bracket-box !text-xl desktop:!text-4xl"
                    data-aos="fade-up"
                  >
                    <span className="font-dmmono">Why</span> we do it?
                  </div>
                  <div
                    className="feature-description text-base desktop:text-lg text-white !max-w-[610px]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    As our platform is open-source, we are looking to create an
                    ecosystem around the project, where you, the professional
                    developers, will always have the freedom to fork and
                    maintain the platform yourselves, with no vendor lock-in.
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 relative flex align-items-center pt-12 desktop:pt-0 aspect-square desktop:h-[430px]">
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <Image src={Why1} alt={'github sync'} />
                  </div>
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  >
                    <Image src={Why2} alt={'github sync'} />
                  </div>
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                  >
                    <Image src={Why3} alt={'github sync'} />
                  </div>
                  <div
                    className="absolute"
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                  >
                    <Image src={Why4} alt={'github sync'} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Steps;
