import Link from 'next/link';

const LowCode = () => {
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="d-flex !flex-col laptop:!flex-row bg-dark-black-100 justify-content-between align-items-center medium:!py-[112px] medium:!px-40 !py-[40px] !px-[24px] !rounded-lg border-[1px] border-dark-black-70">
          <div className="col-md-12 col-lg-6">
            <h2 className="main-title !text-4xl large:!text-[50px] !leading-tight max-w-[400px]">
              For developers, by developers
            </h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="bracket-box !mb-6 !text-xl desktop:!text-4xl">
              <span>Why</span> Open-source?
            </div>
            <div className="feature-description text-sm tablet:text-base desktop:text-lg text-white desktop:w-[124%] max-w-[642px]">
              We believe open-source, app development and simplicity should go
              hand-in-hand. Amplication builds the next generation of
              development tools with the help of the community, for the
              community.
            </div>
            <Link href={'https://amplication.com/discord'} passHref={true}>
              <a
                target="_blank"
                className="btn btn-outline-secondary btn-sm w-[182px] !h-10 mt-8 text-black80"
                rel="noreferrer"
              >
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
