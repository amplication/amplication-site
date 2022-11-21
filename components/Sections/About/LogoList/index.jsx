import Image from 'next/image';
import LogoNorwest from '../../../../public/images/logotypes/logo-norwest.png';
import LogoEntree from '../../../../public/images/logotypes/logo-entree-capital.png';
import LogoVertex from '../../../../public/images/logotypes/logo-vertex.png';

const LogoList = () => {
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <h2 className="main-title text-center !mb-6 laptop:!mb-20 !text-[50px]">
          Backed by visionary global investors
        </h2>
        <div className="logotypes d-flex justify-evently !pb-12 desktop:!pb-[172px] border-b-[1px] border-dark-black-70">
          <div
            className="px-0 tablet:px-4"
            data-aos="zoom-in"
          >
            <Image src={LogoNorwest} alt={''} />
          </div>
          <div
            className="px-0 tablet:px-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image src={LogoEntree} alt={''} />
          </div>
          <div
            className="px-0 tablet:px-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Image src={LogoVertex} alt={''} />
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoList;
