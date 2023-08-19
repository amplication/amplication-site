import Logo1 from '../../../../public/images/logotypes/logo-1.svg';
import Logo2 from '../../../../public/images/logotypes/logo-2.svg';
import Logo3 from '../../../../public/images/logotypes/logo-3.svg';
import Logo4 from '../../../../public/images/logotypes/logo-4.svg';
import Logo5 from '../../../../public/images/logotypes/logo-5.svg';
import Logo6 from '../../../../public/images/logotypes/logo-6.svg';
import Logo7 from '../../../../public/images/logotypes/logo-7.svg';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Slider = ({ classes }) => {
  return (
    <>
      <h2 className="roadmap-heading tablet:text-center">
        Empowering developers from leading companies
      </h2>
      <div className="logotypes mt-6 flex flex-wrap align-items-center">
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo1} alt="pull request" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo2} alt="pull request" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo3} alt="pull request" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo4} alt="pull request" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo5} alt="pull request" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo6} alt="pull request" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo7} alt="pull request" />
        </div>
      </div>
    </>
  );
};

Slider.propTypes = {
  classes: PropTypes.string,
};

Slider.defaultProps = {
  classes: '',
};

export default Slider;
