import Image from 'next/image';
import Link from 'next/link';
import VideoIcon from '../../../../public/images/video.svg';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video">
                <div className="content-block">
                  <div className="animated-header">
                    <h1 className="main-title">
                      <span className="animated-header__fixed-text">
                        Helping developers build better and faster
                      </span>
                    </h1>
                    <div id="animated-header-content" style={{display: 'none'}}>
                      <span>Microservices.</span>
                      <span>GraphQL API.</span>
                      <span>REST API.</span>
                      <span>Authentication.</span>
                      <span>Authorization.</span>
                      <span>Admin UI.</span>
                    </div>
                    <div className="explainer text-base text-white !max-w-[400px]">
                      Amplication enables developers to create services that users love simply and efficiently.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex mb-4 align-items-center justify-content-start mt-4">
                    <Link href={'https://app.amplication.com'} passHref={true}>
                      <a className="btn btn-primary btn-lg col-sm-12 col-md-6 mb-4">
                        View careers
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="video">
                  <Link
                    href={'https://www.youtube.com/watch?v=wCJ2jF1IU7U'}
                    passHref={true}
                  >
                    <a data-lity={true}>
                      <Image src={VideoIcon} alt={''} />
                    </a>
                  </Link>
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
