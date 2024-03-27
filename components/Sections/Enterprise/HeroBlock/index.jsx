import Lottie from 'lottie-react';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';
import videoSrc from '../../../../public/animation/amplication-how-to.mp4';
import VerticalPageHero from '../../../Common/PageHero/vertical-hero';

const HeroBlock = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  }, []);

  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'hero',
      },
    });
  }, []);
  return (
    <>
      <VerticalPageHero
        title={
          <>
            <span className="text-purple1">
              The Fastest Way in the World to
            </span>{' '}
            <span className="text-purple">Build Backend Services.</span>
          </>
        }
        subTitle={null}
        subText={
          <>
            Automatically generate backend services with full ownership, no
            vendor lock&#8209;in, and no blackboxing. Fully customizable and
            production-ready.
          </>
        }
        mainButton={{
          text: ' Start Free',
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
