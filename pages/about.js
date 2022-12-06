import HeroBlock from '../components/Sections/About/HeroBlock';
import Steps from '../components/Sections/About/Steps';
import LowCode from '../components/Sections/About/LowCode';
import LogoList from '../components/Sections/About/LogoList';
import UsersList from '../components/Sections/About/UsersList';
import StartNow from '../components/Sections/About/StartNow';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';

const About = () => {
  return (
    <>
      <NextSeo
        title="About Us | Amplication"
        description="Amplication is the most flexible open-source platform for Node.js app development.
        We enable developers to auto-generate production-ready backend in minutes. Design modelsand roles,
         deploy your app, connect with REST or GraphQL API, sync with GitHub. You own the code."
        noindex={true}
        nofollow={true}
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
      <main className="w-full font-poppins z-10 mb-12 laptop:mb-0 amplication-base">
        <HeroBlock />
        <div className="bg-gradient">
          <LogoList />
          <UsersList />
          <Steps />
          {/*<LowCode />*/}
          {/*<StartNow*/}
          {/*  linkPrimary={{*/}
          {/*    href: 'https://app.amplication.com/',*/}
          {/*    title: 'Get started',*/}
          {/*  }}*/}
          {/*  linkSecondary={{*/}
          {/*    title: 'Join Community',*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
      </main>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return (
    <MainLayout
      paddingTopClasses="laptop:pt-[143px]"
      footerClass="bg-light-blue"
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};

export default About;
