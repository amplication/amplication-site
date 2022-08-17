import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HeroBlock from "../components/Sections/Pricing/HeroBlock";
import PricesTable from "../components/Sections/Pricing/PricesTable";
import ContentBlock from "../components/Sections/Pricing/ContentBlock";
import { NextSeo } from "next-seo";

const Team = () => {
  const contentBlocks = [
    {
      title: "Hosting",
      blockClass: "page-3 bg-transparent",
      content:
        "Each user account gets a free sandbox deployment environment for\n" +
        "                every app built with Amplication. The app sandbox has limited\n" +
        "                resources and can reset at any time, please do not use it for\n" +
        "                anything else other than development and testing. Remember, you\n" +
        "                can always export your code or your Docker container and deploy\n" +
        "                it elsewhere for production purposes. In the future, we will\n" +
        "                offer paid hosting services.",
    },
    {
      title: "Building an open-source project?",
      blockClass: "page-4 bg-primary",
      content:
        "Let us know if there is anything we can support you with. We\n" +
        "                will do our best to help you improve your project for the\n" +
        "                community!",
    },
  ];

  return (
    <>
      <NextSeo
        title="Most flexible backend developent platform | Pricing | Amplciation"
        description="Amplication is an open-source platform built by developers for developers. We provide forever-free community developer license alongside flexible enterprise plans"
      />

      <div className="page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[110px] bg-purple-dark relative">
        <Header />

        <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
          <div className="bg-gradient pricing-page">
            {/*Hero Block*/}
            <HeroBlock />

            {/*Block with prices*/}
            <PricesTable />

            {/*Content Blocks*/}
            {contentBlocks.length > 0 &&
              contentBlocks.map((block, index) => {
                return (
                  <ContentBlock
                    key={index}
                    title={block.title}
                    blockClass={block.blockClass}
                    content={block.content}
                  />
                );
              })}
          </div>
        </main>

        <Footer />
        <Background />
      </div>
    </>
  );
};

export default Team;
