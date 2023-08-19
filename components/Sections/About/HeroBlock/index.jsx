import Image from 'next/image';
import Screenshot3 from '../../../../public/images/screenshots/screenshot-3.png';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !py-8 desktop:!pt-26 desktop:!pb-[13rem] !overflow-visible">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video middle:!flex align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <h1 className="main-title mb-0">
                      <span className="block font-bold">
                        Helping developers build better and faster
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="relative align-items-center mt-[-20vw] mb-[-15vw] middle:my-0 middle:!max-w-[90%] w-full middle:min-h-[600px] flex align-items-center middle:!max-w-[53%]">
                  <div className="middle:absolute middle:my-auto min-w-[114vw] middle:min-w-full middle:w-[65vw] max-w-[1280px] middle:flex align-items-center">
                    <Image src={Screenshot3} alt={'Amplication platform'} />
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
