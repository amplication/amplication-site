import PageHero from '../../Common/PageHero';
import Lottie from 'lottie-react';
import { data } from '../../../lottie/healthcare';

const RetailHero = () => {
  return (
    <>
      <PageHero
        title={'Modernize Your Healthcare Management with Amplication'}
        subTitle={
          'Streamline, optimize, and boost your healthcare operations with Amplication. '
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
        imageNode={<Lottie animationData={data} loop={true} />}
      />
    </>
  );
};

export default RetailHero;
