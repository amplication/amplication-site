import HeroBlock from '../components/Sections/MainPage/HeroBlock';
import Features from '../components/Sections/MainPage/Features';
import Developers from '../components/Sections/MainPage/Developers';
import AboutUs from '../components/Sections/MainPage/AboutUs';
import GetList from '../components/Sections/MainPage/GetList';
import Steps from '../components/Sections/MainPage/Steps';
import Roadmap from '../components/Sections/MainPage/Roadmap';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Node.js App Development: Open Source Platform | Amplication"
        description="Amplication is the most flexible open-source platform for Node.js app development.
        We enable developers to auto-generate production-ready backend in minutes. Design modelsand roles,
         deploy your app, connect with REST or GraphQL API, sync with GitHub. You own the code."
        canonical={helpers.getCanonical('/')}
        openGraph={{
          type: 'website',
          images: [
            {
              url: 'https://user-images.githubusercontent.com/53312820/190913686-02c7deb1-da2f-41b8-aa31-065e00f6155c.png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        {/*Hero Block*/}
        <HeroBlock />

        <div className="bg-gradient">
          {/*Features*/}
          <Features />

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
  return (
    <MainLayout paddingTopClasses="laptop:pt-[143px]">
      {page}
    </MainLayout>
  );
};
export default Home;
