import Slider from '../../components/Sections/Enterprise/Slider';

import { NextSeo } from 'next-seo';
import PageSection from '../../components/Common/PageSection';
import { MainLayout } from '../../layouts';

import Image from 'next/image';
import DescriptionStripe from '../../components/Common/DescriptionStripe';
import PageHero from '../../components/Common/PageHero';
import GetList from '../../components/Sections/MainPage/GetList';
import Feature3 from '../../public/images/modernization/flexible.svg';
import Feature4 from '../../public/images/modernization/graph.svg';
import Feature2 from '../../public/images/modernization/save-cost.svg';
import ImageHero from '../../public/images/product/low-code-hero.png';
import Feature5 from '../../public/images/product/modernize.svg';
import Feature1 from '../../public/images/product/retail-speed.svg';


const items = [
  {
    image: Feature1,
    title: 'Accelerated Delivery',
    content:
      "Quickly develop and deploy applications, reducing time-to-market for your clients.",
  },
  {
    image: Feature2,
    title: 'Cost Reduction:',
    content:
      "Minimize development and operational costs, allowing you to offer competitive rates.",
  },
  {
    image: Feature5,
    title: 'Scalable Solutions',
    content:
      "Build applications that scale effortlessly with your clients’ growing needs.",
  },
];

const items2 = [
  {
    image: Feature3,
    title: 'Pre-built Components',
    content:
      "Utilize customizable modules to speed up development. ",
  },
  {
    image: Feature4,
    title: 'Customization Options',
    content:
      "Bring your own opinions and best practices to the table, ensuring a tailored solution for your clients.",
  },
];

const ctaItem = {
  title: 'Transform your IT service offerings with Amplication',
  content:
    'Discover how Amplication Enterprise can boost your app development with scalable, secure solutions.',
  buttonTitle: 'Book a Demo',
  buttonLink: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
  buttonEvent: {
    action: 'bookDemoClicked',
    params: {
      buttonLocation: 'retail',
    },
  },
};

const ITServices = () => {
  return (
    <>
      <NextSeo
        title="Amplication for IT Service Providers: Accelerating Client Success | Amplication"
        description="Enhance your IT service offerings with Amplication, a platform designed to expedite the development of custom software solutions for your clients."

      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] ">
        <PageSection >
          <PageHero
            title={
              "Amplication for IT Service Providers: Accelerating Client Success"
            }
            subTitle={
              "Expedite the development of custom software solutions for your clients"
            }
            subText={'Emphasize efficiency, scalability, and innovation in your projects, providing superior service and value.'}
            mainButton={{
              text: 'Book a Demo',
              href: '/contact-us',
              eventName: 'bookDemoClicked',
              eventParams: {
                buttonLocation: 'hero',
              },
            }}
            secondaryButton={{
              text: 'Try Free',
              href: 'https://app.amplication.com/login',
              eventName: 'startNowClicked',
              eventParams: {
                buttonLocation: 'hero',
              },
            }}
            imageNode={
              <Image src={ImageHero} alt={'Build API on existing Database'} />
            }
          />
        </PageSection>
        <PageSection alternate className={'py-5 laptop:py-12 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection addMargins>
          <DescriptionStripe items={items} />
        </PageSection>
        <PageSection alternate addMargins>
          <DescriptionStripe items={items2} ctaItem={ctaItem} />
        </PageSection>
        <PageSection addMargins className={"amplication-base"} >
          <GetList />
        </PageSection>
      </main>
    </>
  );
};
ITServices.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default ITServices;
