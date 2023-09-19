import { NextSeo } from 'next-seo';
import Hero from '../components/Sections/Hacktoberfest/Hero';
import { MainLayout } from '../layouts';

const Plugins = () => {


  return (
    <>
      <NextSeo
        title="Plugins: Extend the generated code with plugins | Amplication"
        description="Extend and customize your services by using plugins for various technologies and integrations."
      />
      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        <Hero />

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
