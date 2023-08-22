import Image from 'next/image';
import LogoNorwest from '../../../../public/images/logotypes/logo-norwest.png';
import LogoEntree from '../../../../public/images/logotypes/logo-entree-capital.png';
import LogoVertex from '../../../../public/images/logotypes/logo-vertex.png';

const LogoList = () => {
  const logos = [
    { logo: LogoNorwest, name: 'Norwest' },
    { logo: LogoVertex, name: 'Vertex Ventures' },
    { logo: LogoEntree, name: 'Entrée Capital' },
  ];
  return (
    <>
      <div className="d-flex align-items-center py-3 max-medium:flex-col">
        <h2 className="roadmap-heading m-0 pt-1">
          Backed by visionary global investors
        </h2>
        <div className="logotypes ml-auto w-full large:max-w-[46%] d-flex justify-evently align-items-center">
          {logos.map((logo, index) => {
            return (
              <span
                className="px-[0.5rem] tablet:px-6 medium:px-10 text-center w-[360px] tablet:w-auto"
                key={index}
              >
                <Image src={logo.logo} alt={`${logo.name} logo`} />
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LogoList;
