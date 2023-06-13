import Hero from '../components/Sections/DbImportBeta/Hero';
import CardsList from '../components/Sections/DbImportBeta/CardsList';
import StartNow from '../components/Sections/Enterprise/StartNow';
import icon1 from '../public/images/icons/icon-1.svg';

import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import helpers from '../helpers';

const cards = [
  {
    title: 'Quick import',
    subTitle: 'Import your existing database schema into Amplication swiftly and seamlessly.',
    icon: icon1,
  },
  {
    title: 'Modern stack',
    subTitle: 'Build modern services and APIs on top of your database in minutes.',
    icon: icon1,
  },
  {
    title: 'No redundancy',
    subTitle: 'No need to rebuild your database schema from scratch.',
    icon: icon1,
  },
  {
    title: 'Seamless transition',
    subTitle: 'Maintain existing database wile transitioning to a modern architecture.',
    icon: icon1,
  },
  {
    title: 'Ideal for modernization',
    subTitle: 'Perfect for organizations looking to update or replace their legacy systems.',
    icon: icon1,
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

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <Hero />
        <StartNow backgroundClass={"!bg-light-blue"} title="Supercharge Your Business Today" linkSecondary={{
          href: '#apply',
          title: 'Apply now',
        }} />
        <CardsList cards={cards} title={'DB Schema Import Key Features'} customClasses={"!bg-transparent"} />
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
