import Hero from '../components/Sections/CodeSmartPlayHard/Hero';
import StartNow from '../components/Sections/About/StartNow';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';



const CodeSmartPlayHard = () => {
  return (
    <>
      <NextSeo
        title="Code. Deploy. Game On! | Amplication"
        description="Boost your coding & gaming experience with Amplication."
      />

      <main
        className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] "
        id="apply"
      >
        <PageSection>
          <Hero />
        </PageSection>
        <div className='amplication-base'>
          <StartNow />
        </div>




      </main>
    </>
  );
};
CodeSmartPlayHard.getLayout = function getLayout(page) {
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
export default CodeSmartPlayHard;
