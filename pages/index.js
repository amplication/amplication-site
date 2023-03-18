import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';
import Facts from '../components/Sections/Enterprise/Facts';
import Testimonials from '../components/Sections/Enterprise/Testimonials';
import Features from '../components/Sections/MainPage/Features';
import GetList from '../components/Sections/MainPage/GetList';
import Tabs from '../components/Sections/MainPage/Tabs';
import Roadmap from '../components/Sections/MainPage/Roadmap';
import LogoList from '../components/Sections/About/LogoList';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Node.js App Development: Open Source Platform | Amplication"
        description="Amplication is the most flexible open-source platform for Node.js app development.
        We enable developers to auto-generate production-ready backend in minutes. Design modelsand roles,
         deploy your app, connect with REST or GraphQL API, sync with GitHub. You own the code."
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

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <HeroBlock />
        <Slider />
        <Testimonials />
        <Facts />
        <Features />
        <GetList />
        <Tabs />
        <Roadmap customClass="!bg-light-blue !py-24" />
        <LogoList />
      </main>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      paddingTopClasses="laptop:pt-[100px]"
    >
      {page}
    </MainLayout>
  );
};
export default Home;
