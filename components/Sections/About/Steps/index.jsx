import Link from 'next/link';

const Steps = () => {
  return (
    <>
      <section className="background-transparent py-8 !pb-20">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="d-flex !flex-col laptop:!flex-row bg-dark-black-100 justify-content-between align-items-center medium:!py-14 medium:!px-12 !py-5 !px-3 !rounded-lg border-[1px] border-dark-black-70">
            <div className="col-md-12 col-lg-6 laptop:mb-0 mb-6">
              <h2 className="main-title bracket-box !text-4xl large:!text-[50px] !leading-tight max-w-[400px]">
                <span>Who</span> are we?
              </h2>
              <Link href={'/team'} passHref={true}>
                <a className="btn btn-primary btn-lg">Meet Our Team</a>
              </Link>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="feature-description text-sm tablet:text-base desktop:text-lg text-white large:w-[124%] max-w-[642px]">
                We are a group of developers who loves open source. Our mission
                is to simplify application development, unlock frictionless
                developer experience and bring best practices to any developer
                in any organization. We believe this approach will shape the
                next-generation programming.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
