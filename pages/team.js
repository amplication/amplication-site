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
        title="Amplication - Generate Node.js apps, just code what matters"
        description="Amplication is an open‑source development tool. It helps you develop
          quality Node.js applications without spending time on repetitive
          coding tasks."
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
