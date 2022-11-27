import Image from 'next/image';
import Link from 'next/link';
import Screenshot3 from '../../../../public/images/screenshots/screenshot-3.png';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !pt-4 !pb-8 desktop:!pt-36 desktop:!pb-[13rem] !overflow-visible">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <h1 className="main-title mb-0">
                      <span className="animated-header__fixed-text">
                        Helping developers build better and faster
                      </span>
                    </h1>
                    <div className="explainer text-base laptop:text-lg large:text-xl text-white !mt-8">
                      Amplication enables developers to create services that
                      users love simply and efficiently.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex align-items-center justify-content-start mt-2">
                    <Link href={'https://app.amplication.com'} passHref={true}>
                      <a className="btn btn-primary btn-lg">
                        View Careers
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative align-items-center !max-w-[90%] w-full min-h-[600px] hidden medium:flex align-items-center laptop:!max-w-[56%]">
                  <div
                      className="absolute laptop:my-auto w-[67vw] max-w-[1280px] medium:flex align-items-center"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                  >
                    <Image src={Screenshot3} alt={''} />
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
