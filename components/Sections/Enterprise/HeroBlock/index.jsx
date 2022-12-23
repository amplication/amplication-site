import Image from 'next/image';
import Link from 'next/link';
import Screenshot2 from '../../../../public/images/screenshots/screenshot-2.png';
import GitHubStarsButton from '../../../Common/GitHubStarsButton';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !pt-4 !pb-8 desktop:!pt-28 desktop:!pb-[13rem] !overflow-visible">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <h1 className="main-title mb-0">
                      <span className="block font-bold">
                        Build microservices <br /> 20x faster.
                      </span>
                      <span className="block text-[24px] desktop:text-[28px] leading-snug font-bold">
                        Reliably. Securely. Consistently.
                      </span>
                    </h1>
                    <div className="explainer text-base laptop:text-lg large:text-xl text-white !mt-8">
                      Amplication is changing the way backend services are built
                      and delivered. We help you build backend services with the
                      highest standards, consistency, and scalability across
                      your organization.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex align-items-center justify-content-start mt-4">
                    <Link href={'https://app.amplication.com'} passHref={true}>
                      <a className="btn btn-primary btn-lg  mb-4">
                        Get Started
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <Link
                      href={'https://amplication.com/discord'}
                      passHref={true}
                    >
                      <a
                        target="_blank"
                        className="btn btn-outline-secondary btn-lg  mb-4 text-black80"
                        rel="noreferrer"
                      >
                        <span className="social-link discord social-white">
                          {' '}
                        </span>
                        Join Discord
                      </a>
                    </Link>
                    <div className="d-lg-none spacer"></div>
                    <Link
                      href={'https://docs.amplication.com/getting-started'}
                      passHref={true}
                    >
                      <a className="d-lg-none btn btn-outline-secondary btn-lg mb-4 text-black80">
                        Documentation
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <GitHubStarsButton />
                  </div>
                </div>
                <div className="relative align-items-center !max-w-[90%] w-full min-h-[600px] hidden medium:flex align-items-center laptop:!max-w-[56%]">
                  <div className="absolute laptop:my-auto w-[67vw] max-w-[1280px] medium:flex align-items-center">
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
