import Image from 'next/image';
import Feature1 from '../../../../public/images/modernization/faster.svg';
import Feature2 from '../../../../public/images/modernization/save-cost.svg';
import Feature3 from '../../../../public/images/modernization/flexible.svg';
import DescriptionStripe from '../../../Common/DescriptionStripe';

const items = [
  {
    image: Feature1,
    title: 'Modernize faster',
    content:
      'Accelerate your transition from legacy to modern systems. Amplication automates the generation of secure, consistent, and scalable backend services, multiplying your development speed by 20X.',
  },
  {
    image: Feature2,
    title: 'Focus on business, not integrations',
    content:
      "Easily integrate with existing systems, ensuring a unified ecosystem for your entire development process. Amplication enhances your team's productivity, while allowing creation of custom code with familiar tools.",
  },
  {
    image: Feature3,
    title: 'Scalability and flexibility',
    content:
      "Ensure your systems scale to support growing demand. Our platform supports any architecture and is built to scale with your organization's needs.",
  },
];
const ModernizationValues = () => {
  return <DescriptionStripe items={items} />;
};

export default ModernizationValues;
