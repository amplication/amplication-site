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
            The Only{' '}
            <span className="text-purple-bright">
              Production-Ready AI-Powered
            </span>{' '}
            Code Generation
          </div>
        }
        subTitle={null}
        subText={
          <>
            Build new services, extend existing applications or modernize legacy
            systems with Amplication AI. Go from idea to production in minutes,
            with code that is built to scale.
          </>
        }
        mainButton={{
          text: 'Start Free',
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
