import Image from 'next/image';
import Screenshot3 from '../../../../public/images/screenshots/screenshot-3.png';

const HeroBlock = () => {
  return (
    <>
      <section className="page-welcome !py-8 desktop:!pt-26 desktop:!pb-[13rem] !overflow-visible">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="header-and-video laptop:!flex align-items-center">
                <div className="content-block">
                  <div className="animated-header">
                    <h1 className="main-title mb-0">
                      <span className="block font-bold">
                        Helping developers build better and faster
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="relative align-items-center mt-[-20vw] mb-[-15vw] laptop:my-0 laptop:!max-w-[90%] w-full laptop:min-h-[600px] flex align-items-center laptop:!max-w-[53%]">
                  <div className="laptop:absolute laptop:my-auto min-w-[114vw] laptop:min-w-full laptop:w-[65vw] max-w-[1280px] laptop:flex align-items-center">
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
