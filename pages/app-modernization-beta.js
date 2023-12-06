import Hero from '../components/Sections/AppModernizationBeta/Hero';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';


const AppModernizationBeta = () => {
  return (
    <>
      <NextSeo
        title="Automatically generate your modernization blueprint | Amplication"
        description="Analyze your projects’ codebase and automatically generate your modernization blueprint. Ideal for updating legacy monolithic applications and complex microservices architectures."
      />

      <main
        className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px]"
        id="apply"
      >
        <Hero />



      </main>
    </>
  );
};
AppModernizationBeta.getLayout = function getLayout(page) {
  return (
    <div
      className={'page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden bg-purple-dark relative'}
    >
      {page}
    </div>
  );
};
export default AppModernizationBeta;
