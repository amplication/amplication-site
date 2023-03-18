import HeroBlock from '../components/Sections/Pricing/HeroBlock';
import CTA from '../components/Sections/Pricing/CTA';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import dynamic from 'next/dynamic';

export const PricingPlans = dynamic(
  () =>
    import('../components/Sections/Pricing/PricingPlans').then(
      mod => mod.PricingPlans
    ),
  {ssr: false}
);

const Pricing = () => {
  return (
    <>
      <NextSeo
        title="Most flexible backend developent platform | Pricing | Amplciation"
        description="Amplication is an open-source platform built by developers for developers. We provide forever-free community developer license alongside flexible enterprise plans"
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        <div className="pricing-page">
          {/*Hero Block*/}
          <HeroBlock />
          {/*Block with prices*/}
          <PricingPlans />
          {/*Pricing Footer*/}
          <CTA />
        </div>
      </main>
    </>
  );
};
Pricing.getLayout = function getLayout(page) {
  return <MainLayout hideFooterBanner>{page}</MainLayout>;
};
export default Pricing;
