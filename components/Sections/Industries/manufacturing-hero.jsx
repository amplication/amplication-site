import PageHero from '../../Common/PageHero';
import Lottie from 'lottie-react';
import { data } from '../../../lottie/manufacturing';

const RetailHero = () => {
  return (
    <>
      <PageHero
        title={
          'Amplication for Manufacturing: Automate Your Path to Digital Transformation'
        }
        subTitle={
          'Automate, optimize, and scale your manufacturing operations with tailor-made digital solutions.'
        }
        subText={''}
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
        imageNode={<Lottie animationData={data} loop={true} />}
      />
    </>
  );
};

export default RetailHero;
