import Lottie from 'lottie-react';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';
import videoSrc from '../../../../public/animation/amplication-how-to.mp4';
import PageHero from '../../../Common/PageHero';

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
      <PageHero
        title={
          <>
            Generate Production&#8209;Ready <br /> Backend Services.
          </>
        }
        subTitle={'Reliably. Securely. Consistently.'}
        subText={`Automatically generate backend services with the highest
        standards, consistency and scalability. Accelerate your
        development 20X. Never waste time on boilerplate and
        repetitive coding again.`}
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
