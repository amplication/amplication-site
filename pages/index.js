import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';
import Facts from '../components/Sections/Enterprise/Facts';
import Testimonials from '../components/Sections/Enterprise/Testimonials';
import Features from '../components/Sections/MainPage/Features';
import GetList from '../components/Sections/MainPage/GetList';
import Tabs from '../components/Sections/MainPage/Tabs';
import Roadmap from '../components/Sections/MainPage/Roadmap';
import LogoList from '../components/Sections/About/LogoList';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';

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
        <PageSection className={"page-welcome !pt-10 !pb-8 large:!py-[9vh] xlg:!py-[17vh]"}>
          <HeroBlock />
        </PageSection>
        <PageSection alternate className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection innerClassName={"flex-grow"} className={"!pt-5 !pb-4 laptop:!px-14 laptop:!pt-24 laptop:!pb-20"} >
          <Testimonials />
        </PageSection>
        <PageSection className={"!py-10"} alternate>
          <Facts />
        </PageSection>
        <PageSection className={"page-welcome-solution !py-20"} >
          <Features />
        </PageSection>
        <PageSection alternate className={"!py-20"} >
          <GetList />
        </PageSection>
        <PageSection className="page-steps !py-20" >
          <Tabs />
        </PageSection>
        <PageSection className={'page-roadmap !py-24'} alternate id="roadmap">
          <Roadmap />
        </PageSection>
        <PageSection >
          <LogoList />
        </PageSection>

      </main >
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
