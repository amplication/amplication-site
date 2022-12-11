import Image from 'next/image';
import LogoNorwest from '../../../../public/images/logotypes/logo-norwest.png';
import LogoEntree from '../../../../public/images/logotypes/logo-entree-capital.png';
import LogoVertex from '../../../../public/images/logotypes/logo-vertex.png';

const LogoList = () => {
  const logos = [LogoNorwest, LogoEntree, LogoVertex];
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <h2 className="main-title text-center !mb-6 laptop:!mb-20 !text-4xl large:!text-[50px]">
          Backed by visionary global investors
        </h2>
        <div className="logotypes d-flex justify-evently !pb-12 desktop:!pb-[172px] border-b-[1px] border-dark-black-70">
          {logos.map((logo, index) => {
            return (
              <span className="px-[0px] tablet:px-12" key={index}>
                <Image src={logo} alt={''} />
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LogoList;
