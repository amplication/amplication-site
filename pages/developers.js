import HeroBlock from '../components/Sections/MainPage/HeroBlock';
import Tabs from '../components/Sections/Enterprise/Tabs';
import Steps from '../components/Sections/MainPage/Steps';
import Testimonials from '../components/Sections/Enterprise/Testimonials';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import Slider from '../components/Sections/Enterprise/Slider';
import Facts from '../components/Sections/Enterprise/Facts';
import PageSection from '../components/Common/PageSection';
import Features from '../components/Sections/MainPage/Features';

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

      <main className="w-full font-poppins z-10 amplication-base">
        <PageSection className={"page-welcome !pt-10 !pb-8 large:!py-[9vh] xlg:!py-[17vh]"} >
          <HeroBlock />
        </PageSection>
        <PageSection className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection alternate className={"page-welcome-solution !py-20"} >
          <Features />
        </PageSection>
        <PageSection innerClassName={"flex-grow"} className={"!pt-5 !pb-4 laptop:!px-14 laptop:!pt-24 laptop:!pb-20"} >
          <Testimonials />
        </PageSection>
        <PageSection className={"!py-10"} alternate>
          <Facts />
        </PageSection>
        <PageSection className="page-steps !py-20" >
          <Tabs />
        </PageSection>
      </main>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return (
    <MainLayout
      paddingTopClasses="laptop:pt-[100px]"
    >
      {page}
    </MainLayout>
  );
};
export default Home;
