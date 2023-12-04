import HeroBlock from '../components/Sections/MainPage/HeroBlock';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import TechSlider from '../components/Common/TechSlider';
import PageSection from '../components/Common/PageSection';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';
import image1 from '../public/images/build-new-services/image1.svg';
import image2 from '../public/images/build-new-services/image2.svg';
import image3 from '../public/images/build-new-services/image3.svg';
import image4 from '../public/images/build-new-services/image4.svg';
import Features from '../components/Sections/MainPage/Features';
import GetList from '../components/Sections/MainPage/GetList';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Generate production-ready backend infrastructure | Amplication"
        description="Automatically generate backend services with the highest standards, consistency and scalability. Never waste time on boilerplate and repetitive coding again. No more copy+paste from old projects or legacy templates."
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
        </PageSection >
        <PageSection alternate >
          <TechSlider />
        </PageSection>

        <PageSection   >
          <WidePanelWithImage
            secondaryBtn={{
              href: 'https://app.amplication.com/',
              title: 'Try now',
            }}
            image={image1}
            title={
              'Generate production-ready backend infrastructure'
            }
          >

            <div className="py-1">
              Automatically generate backend services with the highest standards, consistency and scalability. Never waste time on boilerplate and repetitive coding again. No more copy+paste from old projects or legacy templates.
            </div>

          </WidePanelWithImage>
        </PageSection>


        <PageSection alternate >
          <WidePanelWithImage
            customClasses="flex-row-reverse"
            secondaryBtn={{
              href: 'https://app.amplication.com/',
              title: 'Try now',
            }}
            image={image2}
            title={
              'Focus on coding what matters- your business logic'
            }
          >

            <div className="py-1">
              Amplication generates in minutes high-quality customizable code for fully functioning backend. GraphQL & REST APIs, DB schema, monitoring, logging, configuration, CI, deployment, testing, dependencies, tracing, monorepo management and more. It’s up to you to configure how to take off.
            </div>

          </WidePanelWithImage>
        </PageSection>

        <PageSection   >
          <WidePanelWithImage
            secondaryBtn={{
              href: 'https://app.amplication.com/',
              title: 'Try now',
            }}
            image={image3}
            title={
              'Build any architecture, for any scale'
            }
          >

            <div className="py-1">
              Whereas it’s a single service that you’re building or a massive microservices solution- Amplication is designed for any scale. Ensure consistency across development teams, centralized management and alignment with the latest industry standards and best practices. No matter how complex your needs become.
            </div>

          </WidePanelWithImage>
        </PageSection>

        <PageSection alternate >
          <WidePanelWithImage
            customClasses="flex-row-reverse"
            secondaryBtn={{
              href: '/plugins',
              title: 'View Plugins',
            }}
            image={image4}
            title={
              'Leverage plugins for unlimited customization'
            }
          >

            <div className="py-1">
              Control the flavor of the generated code, including security, privacy, standards, and best practices, with Amplication plugins. Add advanced analytics, connect to CI/CD pipelines, integrate with third-party services, or optimize your deployment process. Our plugins are designed to cater to your specific needs. Create custom plugins to keep your organization&apos;s current conventions, standards, and best practices while enforcing usage across teams.
            </div>

          </WidePanelWithImage>
        </PageSection>

        <PageSection className={"page-welcome-solution !py-20"} >
          <Features />
        </PageSection>
        <PageSection alternate className={"!py-20"} >
          <GetList />
        </PageSection>


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
