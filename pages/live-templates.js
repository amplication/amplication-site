import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import CardsList from '../components/Common/CardsList';
import Slider from '../components/Sections/Enterprise/Slider';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';


import ImageHero from '../public/images/product/image-tech-debt.svg';

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
    title: 'Bring Your Own Flavor ',
    subTitle:
      "Create templates embedding your organization’s best practices and standards, ensuring every project starts on the right footing and remains aligned across its lifecycle. ",
    icon: IconDev,
  },
  {
    title: 'Golden Paths',
    subTitle:
      "Set the Golden Paths for your engineering teams to accelerate delivery, onboard new teammates faster via self-service, and prevent drift.",
    icon: IconCloud,
  },
  {
    title: 'Live Updates ',
    subTitle: "Updates or changes to a template are automatically reflected across the associated services, triggering pull requests with necessary code changes without manual intervention.",
    icon: IconDeploy,
  },

];

const features = [

  {
    title: 'Tailor-made Live Templates',
    image: ImageDescribe,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/platform-console/#platform-console-templates',
    },
    primaryBtn: undefined,
    content:
      "Live Templates serve as dynamic foundations for your backend services. Create templates that match your organization’s unique standards, best practices and tech."
  },
  {
    title: 'Dynamic, real-time updates',
    image: ImageExtend,
    primaryBtn: {
      title: 'Talk to Expert',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      "Modifications made to live templates can trigger immediate, automated updates to dependent services, reflecting new standards or improvements right away. This continuous synchronization reduces errors, technical debt and aligns every service with the latest organizational guidelines and technology shifts."
  },
  {
    title: 'Accelerate with self-serve ',
    image: ImageOwn,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Empower your developers with the ability to self-serve from a catalog of pre-approved templates. The Golden Paths defined within the templates guide development, ensuring high-quality outputs and adherence to best practices without slowing down innovation."
  },



]

const JovuPage = () => {
  return (
    <>
      <NextSeo
        title="Build & Update Backend Services in Real-Time | Amplication Live Templates"
        description="Discover Amplication's live templates, tailor-made to dynamically update your backend services with patches, versions, and new technologies. No more manual update of the infrastructure code."
      />

      <main
        className="w-full font-poppins z-10 !mb-0  "
        id="apply"
      >
        <PageSection>
          <PageHero
            title={
              <>
                Amplication&apos;s Live Templates: Keeping Services <span className="text-purple-bright">Always Up-to-Date</span>.
              </>
            }
            subTitle={''}
            subText={
              "Built and managed by platform engineering teams, live templates make sure your projects not only start right but also remain aligned with your company's standards without the need for manual maintenance of infrastructure code."
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
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            Build, adapt and evolve your backend services in real-time with Live Templates.
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

        <PageSection alternate>
          <StartNow
            title="Build smarter, better, faster"
            description="Discover how Amplication can help you build powerful, scalable, and secure applications tailored to your business needs."
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
