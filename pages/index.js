import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HeroBlock from "../components/Sections/MainPage/HeroBlock";
import Features from "../components/Sections/MainPage/Features";
import Developers from "../components/Sections/MainPage/Developers";
import AboutUs from "../components/Sections/MainPage/AboutUs";
import GetList from "../components/Sections/MainPage/GetList";
import Steps from "../components/Sections/MainPage/Steps";
import Roadmap from "../components/Sections/MainPage/Roadmap";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Amplication - Generate Node.js apps, just code what matters"
        description="Amplication is an open‑source development tool. It helps you develop
          quality Node.js applications without spending time on repetitive
          coding tasks."
      />

      <div className="page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[143px] bg-purple-dark relative">
        <Header />

        <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
          {/*Hero Block*/}
          <HeroBlock />

          <div className="bg-gradient">
            {/*Features*/}
            <Features />

            {/*Developers*/}
            <Developers />

            {/*About Us*/}
            <AboutUs />

            {/*What do you get block*/}
            <GetList />
          </div>

          {/*Steps*/}
          <Steps />

          {/*Roadmap*/}
          <Roadmap />
        </main>

        <Footer />
        <Background />
      </div>
    </>
  );
};

export default Home;
