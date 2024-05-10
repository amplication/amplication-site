import Image from 'next/image';
import Hf10Image from '../../../../public/images/hacktoberfest/hacktoberfest-10.svg';
import ContentBox from '../../../Common/ContentBox';
import SplitSection from '../../../Common/SplitSection';

const BinaryStrip = () => {
  return (
    <div className="whitespace-nowrap my-[50px] text-dark-black-60 relative bg-purple-dark">
      01001010 01110101 01110011 01110100 00100000 01100011 01101111 01100100
      01100101 00100000 01110111 01101000 01100001 01110100 00100000 01101101
      01100001 01110100 01110100 01100101 01110010 01110011 00100001 00100000
      01001010 01110101 01110011 01110100 00100000 01100011 01101111 01100100
      01100101 00100000 01110111 01101000 01100001 01110100 00100000 01101101
      01100001 01110100 01110100 01100101 01110010 01110011 00100001 00100000
    </div>
  );
};

export default BinaryStrip;
