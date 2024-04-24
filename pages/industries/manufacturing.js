import Hero from '../../components/Sections/Industries/manufacturing-hero';
import IconsGroup from '../../components/Sections/Enterprise/IconsGroup';
import Slider from '../../components/Sections/Enterprise/Slider';
import StartNow from '../../components/Sections/Enterprise/StartNow';

import { NextSeo } from 'next-seo';
import PageSection from '../../components/Common/PageSection';
import Soc2Banner from '../../components/Common/SOC2';
import { MainLayout } from '../../layouts';
import DescriptionStripe from '../../components/Common/DescriptionStripe';
import GetList from '../../components/Sections/MainPage/GetList';
import Feature1 from '../../public/images/modernization/faster.svg';
import Feature2 from '../../public/images/modernization/save-cost.svg';
import Feature3 from '../../public/images/modernization/flexible.svg';
import Feature4 from '../../public/images/modernization/graph.svg';
import Feature5 from '../../public/images/modernization/production-ready.svg';


const items = [
  {
    image: Feature1,
    title: 'Speed up development',
    content:
      'Rapidly build innovative applications with Amplication’s code generation. Solve unique manufacturing problems, from supply chain management to production automation.',
  },
  {
    image: Feature2,
    title: 'Cut costs, not corners',
    content:
      "Save costs without compromising on quality. Simplify the complexities of manufacturing workflows with custom applications, enhance productivity and operational efficiency.",
  },
  {
    image: Feature5,
    title: 'Future-ready',
    content:
      "Equip your manufacturing operations with applications that are built for the future. Amplication ensures you stay innovative, agile, and ahead of the curve.",
  },
];

const items2 = [
  {
    image: Feature3,
    title: 'Modernize without disruption',
    content:
      'Easily integrate with your current manufacturing systems, enhancing them without the need for complete overhauls.',
  },
  {
    image: Feature4,
    title: 'Built to scale',
    content:
      "Whether you're an SME or a global manufacturing giant, Amplication scales with your needs, ensuring consistent performance.",
  },
];

const ctaItem = {
  title: 'Unlock the Power of Smart Manufacturing Today',
  content:
    'Discover how Amplication Enterprise can boost your app development with scalable, secure solutions.',
  buttonTitle: 'Book a Demo',
  buttonLink: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
  buttonEvent: {
    action: 'bookDemoClicked',
    params: {
      buttonLocation: 'manufacturing',
    },
  },
};


const Manufacturing = () => {
  return (
    <>
      <NextSeo
        title="Amplication for Manufacturing: Automate Your Path to Digital Transformation | Amplication"
        description="Automate, optimize, and scale your manufacturing operations with tailor-made digital solutions."

      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] ">
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
Manufacturing.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default Manufacturing;
