import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HeroBlock from "../components/Sections/Team/HeroBlock";
import TeamBlock from "../components/Sections/Team/TeamBlock";
import { NextSeo } from "next-seo";

const Team = () => {
  return (
    <>
      <NextSeo
        title="Meet the Team | Amplication"
        description="Meet the team behind Amplication! The open-source development tool that allows you to build production-ready Node.js applications in minutes.  Click here to learn more."
      />

      <div className="page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[110px] bg-purple-dark relative">
        <Header />

        <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base circles-bg">
          {/*Hero Block*/}
          <HeroBlock />

          {/*Team members*/}
          <TeamBlock />
        </main>

        <Footer />
        <Background />
      </div>
    </>
  );
};

export default Team;
