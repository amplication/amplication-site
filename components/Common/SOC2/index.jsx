import PropTypes from 'prop-types';
import Image from 'next/image';
import soc2Logo from '../../../public/images/soc2.png';

const Soc2Banner = ({ title, subTitle }) => {
  const defaultTitle = (
    <>Secured and complaint, because your data&nbsp;matters</>
  );
  const defaultSubTitle =
    'Amplication is SOC-2 certified. We meet the highest standards for data security, availability, processing, integrity, confidentiality, and privacy.';

  return (
    <div className="d-flex align-items-center py-3 max-medium:flex-col max-medium:text-center">
      <div className="max-medium:pb-8">
        <h2 className="roadmap-heading m-0 pt-1">{title || defaultTitle}</h2>
        <div>{subTitle || defaultSubTitle}</div>
      </div>
      <div className="ml-auto w-full large:max-w-[35%] d-flex justify-center align-items-center">
        <Image src={soc2Logo} alt={'SOC2 Logo'} />
        <div className="text-center d-flex align-items-center flex-column pl-4">
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
