import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import CardsList from '../components/Common/CardsList';
import Slider from '../components/Sections/Enterprise/Slider';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';


import ImageHero from '../public/images/product/image-tech-debt.svg';

import ImageTemplates from '../public/images/product/image-templates.svg';
import ImageCatalog from '../public/images/product/image-catalog.svg';
import IconDev from '../public/images/icons/icon-development.svg';
import IconDeploy from '../public/images/icons/icon-deploy.svg';
import IconCloud from '../public/images/icons/icon-cloud.svg';

import ImageDescribe from '../public/images/product/image-jovu-describe.svg';
import ImageExtend from '../public/images/product/image-jovu-extend.svg';
import ImageOwn from '../public/images/product/image-jovu-own.png';
import ImageTechDebtView from '../public/images/product/image-tech-debt-view.svg';


import StartNow from '../components/Sections/Enterprise/StartNow';
import PageHero from '../components/Common/PageHero';
import Image from 'next/image';
import TestimonialsSlider from '../components/Sections/Enterprise/Testimonials/testimonials-slider';

const cards = [
  {
    title: 'Accelerated time-to-code',
    subTitle:
      "Spin up new services in no time with automated scaffolding and AI-powered code generation.",
    icon: IconDev,
  },
  {
    title: 'Developer autonomy ',
    subTitle:
      "Set the Golden Paths for your engineering teams to accelerate delivery, onboard new teammates faster via self-service, and prevent drift.",
    icon: IconCloud,
  },
  {
    title: 'Increased efficiency',
    subTitle: "Automatically sync updates across projects and reduce tech debt. Your entire portfolio stays modern without manual intervention.",
    icon: IconDeploy,
  },

];

const mainFeature = {
  title: 'Direct tools for direct results: scaffolding, Golden Paths, standardization, self-service, and maintenance- simplified.',
  secondaryBtn: undefined,
  primaryBtn: undefined,
  content:
    "Amplication equips platform teams with straightforward, powerful tools to speed up development, standardize processes, and maintain services up-to-date, all while reducing cognitive load and technical debt. "
}

const features = [

  {
    title: 'Efficient scaffolding',
    image: ImageTemplates,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/platform-console/#platform-console-templates',
    },
    primaryBtn: undefined,
    content:
      "Speed up your way to production with auto- generation of all the infrastructure code. Create live templates, with your standards and best practices built-in, that handle the initial heavy lifting, ensuring a consistent start for every project."
  },
  {
    title: 'Golden Paths ',
    image: ImageExtend,
    primaryBtn: {
      title: 'Talk to Expert',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      "Define clear, optimized paths that standardize development processes, making it easier to onboard new engineers and accelerate project timelines. Ensure every developer follows the same set of best practices, reducing errors and aligning outputs."
  },
  {
    title: 'Self-serve developer tooling',
    image: ImageCatalog,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Equip developers with comprehensive service catalog, a rich library of pre-approved templates and components to chose from, reducing dependencies between the teams and boosting efficiency. "
  },
  {
    title: 'Reduced technical debt',
    image: ImageTechDebtView,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Automatically update your live templates and applications to reflect the latest organizational standards. Reduce the time and resources spent on manual updates, allowing your team to focus on innovation."
  },



]

const PlatformEngineeringPage = () => {
  return (
    <>
      <NextSeo
        title="Boost Your Platform Engineering with Amplication"
        description="Empower devs to build better products faster. Streamline workflows and improve efficiency, simplifying the complexities of modern software development."
      />

      <main
        className="w-full font-poppins z-10 !mb-0  "
        id="apply"
      >
        <PageSection>
          <PageHero
            title={
              <>
                Boost Your Platform Engineering with Amplication
              </>
            }
            subTitle={''}
            subText={
              "Empower devs to build better products faster. Streamline workflows and improve efficiency, simplifying the complexities of modern software development."
            }
            mainButton={{
              text: 'Book a Demo',
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              eventName: 'bookDemoClicked',
              eventParams: {
                buttonLocation: 'hero-live-templates',
              },
            }}
            secondaryButton={{
              text: 'Free Trial',
              href: 'https://app.amplication.com/login',
              eventName: 'startNowClicked',
              eventParams: {
                buttonLocation: 'hero-live-templates',
              },
            }}
            imageNode={
              <Image src={ImageHero} alt={"Amplication's Live Templates"} />
            }
          />
        </PageSection>
        <PageSection alternate className={'py-5 laptop:py-12 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection>
          <WidePanelWithImage
            image={mainFeature.image}
            title={mainFeature.title}
            content={mainFeature.content}
            primaryBtn={mainFeature.primaryBtn}
            secondaryBtn={mainFeature.secondaryBtn}
            customClasses={mainFeature.customClasses}
            alternate={false}
            fullWidth={true}
          />

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

        <PageSection alternate>
          <StartNow
            title="Build smarter, better, faster"
            description="Discover how Amplication can help you empower your developers to build better products, faster. "
            linkPrimary={{
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              title: 'Get a Demo',
            }}
            linkSecondary={{
              href: 'https://app.amplication.com/',
              title: 'Try Free',
            }}

          />
        </PageSection>

      </main >
    </>
  );
};
PlatformEngineeringPage.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default PlatformEngineeringPage;
