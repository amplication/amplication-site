import Hero from '../../components/Sections/Industries/retail-hero';
import IconsGroup from '../../components/Sections/Enterprise/IconsGroup';
import Slider from '../../components/Sections/Enterprise/Slider';
import StartNow from '../../components/Sections/Enterprise/StartNow';

import { NextSeo } from 'next-seo';
import PageSection from '../../components/Common/PageSection';
import Soc2Banner from '../../components/Common/SOC2';
import { MainLayout } from '../../layouts';

import Feature1 from '../../public/images/product/retail-speed.svg';
import Feature2 from '../../public/images/modernization/save-cost.svg';
import Feature3 from '../../public/images/modernization/flexible.svg';
import Feature4 from '../../public/images/modernization/graph.svg';
import Feature5 from '../../public/images/product/modernize.svg';
import DescriptionStripe from '../../components/Common/DescriptionStripe';
import GetList from '../../components/Sections/MainPage/GetList';


const items = [
  {
    image: Feature1,
    title: 'Reduce time-to-market',
    content:
      "Launch new retail services and applications faster with Amplication's code generation. Stay nimble and responsive to market trends and consumer expectations.",
  },
  {
    image: Feature2,
    title: 'Cut costs, not corners',
    content:
      "Reduce development costs without compromising on quality. Amplication’s code is based on best practices and built-in standards, ensuring optimal performance.",
  },
  {
    image: Feature5,
    title: 'Retail modernization',
    content:
      "Future-proof you retail business with Amplication. Enjoy regular updates and new features to enhance customer journey and shopping experience. ",
  },
];

const items2 = [
  {
    image: Feature3,
    title: 'Seamless integration',
    content:
      'Easily integrate with existing systems, connect your retail applications, e-commerce platforms, and more, ensuring a unified retail operation.',
  },
  {
    image: Feature4,
    title: 'Growth-ready',
    content:
      "Ensure your digital solutions scale with you. Effortlessly handle peak seasons, traffic surges, and growing inventory demands.",
  },
];

const ctaItem = {
  title: 'Supercharge Your Retail Business Now',
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

const Retail = () => {
  return (
    <>
      <NextSeo
        title="Modernize retail experiences with Amplication | Amplication"
        description="Amplication helps retails modernize faster."

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
        <PageSection addMargins >
          <GetList />
        </PageSection>
      </main>
    </>
  );
};
Retail.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default Retail;
