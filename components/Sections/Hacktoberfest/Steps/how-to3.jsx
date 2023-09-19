import Image from 'next/image';
import HowTo3Image from '../../../../public/images/hacktoberfest/how-to-3.svg';
import ContentBox from '../../../Common/ContentBox';
import SplitSection from '../../../Common/SplitSection';

const HowTo3 = () => {
  return (
    <SplitSection
      firstSectionNode={
        <>
          <svg
            className="absolute z-10 left-0"
            width="200"
            height="302"
            viewBox="0 0 200 302"
            fill="#22273C"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.552 301.96C79.152 301.96 61.472 298.56 46.512 291.76C31.824 284.688 20.4 274.76 12.24 261.976C4.08 248.92 0 233.688 0 216.28H61.2C61.2 227.16 64.464 235.728 70.992 241.984C77.792 247.968 87.312 250.96 99.552 250.96C112.064 250.96 121.584 247.968 128.112 241.984C134.64 236 137.904 227.432 137.904 216.28V191.8C137.904 180.648 134.504 172.08 127.704 166.096C121.176 159.84 111.792 156.712 99.552 156.712H64.464V104.08L124.44 51.04H14.28V0.0400391H186.864V52.672L99.552 129.784V104.896C130.288 104.896 154.496 112.648 172.176 128.152C190.128 143.656 199.104 164.736 199.104 191.392V216.28C199.104 233.688 195.024 248.92 186.864 261.976C178.976 274.76 167.552 284.688 152.592 291.76C137.632 298.56 119.952 301.96 99.552 301.96Z"
              fill="#22273C"
            />
          </svg>

          <ContentBox
            title={<>Build a web app</>}
            body={
              <>
                Build any web application using Amplication and any of your
                favorite tech stacks
              </>
            }
            ctaLabel="See issues"
            ctaUrl="http"
            className="pl-36 z-20"
          />
        </>
      }
      SecondSectionNode={
        <Image
          src={HowTo3Image}
          alt={'Build a web app'}
          className="h-[350px]"
        />
      }
      reverse={false}
    />
  );
};

export default HowTo3;
