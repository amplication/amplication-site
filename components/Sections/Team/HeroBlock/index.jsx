import Image from "next/image";
import teamVideoPlaceholder from '../../../../public/images/bg/team-video-placeholder.png';

const HeroBlock = () => {
  return (
    <>
      <section className="page-hero team-page background-transparent">
        <div className="container-fluid">
          <div className="row d-flex align-items-end align-items-lg-center">
            <div className="col-12 col-lg-6">
              <div className="hero-header">
                <h1>
                  We&nbsp;think big. We&nbsp;think&nbsp;different. We&nbsp;are
                  Amplication.
                </h1>
              </div>
            </div>
            <div className="hero-bg col-12 col-lg-6">
              <video
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src={'videos/amplication-team.mp4'}
                  type="video/mp4"
                />
                <Image
                  src={teamVideoPlaceholder}
                  alt={''}
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBlock