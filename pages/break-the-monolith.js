import Hero from '../components/Sections/BreakTheMonolith/Hero';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';



const BreakTheMonolith = () => {
  return (
    <>
      <NextSeo
        title="Transform Your Monolith to Microservices | Amplication"
        description="Dive into our sandbox environment and see how Amplication enhances your system architecture and transforms your development workflow."
      />

      <main
        className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] "
        id="apply"
      >
        <PageSection>
          <Hero />
        </PageSection>





      </main>
    </>
  );
};
BreakTheMonolith.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default BreakTheMonolith;
