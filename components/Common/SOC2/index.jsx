import PropTypes from 'prop-types';
import Image from 'next/image';
import soc2Logo from '../../../public/images/soc2.png';

const Soc2Banner = ({ title, subTitle }) => {
  const defaultTitle = (
    <>Secured and compliant, because your data&nbsp;matters</>
  );
  const defaultSubTitle =
    'Amplication is SOC-2 certified. We meet the highest standards for data security, availability, processing, integrity, confidentiality, and privacy.';

  return (
    <div className="flex items-center py-12 flex-col text-center justify-around desktop:flex-row desktop:text-left gap-12">
      <div className=" max-w-[800px]">
        <h2 className="mx-auto text-3xl !font-semibold ">
          {title || defaultTitle}
        </h2>
        <div>{subTitle || defaultSubTitle}</div>
      </div>
      <div className=" flex justify-center items-center">
        <Image src={soc2Logo} alt={'SOC2 Logo'} />
        <div className="text-center flex items-center flex-col pl-4">
          <span className="text-[32px] !font-semibold leading-[48px] whitespace-nowrap">
            SOC 2 Type II
          </span>
          <span className="text-[24px] leading-[36px] border-t-1 font-normal tracking-widest">
            CERTIFIED
          </span>
        </div>
      </div>
    </div>
  );
};

Soc2Banner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

Soc2Banner.defaultProps = {
  title: undefined,
  subTitle: undefined,
};

export default Soc2Banner;
