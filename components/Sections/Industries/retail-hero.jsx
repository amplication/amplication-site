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
        subTitle={
          'Build tailor-made applications for your retail operations and leap ahead of the competition.'
        }
        subText={''}
        mainButton={{
          text: 'Book a Demo',
          href: '/contact-us',
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
