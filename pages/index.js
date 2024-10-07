import { NextSeo } from 'next-seo';
import PageSection from '../components/Common/PageSection';
import Soc2Banner from '../components/Common/SOC2';
import Facts from '../components/Sections/Enterprise/Facts';
import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';
import GetList from '../components/Sections/MainPage/GetList';
import { MainLayout } from '../layouts';
import CardsList from '../components/Common/CardsList';
import IconDev from '../public/images/icons/icon-development.svg';
import IconDeploy from '../public/images/icons/icon-deploy.svg';
import IconCloud from '../public/images/icons/icon-cloud.svg';
import IconCollab from '../public/images/icons/icon-10.svg';



import TestimonialsSlider from '../components/Sections/Enterprise/Testimonials/testimonials-slider';
import Steps from '../components/Sections/MainPage/StepsPlatform';

const cards = [
  {
    title: 'Flexible yet standardized',
    subTitle:
      "Create tailored live templates with  your standards, ensuring consistency across development teams.",
    icon: IconDev,
  },
  {
    title: 'Fast and simple ',
    subTitle:
      "Build is hours not days. Automate foundational coding tasks so developers can focus on building new features. ",
    icon: IconDeploy,
  },
  {
    title: 'Always up-to-date',
    subTitle: "Your applications stay current with automatic updates, aligning with the latest standards and technologies.",
    icon: IconCloud,
  },
  {
    title: 'Seamless Collaboration',
    subTitle: "A unified platform where both platform engineers and developers collaborate seamlessly.",
    icon: IconCollab,
  },


];

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
        {/* <PageSection className={"py-10"} alternate>
          <Facts />
        </PageSection> */}
        <PageSection className={'py-5'} >
          <Steps />
        </PageSection>
        <PageSection alternate className={'py-5'}>
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            What users are saying about Amplication?
          </h2>
          <TestimonialsSlider useSlider={false} totalItems={3} wrapperClassName={"laptop:!grid-cols-3"} />
        </PageSection>
        <PageSection className={"!py-20"} >
          {/* <GetList /> */}
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            Why Amplication
          </h2>
          <CardsList
            cards={cards}
            customClasses={'tablet:!grid-cols-1 laptop:!grid-cols-4'}
          />
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
