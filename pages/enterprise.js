import StartNow from '../components/Sections/About/StartNow';
import EnterpriseFeatures from '../components/Sections/Enterprise/EnterpriseFeatures';
import Facts from '../components/Sections/Enterprise/Facts';
import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';

import {NextSeo} from 'next-seo';
import helpers from '../helpers';
import {MainLayout} from '../layouts';

const Enterprise = () => {
  return (
    <>
      <NextSeo
        title="Build Enterprise Ready Backend | Amplication"
        description="Build microservices 20x faster. Reliably. Securely. Consistently."
        canonical={helpers.getCanonical('features')}
      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <HeroBlock />
        <Slider />
        <EnterpriseFeatures />
        <Facts />
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
Enterprise.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default Enterprise;
