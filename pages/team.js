import HeroBlock from '../components/Sections/Team/HeroBlock';
import TeamBlock from '../components/Sections/Team/TeamBlock';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';

const Team = () => {
  return (
    <>
      <NextSeo
        title="Meet the Team | Amplication"
        description="Meet the team behind Amplication! The open-source development tool that allows you to build production-ready Node.js applications in minutes. Click here to learn more."
        canonical={helpers.getCanonical('team')}
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base circles-bg">
        {/*Hero Block*/}
        <HeroBlock />

        {/*Team members*/}
        <TeamBlock />
      </main>
    </>
  );
};
Team.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Team;
