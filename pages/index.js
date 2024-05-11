import { NextSeo } from 'next-seo';
import PageSection from '../components/Common/PageSection';
import Soc2Banner from '../components/Common/SOC2';
import Facts from '../components/Sections/Enterprise/Facts';
import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';
import GetList from '../components/Sections/MainPage/GetList';
import { MainLayout } from '../layouts';

import TestimonialsSlider from '../components/Sections/Enterprise/Testimonials/testimonials-slider';
import Steps from '../components/Sections/MainPage/Steps';

const Home = () => {
  return (
    <>
      <NextSeo
        title=".NET and Node.js App Development: Open Source Platform | Amplication"
        description="Amplication is the most flexible open-source platform for .NET and Node.js app development.
        We enable developers to auto-generate production-ready backend in minutes. Design models and roles,
         deploy your app, connect with REST or GraphQL API, sync with Git. You own the code."
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

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] ">
        <PageSection >
          <HeroBlock />
        </PageSection>
        <PageSection light className={'py-5'} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection className={"py-10"} alternate>
          <Facts />
        </PageSection>
        <PageSection className={'py-5'} >
          <Steps />
        </PageSection>
        <PageSection  >
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            What users are saying about Amplication?
          </h2>
          <TestimonialsSlider useSlider={false} totalItems={3} wrapperClassName={"laptop:!grid-cols-3"} />
        </PageSection>
        <PageSection alternate className={"!py-20"} >
          <GetList />
        </PageSection>
        <PageSection >
          <Soc2Banner />
        </PageSection>
      </main >
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
