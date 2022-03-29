import Image from "next/image";
import VideoIcon from '../../../../public/images/video.svg';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video">
                <div>
                  <div className="animated-header">
                    <h1 className="main-title">
                  <span className="animated-header__fixed-text">
                    Instantly generate
                  </span>
                      <span id="animated-header-typed" className="animated-header__animated-text"></span>

                      <span className="animated-header__fixed-text">
                      Just code what matters.
                    </span>
                    </h1>
                    <div id="animated-header-content" style={{display: 'none'}}>
                      <span>GraphQL API.</span>
                      <span>REST API.</span>
                      <span>Authentication.</span>
                      <span>Authorization.</span>
                      <span>Admin UI.</span>
                      <span>Logging.</span>
                    </div>
                    <div className="explainer">
                      Amplication is an
                      <span className="highlight">open&#8209;source</span> development
                      tool. It helps you develop quality Node.js applications
                      without spending time on repetitive coding&nbsp;tasks.
                    </div>
                  </div>
                  <div className="buttons-wrapper d-flex mb-4 align-items-center justify-content-start mt-4">
                    <a href="https://app.amplication.com" className="btn btn-primary btn-lg col-sm-12 col-md-6 mb-4">
                      Get Started
                    </a>
                    <div className="spacer"></div>
                    <a href="https://discord.gg/Z2CG3rUFnu" target="_blank" className="btn btn-outline-secondary btn-lg col-sm-12 col-md-6 mb-4 text-black80">
                      <span className="social-link discord social-white"> </span>
                      Join Discord
                    </a>

                    <div className="spacer"></div>
                    <a href="https://docs.amplication.com/docs/getting-started" className="d-lg-none btn btn-outline-secondary btn-lg col-sm-12 col-md-6 mb-4 text-black80">
                      Documentation
                    </a>
                  </div>
                </div>
                <div className="video">
                  <a href="https://www.youtube.com/watch?v=wCJ2jF1IU7U" data-lity>
                    <Image
                      src={VideoIcon}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBlock