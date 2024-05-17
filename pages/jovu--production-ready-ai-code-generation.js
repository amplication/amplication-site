import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import CardsList from '../components/Common/CardsList';
import Slider from '../components/Sections/Enterprise/Slider';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';


import ImageHero from '../public/images/product/image-jovu-hero.svg';
import IconDev from '../public/images/icons/icon-development.svg';
import IconDeploy from '../public/images/icons/icon-deploy.svg';
import IconCloud from '../public/images/icons/icon-cloud.svg';

import ImageDescribe from '../public/images/product/image-jovu-describe.svg';
import ImageExtend from '../public/images/product/image-jovu-extend.svg';
import ImageOwn from '../public/images/product/image-jovu-own.png';
import ImageDeploy from '../public/images/product/image-jovu-deploy.svg';


import StartNow from '../components/Sections/Enterprise/StartNow';
import PageHero from '../components/Common/PageHero';
import Image from 'next/image';
import TestimonialsSlider from '../components/Sections/Enterprise/Testimonials/testimonials-slider';

const cards = [
  {
    title: 'Accelerate development',
    subTitle:
      "Transition from concept to deployment in minutes with production-ready code that’s built to scale.",
    icon: IconDev,
  },
  {
    title: 'Build with standards and best practices',
    subTitle:
      "Amplication’s AI delivers more than prototypes- get fully operational, robust backend services ready to go live.",
    icon: IconCloud,
  },
  {
    title: 'Boost efficiency and velocity',
    subTitle: "Streamline development workflows, reduce time, and optimize your resources. Do more with what you have with the power of AI.",
    icon: IconDeploy,
  },

];

const features = [

  {
    title: 'Describe your service',
    image: ImageDescribe,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/amplication-ai/',
    },
    primaryBtn: undefined,
    content:
      "Input your requirements and watch Jovu translate them into ready-to-use code components. Production-ready data models, APIs, authentication, authorization, event-driven architecture and everything else that is needed to get your service up and running."
  },
  {
    title: 'Customize, extend, integrate',
    image: ImageExtend,
    primaryBtn: {
      title: 'Book a Demo',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      "Add architecture components, integrations and extend with Amplication plugins. Jovu will provide smart recommendations to ensure you have scalable, reliable foundations for modern applications."
  },
  {
    title: 'Generate and own your code',
    image: ImageOwn,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Get all the code directly to you git repositories. Freely evolve and tailor the generated code to your unique business needs. Jovu keeps you in control."
  },
  {
    title: 'Deploy with confidence',
    image: ImageDeploy,
    primaryBtn: {
      title: 'Book a Demo',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      'From innovation to implementation, in 4 minutes. Jovu gets you AI-generated, production-ready, consistent, high-quality, predictable, validated .NET or Node.js code.From innovation to implementation, in 4 minutes. Jovu gets you AI-generated, production-ready, consistent, high-quality, predictable, validated .NET or Node.js code.',
  },


]

const JovuPage = () => {
  return (
    <>
      <NextSeo
        title="Generate production-ready code with Amplication AI | Amplication"
        description="Effortlessly build new services, extend your existing applications with Amplication AI. Go from idea to production in four minutes."
      />

      <main
        className="w-full font-poppins z-10 !mb-0  "
        id="apply"
      >
        <PageSection>
          <PageHero
            title={
              <>
                <span className="text-purple-bright">Jovu:</span> The Only Production-ready AI-powered Code Generation
              </>
            }
            subTitle={''}
            subText={
              'Effortlessly build new services, extend your existing applications with Amplication AI. Go from idea to production in four minutes.'
            }
            mainButton={{
              text: 'Book a Demo',
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              eventName: 'bookDemoClicked',
              eventParams: {
                buttonLocation: 'hero-jovu',
              },
            }}
            secondaryButton={{
              text: 'Try Free',
              href: 'https://app.amplication.com/login',
              eventName: 'startNowClicked',
              eventParams: {
                buttonLocation: 'hero-jovu',
              },
            }}
            imageNode={
              <Image src={ImageHero} alt={'Build API on existing Database'} />
            }
          />
        </PageSection>
        <PageSection alternate className={'py-5 laptop:py-12 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection>
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            AI-powered assistant that generates production-ready code, ensuring consistency, predictability, and adherence to the highest standards.
          </h2>
          <CardsList
            cards={cards}
            customClasses={'tablet:!grid-cols-1 laptop:!grid-cols-3'}
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
        <PageSection >
          <TestimonialsSlider useSlider={false} totalItems={3} wrapperClassName={"laptop:!grid-cols-3"} />
        </PageSection>
        <PageSection alternate>
          <StartNow
            title="Build faster, with no limits"
            description="Try Amplication Enterprise today and unlock the power of fast development cycles."
            linkPrimary={{
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              title: 'Talk to Expert',
            }}

          />
        </PageSection>
      </main >
    </>
  );
};
JovuPage.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default JovuPage;
