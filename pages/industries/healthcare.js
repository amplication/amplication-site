import Hero from '../../components/Sections/Industries/healthcare-hero';
import IconsGroup from '../../components/Sections/Enterprise/IconsGroup';
import Slider from '../../components/Sections/Enterprise/Slider';
import StartNow from '../../components/Sections/Enterprise/StartNow';

import { NextSeo } from 'next-seo';
import PageSection from '../../components/Common/PageSection';
import { MainLayout } from '../../layouts';


import Feature1 from '../../public/images/modernization/faster.svg';
import Feature2 from '../../public/images/modernization/save-cost.svg';
import Feature3 from '../../public/images/modernization/flexible.svg';
import Feature4 from '../../public/images/modernization/graph.svg';
import Feature5 from '../../public/images/modernization/production-ready.svg';
import DescriptionStripe from '../../components/Common/DescriptionStripe';
import GetList from '../../components/Sections/MainPage/GetList';

const items = [
  {
    image: Feature1,
    title: 'Accelerate healthcare innovation',
    content:
      'Speed up healthcare applications creation, from patient management systems to telehealth platforms, responding quickly to the evolving healthcare landscape.',
  },
  {
    image: Feature2,
    title: 'Cut costs, not corners',
    content:
      "Dramatically reduce development costs with Amplication’s code generation. Deliver high-quality healthcare solutions without compromising on quality. ",
  },
  {
    image: Feature5,
    title: 'Secured and compliant',
    content:
      "Amplication follows best practices in security, data privacy and reliability, ensuring your apps meet the stringent standards of healthcare regulations, including SOC2 compliance.",
  },
];

const items2 = [
  {
    image: Feature3,
    title: 'Seamless integration',
    content:
      'Integrate your applications effortlessly with existing healthcare infrastructure, including EHRs, diagnostic tools, and billing systems.',
  },
  {
    image: Feature4,
    title: 'Scalability for growth',
    content:
      "As your needs evolve, Amplication's platform scales with you, ensuring your apps handle increasing workloads and patient data efficiently.",
  },
];

const ctaItem = {
  title: 'Boost Your Healthcare Management Today',
  content:
    'Discover how Amplication can help you build advanced, cost-effective and scalable healthcare solutions.',
  buttonTitle: 'Book a Demo',
  buttonLink: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
  buttonEvent: {
    action: 'bookDemoClicked',
    params: {
      buttonLocation: 'healthcare',
    },
  },
};

const healthcare = () => {
  return (
    <>
      <NextSeo
        title="Modernize Your Healthcare Management  | Amplication"
        description="Streamline, optimize, and boost your healthcare operations with Amplication."

      />

      <main className="w-full font-poppins z-10  ">
        <PageSection >
          <Hero />
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
healthcare.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default healthcare;
