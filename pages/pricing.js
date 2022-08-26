import Header from "../components/Header";
import Footer from "../components/Sections/Pricing/PricingFooter";
import Background from "../components/Background";
import HeroBlock from "../components/Sections/Pricing/HeroBlock";
import TextBlock from "../components/Sections/Pricing/TextBlock";
import PricesTable from "../components/Sections/Pricing/PricesTable";
import ContentBlock from "../components/Sections/Pricing/ContentBlock";
import { NextSeo } from "next-seo";
import CallBlock from "../components/Sections/Pricing/CallBlock"
import FeatureItem from "../components/Sections/Pricing/CallBlock/index.jsx"

const Team = () => {


  return (
    <>
      <NextSeo
        title="Amplication - Generate Node.js apps, just code what matters"
        description="Amplication is an open‑source development tool. It helps you develop
          quality Node.js applications without spending time on repetitive
          coding tasks."
      />

      <div className="page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[110px] bg-purple-dark relative">
        <Header />

        <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
          <div className="pricing-page">
            {/*Hero Block*/}
            {/* <HeroBlock /> */}

            {/*Block with prices*/}
            <PricesTable />
            {/* <Background /> */}
            <TextBlock />
            <CallBlock />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Team;
