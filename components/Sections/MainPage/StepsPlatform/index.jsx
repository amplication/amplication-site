import ImageCodeOwnership from '../../../../public/images/product/image-code-ownership.png';
import ImageGitProviders from '../../../../public/images/product/image-git-providers.svg';
import ImagePlugins from '../../../../public/images/product/image-plugins.svg';
import ImageProductOverview from '../../../../public/images/product/product-overview.svg';
import WidePanelWithImage from '../../../Common/WidePanelWithImage';

const features = [
  {
    title: 'Empower Your Platform Teams with Tailor-Made Backend Solutions',
    image: ImageProductOverview,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    fullWidth: true,
    primaryBtn: undefined,
    content:
      'Amplication helps platform teams to take control of backend infrastructure with tailor-made live templates, built around organizational standards and best practices, AI-powered code generation and centralized service catalog, that evolve with your organization.',
  },
  {
    title: 'Prepare with Live Templates ',
    image: ImagePlugins,
    secondaryBtn: {
      title: 'View Plugins',
      href: '/plugins',
    },
    primaryBtn: undefined,
    content:
      'Create your own live templates that embed your organization’s best practices and standards, to ensure consistency and compliance from the start. Developers can self-serve and follow clear Golden Paths, speeding up delivery without compromising on quality.',
  },
  {
    title: 'Build with AI-powered Automation',
    image: ImageCodeOwnership,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      'Generate microservices and backend applications in no time from live templates, including APIs, data models, DTOs and more. Our AI does the heavy lifting so your developers can focus on business logic that drives your company forward.',
  },
  {
    title: 'Maintain Continuously ',
    image: ImageGitProviders,
    secondaryBtn: {
      title: 'Talk to Expert',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    primaryBtn: undefined,
    content:
      'Keep your live applications always up-to-date with automated updates for packages, patches, and versioning. Minimize technical debt while maintaining the latest standards. No more maintenance of bespoke infrastructure code.',
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
