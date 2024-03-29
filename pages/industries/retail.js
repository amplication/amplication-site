import Hero from '../../components/Sections/Industries/retail-hero';
import IconsGroup from '../../components/Sections/Enterprise/IconsGroup';
import Slider from '../../components/Sections/Enterprise/Slider';
import StartNow from '../../components/Sections/Enterprise/StartNow';

import { NextSeo } from 'next-seo';
import PageSection from '../../components/Common/PageSection';
import Soc2Banner from '../../components/Common/SOC2';
import { MainLayout } from '../../layouts';


const Retail = () => {
  return (
    <>
      <NextSeo
        title="Modernize retail experiences with Amplication | Amplication"
        description="Amplication helps retails modernize faster."

      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] ">
        <PageSection >
          <Hero />
        </PageSection>
        <PageSection alternate className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>


        <StartNow
          title="Supercharge Your Business Today"
          description="Discover how Amplication Enterprise can help you build powerful, scalable, and secure applications tailored to your business needs."
          linkPrimary={{
            href: '/contact-us',
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
Retail.getLayout = function getLayout(page) {
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
export default Retail;
