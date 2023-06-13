import Hero from '../components/Sections/DbImportBeta/Hero';
import CardsList from '../components/Common/CardsList';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';
import StartNow from '../components/Sections/Enterprise/StartNow';
import icon1 from '../public/images/db-import/icon-1.svg';
import icon2 from '../public/images/db-import/icon-2.svg';
import icon3 from '../public/images/db-import/icon-3.svg';
import icon4 from '../public/images/db-import/icon-4.svg';
import icon5 from '../public/images/db-import/icon-5.svg';
import dbImportImage from '../public/images/db-import/db-import.svg';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import helpers from '../helpers';

const cards = [
  {
    title: 'Quick import',
    subTitle: 'Import your existing database schema into Amplication swiftly and seamlessly.',
    icon: icon5,
  },
  {
    title: 'Modern stack',
    subTitle: 'Build modern services and APIs on top of your database in minutes.',
    icon: icon1,
  },
  {
    title: 'No redundancy',
    subTitle: 'No need to rebuild your database schema from scratch.',
    icon: icon2,
  },
  {
    title: 'Seamless transition',
    subTitle: 'Maintain existing database wile transitioning to a modern architecture.',
    icon: icon4,
  },
  {
    title: 'Ideal for modernization',
    subTitle: 'Perfect for organizations looking to update or replace their legacy systems.',
    icon: icon3,
  },
];


const DbImportBeta = () => {
  return (
    <>
      <NextSeo
        title="Building Enterprise Ready Backend | Amplication"
        description="Amplication is the most flexible open-source backend development platform for Node.JS applications. Design models and roles, deploy your app, connect with REST or GraphQL API, sync with GitHub. Built for developers, by developers."
        canonical={helpers.getCanonical('db-inport-beta')}
      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base" id="apply">
        <Hero />

        <StartNow backgroundClass={"!bg-light-blue"} title="Modernize your legacy systems without the hassle of remapping your entire database." linkSecondary={{
          href: '#apply',
          title: 'Apply now',
          target: "_self"
        }} />
        <CardsList cards={cards} title={'DB Schema Import Key Features'} customClasses={"!bg-transparent"} />
        <WidePanelWithImage
          secondaryBtn={{
            href: '#apply',
            title: 'Apply now',
          }}
          image={dbImportImage} title={"Get early access to the DB Schema Import feature and shape its final version"} >
          <div className='py-2 text-sm desktop:text-lg text-white desktop:!leading-[27px] max-w-[600px]'>
            What do you get as beta user:
          </div>
          <div className='py-1'>
            <span className='font-semibold'> Early Access:</span> Get your hands on our DB Schema Import feature before anyone else.
          </div>
          <div className='py-1'><span className='font-semibold'>Influence Development:</span> Provide your valuable feedback and help us fine-tune the feature.</div>
          <div className='py-1'><span className='font-semibold'>Dedicated Support:</span> Receive priority support to ensure a smooth experience.</div>

        </WidePanelWithImage>
      </main>
    </>
  );
};
DbImportBeta.getLayout = function getLayout(page) {
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
export default DbImportBeta;
