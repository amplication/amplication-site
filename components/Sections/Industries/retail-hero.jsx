import AppDashboard from '../../../public/images/enterprise/app-dashboard.svg';
import PageHero from '../../Common/PageHero';

const RetailHero = () => {
  return (
    <>
      <PageHero
        title={'Accelerate Your Business with Amplication Enterprise'}
        subTitle={
          'Automated, customizable solutions for faster application development'
        }
        subText={
          'Unleash the power of fast development cycles with Amplication Enterprise. Our secure, automated and customizable solutions give teams an edge when it comes to rapidly launching applications that meet any business requirements.'
        }
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
