import PageHero from '../../Common/PageHero';
import Lottie from 'lottie-react';
import animationData from '../../../lottie/retail.json';

const RetailHero = () => {
  return (
    <>
      <PageHero
        title={
          "Amplication for Retail: Digital Solutions for Tomorrow's Retailers"
        }
        subTitle={''}
        subText={
          'Build tailor-made applications for your retail operations and leap ahead of the competition.'
        }
        mainButton={{
          text: 'Book a Demo',
          href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
          eventName: 'bookDemoClicked',
          eventParams: {
            buttonLocation: 'hero',
          },
        }}
        secondaryButton={{
          text: 'Try Free',
          href: 'https://app.amplication.com/login',
          eventName: 'startNowClicked',
          eventParams: {
            buttonLocation: 'hero',
          },
        }}
        imageNode={<Lottie animationData={animationData} loop={true} />}
      />
    </>
  );
};

export default RetailHero;
