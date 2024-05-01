import StartNow from '../../components/Sections/About/StartNow';
import ConfirmedContent from '../../components/Sections/CodeSmartPlayHard/Confirmed';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../../layouts';



const Confirmed = () => {
  return (
    <>
      <NextSeo
        title="Code Smart Play Hard | Amplication"
        description="Amplication is the most flexible open-source backend development platform for Node.js applications. Design models and roles, deploy your app, connect with REST or GraphQL API, sync with GitHub. Built for developers, by developers."
      />

      <main
        className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] "
        id="apply"
      >

        <ConfirmedContent />

        <div className='amplication-base'>
          <StartNow />
        </div>




      </main>
    </>
  );
};
Confirmed.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default Confirmed;
