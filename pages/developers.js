import HeroBlock from '../components/Sections/MainPage/HeroBlock';
import Tabs from '../components/Sections/Enterprise/Tabs';
import Steps from '../components/Sections/MainPage/Steps';
import Testimonials from '../components/Sections/Enterprise/Testimonials';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';
import Slider from '../components/Sections/Enterprise/Slider';
import Facts from '../components/Sections/Enterprise/Facts';

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

      <main className="w-full font-poppins z-10 amplication-base">
        {/*Hero Block*/}
        <HeroBlock />
        <Slider />
        <Testimonials />
        <Facts />
        <Steps />
        <Tabs />
      </main>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      paddingTopClasses="laptop:pt-[112px]"
    >
      {page}
    </MainLayout>
  );
};
export default Home;
