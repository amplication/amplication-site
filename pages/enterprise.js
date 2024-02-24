import Features from '../components/Sections/Enterprise/Features';
import Hero from '../components/Sections/Enterprise/Hero';
import IconsGroup from '../components/Sections/Enterprise/IconsGroup';
import Slider from '../components/Sections/Enterprise/Slider';
import StartNow from '../components/Sections/Enterprise/StartNow';


import { NextSeo } from 'next-seo';
import PageSection from '../components/Common/PageSection';
import Soc2Banner from '../components/Common/SOC2';
import helpers from '../helpers';
import { MainLayout } from '../layouts';


const Enterprise = () => {
  return (
    <>
      <NextSeo
        title="Building Enterprise Ready Backend | Amplication"
        description="Amplication is the most flexible open-source backend development platform for Node.JS applications. Design models and roles, deploy your app, connect with REST or GraphQL API, sync with GitHub. Built for developers, by developers."
        canonical={helpers.getCanonical('enterprise')}
      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <Hero />
        <PageSection alternate className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>

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
      </main>
    </>
  );
};
Enterprise.getLayout = function getLayout(page) {
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
export default Enterprise;
