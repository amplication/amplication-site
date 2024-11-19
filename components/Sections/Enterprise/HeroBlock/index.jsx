import Lottie from 'lottie-react';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';
import videoSrc from '../../../../public/animation/amplication-how-to.mp4';
import PageHero from '../../../Common/PageHero';

const HeroBlock = () => {
  return (
    <>
      <PageHero
        showTechStack={true}
        title={
          <div className="max-w-[480px] desktop:max-w-[680px]">
            Automate and Standardize Backend Development
          </div>
        }
        subTitle={null}
        subText={
          <>
            Quickly build, maintain, and scale backend services that embed your
            company’s best practices and standards. Avoid fragmented workflows
            and ensure your development teams follow the Golden Paths.
          </>
        }
        mainButton={{
          text: 'Free Trial',
          href: 'https://app.amplication.com',
          eventName: 'startNowClicked',
          eventParams: {
            buttonLocation: 'hero',
          },
        }}
        secondaryButton={{
          text: 'Book a Demo',
          href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
          eventName: 'bookDemoClicked',
          eventParams: {
            buttonLocation: 'hero',
          },
        }}
        imageNode={
          <video autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        }
      />
    </>
  );
};

export default HeroBlock;
