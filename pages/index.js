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
import Layout from "../layouts";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Node.js App Development: Open Source Platform | Amplication"
        description="Amplication is the most flexible open-source platform for Node.js app development. 
        We enable developers to auto-generate production-ready backend in minutes. Design modelsand roles,
         deploy your app, connect with REST or GraphQL API, sync with GitHub. You own the code."
      />

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
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
