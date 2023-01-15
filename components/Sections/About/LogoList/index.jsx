import Image from 'next/image';
import LogoNorwest from '../../../../public/images/logotypes/logo-norwest.png';
import LogoEntree from '../../../../public/images/logotypes/logo-entree-capital.png';
import LogoVertex from '../../../../public/images/logotypes/logo-vertex.png';

const LogoList = () => {
  const logos = [LogoNorwest, LogoEntree, LogoVertex];
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="d-flex align-items-center py-3 max-medium:flex-col">
          <h2 className="roadmap-heading m-0 pt-1">
            Backed by visionary global investors
          </h2>
          <div className="logotypes ml-auto w-full large:max-w-[46%] d-flex justify-evently align-items-center">
            {logos.map((logo, index) => {
              return (
                <span className="px-6 tablet:px-10" key={index}>
                  <Image src={logo} alt={''} />
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoList;
