import Hero from '../components/Sections/Modernization/Hero';
import Slider from '../components/Sections/Enterprise/Slider';
import StartNow from '../components/Sections/Enterprise/StartNow';
import Values from '../components/Sections/Modernization/ModernizationValues';
import Values2 from '../components/Sections/Modernization/ModernizationValues2';
import HowItWorks from '../components/Sections/Modernization/HowItWorks';
import GetList from '../components/Sections/MainPage/GetList';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import helpers from '../helpers';
import PageSection from '../components/Common/PageSection';


const ApplicationModernization = () => {
  return (
    <>
      <NextSeo
        title="Modernize, Transform and Migrate Legacy Systems | Amplication"
        description="Empower your business with modern applications. Streamline and revolutionize your development process."
        canonical={helpers.getCanonical('enterprise')}
      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <Hero />
        <PageSection alternate className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>

        <PageSection  >
          <Values />
        </PageSection>
        <PageSection alternate>
          <Values2 />
        </PageSection>
        <PageSection  >
          <HowItWorks />
        </PageSection>
        <PageSection alternate className={"!py-20"} >
          <GetList />
        </PageSection>

        <StartNow
          title="Supercharge Your Business Today"
          description="Discover how Amplication Enterprise can help you build powerful, scalable, and secure applications tailored to your business needs."
          linkPrimary={{
            href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
            title: 'Book a Demo',
          }}
        />

      </main>
    </>
  );
};
ApplicationModernization.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default ApplicationModernization;
