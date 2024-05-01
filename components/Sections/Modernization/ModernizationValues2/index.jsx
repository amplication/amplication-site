import Feature2 from '../../../../public/images/modernization/graph.svg';
import Feature1 from '../../../../public/images/modernization/production-ready.svg';
import DescriptionStripe from '../../../Common/DescriptionStripe';

const items = [
  {
    image: Feature1,
    title: 'Enterprise-grade security',
    content:
      'Amplication prioritizes the security and compliance of your digital assets throughout the modernization process. We are SOC2 certified.',
  },
  {
    image: Feature2,
    title: 'Build for success',
    content:
      'Deliver robust and future-proof applications. Amplication-generated code is error-free, based on best practices and built-in standards, ensuring optimal performance.',
  },
];

const ctaItem = {
  title: 'Revolutionize Your Legacy Services Today',
  content:
    'Learn how Amplication can help modernize your legacy systems and fast-track your digital transformation.',
  buttonTitle: 'Book a Demo',
  buttonLink: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
  buttonEvent: {
    action: 'bookDemoClicked',
    params: {
      buttonLocation: 'application-modernization',
    },
  },
};

const ModernizationValues2 = () => {
  return <DescriptionStripe items={items} ctaItem={ctaItem} />;
};

export default ModernizationValues2;
