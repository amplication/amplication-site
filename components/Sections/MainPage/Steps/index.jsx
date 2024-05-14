import ImageCodeOwnership from '../../../../public/images/product/image-code-ownership.png';
import ImageGitProviders from '../../../../public/images/product/image-git-providers.svg';
import ImagePlugins from '../../../../public/images/product/image-plugins.svg';
import ImageProductOverview from '../../../../public/images/product/product-overview.svg';
import WidePanelWithImage from '../../../Common/WidePanelWithImage';

const features = [
  {
    title: 'Describe your service and define data models',
    image: ImageProductOverview,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    fullWidth: true,
    primaryBtn: undefined,
    content:
      'Get APIs, databases, message brokers and more. Define tables and fields, relations, validation, import schemas from legacy database. Or configure your own architecture.',
  },
  {
    title: 'Extend and customize with plugins',
    image: ImagePlugins,
    secondaryBtn: {
      title: 'View Plugins',
      href: '/plugins',
    },
    primaryBtn: undefined,
    content:
      'From auth services, observability, Kubernetes to CI/CD solutions and cloud providers. Integrations made easy.',
  },
  {
    title: 'Generate all boilerplate and infrastructure code',
    image: ImageCodeOwnership,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      'Get fully editable .NET or Node.js source code.  You are in full control.',
  },
  {
    title: 'Freely modify and evolve the generated code',
    image: ImageGitProviders,
    secondaryBtn: {
      title: 'Talk to Expert',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    primaryBtn: undefined,
    content:
      'Continuously get Pull Requests with the  generated code to your Git repositories.',
  },
];

const Steps = () => {
  return (
    <>
      {features.map((feature, i) => (
        <WidePanelWithImage
          key={i}
          image={feature.image}
          title={feature.title}
          content={feature.content}
          primaryBtn={feature.primaryBtn}
          secondaryBtn={feature.secondaryBtn}
          customClasses={feature.customClasses}
          fullWidth={feature.fullWidth}
          alternate={i % 2 === 1}
        />
      ))}
    </>
  );
};

export default Steps;
