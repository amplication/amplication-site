import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HeroBlock from "../components/Sections/Pricing/HeroBlock";
import PricesTable from "../components/Sections/Pricing/PricesTable";
import CTA from "../components/Sections/Pricing/CTA";
import { NextSeo } from "next-seo";

const Pricing = () => {
  return (
    <>
      <NextSeo
        title="Most flexible backend developent platform | Pricing | Amplciation"
        description="Amplication is an open-source platform built by developers for developers. We provide forever-free community developer license alongside flexible enterprise plans"
      />

      <div className="page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[110px] bg-purple-dark relative">
        <Header />

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
        <Footer hideBanner/>
        <Background />
      </div>
    </>
  );
};

export default Pricing;
