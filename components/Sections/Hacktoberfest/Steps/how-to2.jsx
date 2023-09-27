import Image from 'next/image';
import HowTo2Image from '../../../../public/images/hacktoberfest/how-to-2.svg';
import ContentBox from '../../../Common/ContentBox';
import SplitSection from '../../../Common/SplitSection';

const HowTo2 = () => {
  return (
    <SplitSection
      firstSectionNode={
        <>
          <svg
            className="absolute z-10 left-0"
            width="164"
            height="302"
            viewBox="0 0 164 302"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.65358 301.96V244.432L83.8351 153.04C92.9283 142.16 99.6928 132.096 104.128 122.848C108.786 113.6 111.115 103.536 111.115 92.656C111.115 80.688 108.453 71.44 103.13 64.912C98.0294 58.384 90.9322 55.12 81.839 55.12C71.8587 55.12 63.9852 58.792 58.2188 66.136C52.6742 73.208 49.9018 83.136 49.9018 95.92H0C0 76.336 3.32679 59.472 9.98037 45.328C16.8557 30.912 26.5034 19.76 38.9234 11.872C51.3434 3.98404 65.9813 0.0400391 82.8371 0.0400391C98.5838 0.0400391 112.224 3.71203 123.757 11.056C135.511 18.128 144.604 28.056 151.036 40.84C157.69 53.624 161.017 68.72 161.017 86.128C161.017 105.44 157.135 123.936 149.373 141.616C141.61 159.296 129.19 177.792 112.113 197.104L68.1992 246.88H163.678V301.96H6.65358Z"
              fill="#15192C"
            />
          </svg>

          <ContentBox
            title={<>Build a plugin</>}
            body={
              <>
                {' '}
                Contribute a plugin to Amplication and stand a chance to win
                exciting rewards based on a plugin ranking.
              </>
            }
            ctaLabel="Check plugin ideas"
            ctaUrl="https://github.com/amplication/amplication/issues/7027"
            className="pl-36 z-20"
          />
        </>
      }
      SecondSectionNode={
        <Image
          src={HowTo2Image}
          alt={'Solve open issues'}
          className="h-[350px]"
        />
      }
      reverse={true}
    />
  );
};

export default HowTo2;
