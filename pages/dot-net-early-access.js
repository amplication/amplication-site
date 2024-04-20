import PageSection from '../components/Common/PageSection';
import Soc2Banner from '../components/Common/SOC2';
import Hero from '../components/Sections/DotNetEarlyAccess/Hero';

import { NextSeo } from 'next-seo';
import Features from '../components/Sections/Enterprise/Features';
import IconsGroup from '../components/Sections/Enterprise/IconsGroup';
import Slider from '../components/Sections/Enterprise/Slider';
import StartNow from '../components/Sections/Enterprise/StartNow';
import { MainLayout } from '../layouts';


const DotNetEarlyAccess = () => {
  return (
    <>
      <NextSeo
        title="Unlock Next-Level .NET Backend Development | Amplication"
        description="Join our exclusive early-access program for production-ready services in .NET"
      />

      <main
        className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] "
        id="apply"
      >
        <PageSection>
          <Hero />
        </PageSection>

        <div className="amplication-base">
          <PageSection alternate className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
            <Slider />
          </PageSection>
          <section className="start-alternate-colors-based-on-nth-child p-0" />
          <Features />
          <StartNow
            title="Supercharge Your Business Today"
            description="Discover how Amplication Enterprise can help you build powerful, scalable, and secure applications tailored to your business needs."
            linkPrimary={{
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              title: 'Book a Demo',
            }}
          />
          <IconsGroup />
          <PageSection >
            <Soc2Banner title={"Enterprise-grade compliance"} subTitle={"We strive to provide you with a secure environment where you can confidently build and manage your applications. Amplication meets rigorous standards for data security, availability, processing, integrity, confidentiality, and privacy. We are SOC-2 certified and continuously monitor and improve our data security measures."} />
          </PageSection>
        </div>
      </main>
    </>
  );
};
DotNetEarlyAccess.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
      hideTopBar={true}
    >
      {page}
    </MainLayout>
  );
};
export default DotNetEarlyAccess;
