import AppDashboard from '../../../public/images/enterprise/app-dashboard.svg';
import PageHero from '../../Common/PageHero';

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
        image={{
          src: AppDashboard,
          alt: 'Amplication platform',
        }}
      />
    </>
  );
};

export default RetailHero;
