import Hero from '../components/Sections/LowCode/Hero';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import CardsList from '../components/Common/CardsList';
import IconCustomization from '../public/images/low-code/icon-customization.svg';
import IconEvolution from '../public/images/low-code/icon-evolution.svg';
import IconFreedom from '../public/images/low-code/icon-operational-freedom.svg';
import IconRapid from '../public/images/low-code/icon-rapid.svg';
import Slider from '../components/Sections/Enterprise/Slider';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';
import ImageModernDev from '../public/images/low-code/image-modern-dev.png';
import ImageCode from '../public/images/low-code/image-code.png';
import ImageFullCode from '../public/images/low-code/image-full-code.png';
import ImageForDevelopers from '../public/images/low-code/image-for-developers.png';
import ImageIntegration from '../public/images/low-code/image-integration.png';
import ImagePlugins from '../public/images/low-code/image-plugins.png';
import StartNow from '../components/Sections/About/StartNow';

const cards = [
  {
    title: 'Rapid development',
    subTitle:
      "Significantly reduce development time with Amplication's efficient low-code approach, enabling faster delivery of high-quality applications.",
    icon: IconRapid,
  },
  {
    title: 'Code evolution',
    subTitle:
      "Generate, evolve, and maintain code to suit your unique requirements, with extensive capabilities and plugins for comprehensive project management.",
    icon: IconEvolution,
  },
  {
    title: 'Operational freedom',
    subTitle: "Break free from vendor lock-ins. Enjoy complete independence and full control over your code and data. Choose how and where your applications are developed, deployed, and maintained.",
    icon: IconFreedom,
  },
  {
    title: 'Enhanced customization',
    subTitle:
      "Tailor every aspect of your project with Amplication's extensive customization options, ensuring your applications perfectly align with your vision and requirements.",
    icon: IconCustomization,
  },

];

const features = [

  {
    title: 'Modern development',
    image: ImageModernDev,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Designed for today's technological demands, ensuring your workflow is efficient and up-to-date. Say goodbye to outdated tools and cumbersome processes."
  },
  {
    title: 'For developers, by developers',
    image: ImageForDevelopers,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Created by experienced professionals, who know what it takes to deliver high-quality software. Amplication addresses the specific needs of developers, offering a user-friendly interface and comprehensive tools."
  },
  {
    title: 'Seamless integration',
    image: ImageIntegration,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Amplication fits perfectly into your existing development ecosystem, supporting a wide range of IDEs, Git providers, and other tools, facilitating a smooth transition and integration. You can stay focused on what you do best: coding."
  },
  {
    title: 'Full code and data control',
    image: ImageFullCode,
    primaryBtn: {
      title: 'Book a Demo',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      'Unlike other platforms that lock you into proprietary systems, Amplication offers complete independence. Amplication enables you the freedom to innovate on your terms, so you never tied down to a single vendor.',
  },
  {
    title: 'Beyond black-box solution',
    image: ImageCode,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Amplication breaks the mold of conventional low-code platforms. Instead of limiting you to a set framework, we provide the source code as a starting point for your project, which you can then tailor to fit your exact requirements. Our platform generates code not only to kickstart your projects but also to evolve and maintain them."
  },
  {
    title: 'Wide range of capabilities and plugins',
    image: ImagePlugins,
    secondaryBtn: {
      title: 'Plugins Catalog',
      href: '/plugins',
    },
    primaryBtn: undefined,
    content:
      "From managing data models to creating custom APIs, Amplication supports a vast array of development activities, making it easier for you to build comprehensive, robust applications."
  },

]

const LowCode = () => {
  return (
    <>
      <NextSeo
        title="Enterprise Low-Code Platform For Professional Developers | Amplication"
        description="Build any application faster, without sacrificing control and flexibility."
      />

      <main
        className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] "
        id="apply"
      >
        <PageSection>
          <Hero />
        </PageSection>
        <PageSection alternate className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection>
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            For developers seeking flexibility, deep customization, and the freedom to innovate with no limits.
          </h2>
          <CardsList
            cards={cards}
            title={'DB Schema Import Key Features'}
            customClasses={'!bg-transparent'}
          />
          <div className="p-4">
            {features.map((feature, i) =>
            (
              <WidePanelWithImage
                key={i}
                image={feature.image}
                title={feature.title}
                content={feature.content}
                primaryBtn={feature.primaryBtn}
                secondaryBtn={feature.secondaryBtn}
                customClasses={feature.customClasses}
                alternate={i % 2 === 1}
              />
            )
            )}
          </div>




        </PageSection>
        <PageSection alternate>
          <div className='amplication-base'>
            <StartNow />
          </div>
        </PageSection>




      </main >
    </>
  );
};
LowCode.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default LowCode;
