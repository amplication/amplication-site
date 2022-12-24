import {NextSeo} from 'next-seo';
import Testimonials from '../components/Common/Testimonials';
import LogoList from '../components/Sections/About/LogoList';
import StartNow from '../components/Sections/About/StartNow';
import EnterpriseFeatures from '../components/Sections/Enterprise/EnterpriseFeatures';
import Facts from '../components/Sections/Enterprise/Facts';
import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';
import Features from '../components/Sections/MainPage/Features';
import GetList from '../components/Sections/MainPage/GetList';
import Roadmap from '../components/Sections/MainPage/Roadmap';
import helpers from '../helpers';
import {MainLayout} from '../layouts';

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

      <main className="w-full font-poppins  mb-12 laptop:mb-[100px] amplication-base">
        {/*Hero Block*/}
        <HeroBlock />
        <Slider />
        <div className="bg-dark">
          <Testimonials />
        </div>
        <Facts />

        <div className="bg-gradient">
          {/*Features*/}
          <Features />

          {/*What do you get block*/}
          <GetList />
        </div>
        <EnterpriseFeatures />

        {/*Roadmap*/}
        <Roadmap />
        <div className="bg-light-blue">
          <LogoList />
        </div>
        <StartNow
          title="Build faster, with no limits"
          linkPrimary={{
            href: 'https://app.amplication.com/',
            title: 'Get started',
          }}
          linkOutline={{
            title: 'Contact us',
          }}
        />
      </main>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return (
    <MainLayout hideBackground={true} hideFooterBanner={true}>
      {page}
    </MainLayout>
  );
};
export default Home;
