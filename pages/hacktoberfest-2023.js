import { NextSeo } from 'next-seo';
import Hero from '../components/Sections/Hacktoberfest/Hero';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import SplitSection from '../components/Common/SplitSection';
import ContentBox from '../components/Common/ContentBox';
import TeamSportImage from '../public/images/hacktoberfest/hacktoberfest-team-sport.svg';
import Hf10Image from '../public/images/hacktoberfest/hacktoberfest-10.svg';
import Image from 'next/image';

const Plugins = () => {


  return (
    <>
      <NextSeo
        title="Plugins: Extend the generated code with plugins | Amplication"
        description="Extend and customize your services by using plugins for various technologies and integrations."
      />
      <main className="font-jetbrains w-full z-10 ">
        <PageSection >
          <Hero />
        </PageSection>

        <PageSection alternate >
          <SplitSection
            firstSectionNode={
              <ContentBox
                title={
                  <>
                    Open-source is a team sport.<br />
                    Let&apos;s win together.
                  </>
                }
                body={
                  <>
                    We&apos;re inviting you to experience the joy and learning that comes from contributing to open-source projects like Amplication. Win digital swag and additional major prizes.
                  </>
                }
                ctaLabel="How to contribute"
                ctaUrl="http" />}
            SecondSectionNode={
              <Image
                src={TeamSportImage}
                alt={'Open-source is a team sport'}
                className="h-[350px]"
              />}
            reverse={false} />
        </PageSection>
        <PageSection  >
          <SplitSection
            firstSectionNode={
              <ContentBox
                title={
                  <>
                    About Hacktoberfest
                  </>
                }
                body={
                  <>
                    Hacktoberfest is an annual, month-long celebration of open-source software run by DigitalOcean. It encourages developers from all corners of the world to contribute to open-source projects. Amplication is one of the projects you can contribute to and is a proud sponsor of Hacktoberfest. Whether you&apos;re new to coding or an experienced developer, there&apos;s something in Hacktoberfest for everyone.
                  </>
                }
                ctaLabel=""
                ctaUrl="" />}
            SecondSectionNode={
              <Image
                src={Hf10Image}
                alt={'Hacktoberfest 10th anniversary'}
                className="h-[350px]"
              />}
            reverse={true} />
        </PageSection>

      </main >
    </>
  );
};






Plugins.propTypes = {
};

Plugins.defaultProps = {
};

Plugins.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Plugins;
