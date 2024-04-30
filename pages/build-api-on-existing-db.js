import Hero from '../components/Sections/LowCode/Hero';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import CardsList from '../components/Common/CardsList';
import IconEvolution from '../public/images/low-code/icon-evolution.svg';
import IconFreedom from '../public/images/low-code/icon-operational-freedom.svg';
import IconRapid from '../public/images/low-code/icon-rapid.svg';
import Slider from '../components/Sections/Enterprise/Slider';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';

import ImageImport from '../public/images/product/image-import.png';
import ImageModernStack from '../public/images/product/image-modern-stack.png';
import ImagePlugins from '../public/images/product/image-plugins.png';
import ImageModernDev from '../public/images/product/image-modern-dev.png';
import ImageHero from '../public/images/product/image-db-import-hero.png';


import StartNow from '../components/Sections/Enterprise/StartNow';
import PageHero from '../components/Common/PageHero';
import Image from 'next/image';
import TestimonialsSlider from '../components/Sections/Enterprise/Testimonials/testimonials-slider';

const cards = [
  {
    title: 'Quick transition',
    subTitle:
      "Significantly cut down on development time, focus on innovation and enhancement rather than starting from scratch.",
    icon: IconRapid,
  },
  {
    title: 'Seamless integration',
    subTitle:
      "Maintain the integrity of your existing database structure, move to modern application architecture without disruption.",
    icon: IconEvolution,
  },
  {
    title: 'Improved efficiency',
    subTitle: "Eliminate the need for extensive resources investment in rebuilding your database for new applications and reduce overall project costs.",
    icon: IconFreedom,
  },

];

const features = [

  {
    title: 'Quick import',
    image: ImageImport,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Import your existing database schema directly into Amplication, without compromising on data integrity."
  },
  {
    title: 'Modern stack',
    image: ImageModernStack,
    primaryBtn: {
      title: 'Book a Demo',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      "Build modern services and APIs on top of your database in minutes."
  },
  {
    title: 'Seamless transition',
    image: ImagePlugins,
    secondaryBtn: {
      title: 'Try Free',
      href: 'https://app.amplication.com/',
    },
    primaryBtn: undefined,
    content:
      "Maintain your existing database while transitioning to a modern application architecture."
  },
  {
    title: 'No redundancy',
    image: ImageModernDev,
    primaryBtn: {
      title: 'Book a Demo',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    secondaryBtn: undefined,
    content:
      'Avoid the redundancy of recreating your database schema.',
  },


]

const ImportDBPage = () => {
  return (
    <>
      <NextSeo
        title="Accelerate Your Modernization Journey with Amplication DB Schema Import | Amplication"
        description="Streamline your transition to a modern, scalable application architecture."
      />

      <main
        className="w-full font-poppins z-10 !mb-0  "
        id="apply"
      >
        <PageSection>
          <PageHero
            title={
              <>
                Build Modern APIs{' '}
                on Top of Your Existing Database in Minutes
              </>
            }
            subTitle={''}
            subText={
              'Streamline your transition to a modern, scalable application architecture.'
            }
            mainButton={{
              text: 'Book a Demo',
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              eventName: 'bookDemoClicked',
              eventParams: {
                buttonLocation: 'hero-import-db',
              },
            }}
            secondaryButton={{
              text: 'Try Free',
              href: 'https://app.amplication.com/login',
              eventName: 'startNowClicked',
              eventParams: {
                buttonLocation: 'hero-import-db',
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
            Modernize your legacy systems without the hassle of remapping your entire database
          </h2>
          <CardsList
            cards={cards}
            title={'DB Schema Import Key Features'}
            customClasses={'tablet:!grid-cols-3'}
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
            title="Modernize Your Business"
            description="Designed for businesses looking to upgrade their legacy systems to modern, scalable applications"
            linkPrimary={{
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              title: 'Book a Demo',
            }}
            linkSecondary={{
              href: 'https://app.amplication.com/login',
              title: 'Try Free',
            }}
          />
        </PageSection>
      </main >
    </>
  );
};
ImportDBPage.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default ImportDBPage;
