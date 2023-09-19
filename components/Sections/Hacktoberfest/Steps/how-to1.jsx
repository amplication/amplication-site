import Image from 'next/image';
import HowTo1Image from '../../../../public/images/hacktoberfest/how-to-1.svg';
import ContentBox from '../../../Common/ContentBox';
import SplitSection from '../../../Common/SplitSection';

const HowTo1 = () => {
  return (
    <SplitSection
      firstSectionNode={
        <>
          <svg
            className="absolute z-10 left-0"
            width="197"
            height="298"
            viewBox="0 0 197 298"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.816002 297.92V244.88H75.888V55.9761L0 112.28V49.0401L69.768 0.0800781H137.088V244.88H196.656V297.92H0.816002Z"
              fill="#22273C"
            />
          </svg>

          <ContentBox
            title={<>Build a plugin</>}
            body={<>Contribute a plugin to Amplication</>}
            ctaLabel="Check plugin ideas"
            ctaUrl="http"
            className="pl-36 z-20"
          />
        </>
      }
      SecondSectionNode={
        <Image src={HowTo1Image} alt={'Build a plugin'} className="h-[350px]" />
      }
      reverse={false}
    />
  );
};

export default HowTo1;
