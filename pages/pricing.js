import HeroBlock from '../components/Sections/Pricing/HeroBlock';
import CTA from '../components/Sections/Pricing/CTA';
import PricingFAQ from '../components/Sections/Pricing/PricingFAQ';
import { PromoBanner } from '../components/Sections/Pricing/PromoBanner';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import dynamic from 'next/dynamic';
import PageSection from '../components/Common/PageSection';
import { PricingLoader } from '../components/Sections/Pricing/PricingPlans/loader';

export const PricingPlans = dynamic(
  () =>
    import('../components/Sections/Pricing/PricingPlans').then(
      (mod) => mod.PricingPlans,
    ),
  {
    ssr: false,
    loading: () => (
      <PricingLoader />

    )
  },
);

const Pricing = () => {
  return (
    <>
      <NextSeo
        title="Most flexible backend developent platform | Pricing | Amplication"
        description="Amplication is an open-source platform built by developers for developers. We provide forever-free community developer license alongside flexible enterprise plans"
      />

      <main className="w-full font-poppins z-10">
        <div className="pricing-page">
          <HeroBlock />
          <PromoBanner />
          <PageSection addMargins className={"min-h-[400px]"}>
            <PricingPlans />
          </PageSection>
          <PageSection alternate>
            <PricingFAQ />
          </PageSection>
          <CTA />
        </div>
      </main>
    </>
  );
};
Pricing.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Pricing;
