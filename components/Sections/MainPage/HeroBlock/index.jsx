import Image from "next/image";
import Link from "next/link";
import VideoIcon from "../../../../public/images/video.svg";

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
                        Instantly generate
                      </span>
                      <span
                        id="animated-header-typed"
                        className="animated-header__animated-text"
                      ></span>
                      <span className="animated-header__fixed-text">
                        Just code what matters.
                      </span>
                    </h1>
                    <div
                      id="animated-header-content"
                      style={{ display: "none" }}
                    >
                      <span>Microservices.</span>
                      <span>GraphQL API.</span>
                      <span>REST API.</span>
                      <span>Authentication.</span>
                      <span>Authorization.</span>
                      <span>Admin UI.</span>
                    </div>
                    <div className="explainer text-base text-white">
                      Amplication is a&nbsp;
                      <span className="highlight">
                        flexible open-source Node.js app
                      </span>{" "}
                      development tool. It helps you build production-ready
                      Node.js backend without wasting time on
                      repetitive&nbsp;coding.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex mb-4 align-items-center justify-content-start mt-4">
                    <Link href={"https://app.amplication.com"} passHref={true}>
                      <a className="btn btn-primary btn-lg col-sm-12 col-md-6 mb-4">
                        Get Started
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <Link
                      href={"https://discord.gg/Z2CG3rUFnu"}
                      passHref={true}
                    >
                      <a
                        target="_blank"
                        className="btn btn-outline-secondary btn-lg col-sm-12 col-md-6 mb-4 text-black80"
                        rel="noreferrer"
                      >
                        <span className="social-link discord social-white">
                          {" "}
                        </span>
                        Join Discord
                      </a>
                    </Link>
                    <div className="spacer"></div>
                    <Link
                      href={"https://docs.amplication.com/docs/getting-started"}
                      passHref={true}
                    >
                      <a className="d-lg-none btn btn-outline-secondary btn-lg col-sm-12 col-md-6 mb-4 text-black80">
                        Documentation
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="video">
                  <Link
                    href={"https://www.youtube.com/watch?v=wCJ2jF1IU7U"}
                    passHref={true}
                  >
                    <a data-lity={true}>
                      <Image src={VideoIcon} alt={""} />
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
