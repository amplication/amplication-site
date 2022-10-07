import HeroBlock from "../components/Sections/Pricing/HeroBlock";
import PricesTable from "../components/Sections/Pricing/PricesTable";
import CTA from "../components/Sections/Pricing/CTA";
import { NextSeo } from "next-seo";
import Layout from "../layouts";

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
          <PricesTable />

          {/*Pricing Footer*/}
          <CTA />
        </div>
      </main>
    </>
  );
};
Pricing.getLayout = function getLayout(page) {
  return <Layout hideFooterBanner>{page}</Layout>;
};
export default Pricing;
