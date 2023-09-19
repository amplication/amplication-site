import { NextSeo } from 'next-seo';
import PageSection from '../components/Common/PageSection';
import Hero from '../components/Sections/Hacktoberfest/Hero';
import About from '../components/Sections/Hacktoberfest/Steps/about';
import HowTo1 from '../components/Sections/Hacktoberfest/Steps/how-to1';
import HowTo2 from '../components/Sections/Hacktoberfest/Steps/how-to2';
import HowTo3 from '../components/Sections/Hacktoberfest/Steps/how-to3';
import Win from '../components/Sections/Hacktoberfest/Steps/win';
import OpenSource from '../components/Sections/Hacktoberfest/Steps/open-source';
import { MainLayout } from '../layouts';

const Plugins = () => {


  return (
    <>
      <NextSeo
        title="Plugins: Extend the generated code with plugins | Amplication"
        description="Extend and customize your services by using plugins for various technologies and integrations."
      />
      <main className="font-jetbrains w-full z-10 ">
        <Hero />
        <PageSection alternate >
          <OpenSource />
        </PageSection>
        <PageSection  >
          <About />
        </PageSection>
        <PageSection alternate >
          <Win />
        </PageSection>
        <PageSection  >
          <HowTo1 />
        </PageSection>
        <PageSection alternate >
          <HowTo2 />
        </PageSection>
        <PageSection  >
          <HowTo3 />
        </PageSection >
      </main >
    </>
  );
};






Plugins.propTypes = {
};

Plugins.defaultProps = {
};

Plugins.getLayout = function getLayout(page) {
  return <MainLayout paddingTopClasses={"laptop:pt-[90px]"} hideFooterBanner={true} >{page}</MainLayout>;
};
export default Plugins;
