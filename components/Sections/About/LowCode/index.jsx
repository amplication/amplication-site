import Link from 'next/link';

const LowCode = () => {
  return (
      <>
        <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="d-flex bg-dark-black-100 justify-content-between align-items-center p-36 !rounded-lg border-[1px] border-dark-black-70">
            <div className="col-sm-12 col-md-6">
              <h2 className="main-title !text-[50px]">For developers, &nbsp;by developers</h2>
            </div>
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box">
                <span>Why</span> Open-source?
              </div>
              <div className="feature-description text-base text-white max-w-[542px]">
                We believe open-source, app development and simplicity should go hand-in-hand. Amplication builds the next generation of development tools with the help of the community, for the community.
              </div>
              <Link href={'https://discord.gg/Z2CG3rUFnu'} passHref={true} >
                <a target="_blank" className="btn btn-outline-secondary btn-sm w-[182px] !h-10 mt-8 text-black80" rel="noreferrer">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </section>
      </>
  );
};

export default LowCode;
