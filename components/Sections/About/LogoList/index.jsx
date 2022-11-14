import Image from 'next/image';
import LogoNorwest from "../../../../public/images/logotypes/logo-norwest.png";
import LogoEntree from "../../../../public/images/logotypes/logo-entree-capital.png";
import LogoVertex from "../../../../public/images/logotypes/logo-vertex.png";

const LogoList = () => {
  return (
      <>
        <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <h2 className="main-title text-center !mb-12 !text-[50px]">Backed by visionary global investors</h2>
          <div className="d-flex">
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <Image src={LogoNorwest} alt={''} />
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <Image src={LogoEntree} alt={''} />
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <Image src={LogoVertex} alt={''} />
            </div>
          </div>
        </section>
      </>
  );
};

export default LogoList;
