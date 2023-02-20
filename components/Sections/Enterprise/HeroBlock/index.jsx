import Image from 'next/image';
import Link from 'next/link';
import VideoWatch from '../../../../public/images/video-watch.png';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !pt-10 !pb-8 large:!py-[9vh] xlg:!py-[17vh]">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <h2 className="main-title mb-0">
                      <span className="block font-bold">
                        Build microservices <br /> 20x faster.
                      </span>
                      <span className="block text-[20px] tablet:text-[28px] desktop:text-[34px] leading-relaxed font-bold">
                        Reliably. Securely. Consistently.
                      </span>
                    </h2>
                    <div className="explainer text-sm laptop:text-base large:text-lg text-white !mt-8">
                      Amplication is changing the way backend services are built
                      and delivered. We help you build backend services with the
                      highest standards, consistency, and scalability across
                      your organization.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex tablet:align-items-center justify-content-start mt-2">
                    <Link href={'https://app.amplication.com'} passHref={true}>
                      <a className="btn btn-primary btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]">
                        Get started
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="video flex align-items-center">
                  <div className="relative align-items-center !max-w-[92%] w-full min-h-[600px] hidden medium:flex align-items-center laptop:!max-w-[56%]">
                    <div className="absolute laptop:my-auto !-mt-24 w-[84vw] medium:flex align-items-center">
                      <Link
                        href={'https://www.youtube.com/watch?v=Kn5cNlUecCs'}
                        passHref={true}
                      >
                        <a data-lity={true}>
                          <Image src={VideoWatch} alt={''} />
                        </a>
                      </Link>
                    </div>
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
