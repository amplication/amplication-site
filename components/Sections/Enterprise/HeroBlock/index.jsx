import Image from 'next/image';
import Link from 'next/link';
import Screenshot2 from '../../../../public/images/screenshots/screenshot-2.png';
import Button from '../../../Common/Button';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !pt-4 !pb-8 laptop:!py-16 desktop:!py-16 large:!pt-36 large:!pb-[13rem]">
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
                <div className="relative align-items-center !max-w-[90%] w-full min-h-[600px] hidden medium:flex align-items-center laptop:!max-w-[56%]">
                  <div
                    className="absolute laptop:my-auto w-[67vw] max-w-[1280px] medium:flex align-items-center"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <Image src={Screenshot2} alt={''} />
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
