const AboutUs = () => {
  return (
    <>
      <section className="page-about bg-transparent">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="mb-4 text-center">
            <h2 className="h2 text-center">
              Helping developers building better and faster
            </h2>
            <div className="row">
              <p className="h3 col-12 col-lg-8 offset-lg-2 pr-4 pl-4 text-lg text-white">
                We are a group of creators who love open-source and low-code. We
                believe that low-code application development will evolve into a
                modern-day programming&nbsp;language.
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-md-stretch align-items-start roadmap-wrapper">
            <div className="col-md-12 col-lg-6 mb-4">
              <div className="about-box">
                <div className="bracket-box">
                  <span>What</span>
                  we do
                </div>
                <div className={'text-base text-white'}>
                  Our vision is to create one platform for backend development
                  that will empower professional developers in creating business
                  applications and extend platform capabilities, with the
                  open-source community&apos;s power of collaboration &
                  transparency.
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-4">
              <div className="about-box">
                <div className="bracket-box">
                  <span>Why</span>
                  we do it
                </div>
                <div className={'text-base text-white'}>
                  As our platform is open-source, we are looking to create an
                  ecosystem around the project, where you - the professional
                  developers, will always have the freedom to fork and maintain
                  the platform yourselves, with no vendor lock-in.
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="about-wrapper-2">
                <h2 className="h2">
                  App Development 💜 <br></br>Open-Source
                </h2>
                <div className="">
                  <div className="about-box">
                    <div className="bracket-box">
                      <span>Why</span>
                      open-source
                    </div>
                    <div className={'text-base text-white'}>
                      We believe low-code and open-source should go
                      hand-in-hand. Amplication builds the next generation of
                      development tools with the help of the community, for the
                      community.
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

export default AboutUs;
