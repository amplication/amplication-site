import Logo1 from '../../../public/images/tech/graphql.svg';
import Logo2 from '../../../public/images/tech/terraform.svg';
import Logo3 from '../../../public/images/tech/mongo.svg';
import Logo4 from '../../../public/images/tech/kafka.svg';
import Logo5 from '../../../public/images/tech/github.svg';
import Logo6 from '../../../public/images/tech/eslint.svg';
import Logo7 from '../../../public/images/tech/bitbucket.svg';

import Image from 'next/image';
import PropTypes from 'prop-types';

const TechSlider = ({ classes }) => {
  return (
    <>
      <div className="logotypes flex flex-wrap align-items-center">
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo1} alt="GraphQL" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo2} alt="Terraform" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo3} alt="mongoDB" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo4} alt="Kafka" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo5} alt="GitHub" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo6} alt="ESlint" />
        </div>
        <div className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]">
          <Image src={Logo7} alt="Bitbucket" />
        </div>
      </div>
    </>
  );
};

TechSlider.propTypes = {
  classes: PropTypes.string,
};

TechSlider.defaultProps = {
  classes: '',
};

export default TechSlider;
