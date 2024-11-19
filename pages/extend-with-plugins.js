import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import PageSection from '../components/Common/PageSection';
import CardsList from '../components/Common/CardsList';
import Slider from '../components/Sections/Enterprise/Slider';
import WidePanelWithImage from '../components/Common/WidePanelWithImage';


import ImageHero from '../public/images/product/image-plugins-hero.svg';

import IconPlugin from '../public/images/icons/icon-plugin.svg';
import IconConsole from '../public/images/icons/icon-console.svg';
import IconPluginSystem from '../public/images/icons/icon-plugin-system.svg';

import ImageExtend from '../public/images/product/image-jovu-describe.svg';
import ImagePluginCategory from '../public/images/product/image-plugin-category.svg';
import ImageCatalog from '../public/images/product/image-catalog.svg';


import StartNow from '../components/Sections/Enterprise/StartNow';
import PageHero from '../components/Common/PageHero';
import Image from 'next/image';

const cards = [
  {
    title: 'Rich plugins catalog',
    subTitle:
      "Use plugins from our  catalog to connect with a wide array of third-party services, including popular cloud providers, security tools, and CI/CD pipelines.",
    icon: IconPlugin,
  },
  {
    title: 'Build your own plugins',
    subTitle:
      "Easily build internal plugins that integrate seamlessly with your home grown tech, internal tools and processes.",
    icon: IconPluginSystem,
  },
  {
    title: 'Bespoke solutions',
    subTitle: "Build bespoke live templates for your backend services, tailor-made to meet the unique needs of your organization.",
    icon: IconConsole,
  },

];

const features = [

  {
    title: 'Your integrations. Your standards. Your best practices. ',
    // image: ImageDescribe,
    secondaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/platform-console/#platform-console-templates',
    },
    primaryBtn: undefined,

    content:
      "Our rich plugin catalog offers ready-to-use integrations and building blocks to enhance your development process. With private plugins you can incorporate your organization’s best practices and standards, enabling tailored solutions that meet your specific needs.",
    fullWidth: true,
  },
  {
    title: 'Rapid plugin development ',
    image: ImageExtend,
    primaryBtn: {
      title: 'Learn More',
      href: 'https://docs.amplication.com/plugins/how-to-create-plugin/',
    },
    secondaryBtn: undefined,
    content:
      "Quickly develop and seamlessly manage your plugins using our comprehensive guides and documentation. Provide your engineering teams with essential building blocks and standards to keep your services consistently up-to-date."
  },
  {
    title: 'Rich out-of-the-box plugin catalog',
    image: ImagePluginCategory,
    secondaryBtn: {
      title: 'Plugin Catalog',
      href: './plugins',
    },
    primaryBtn: undefined,
    content:
      "Connect seamlessly with a wide array of 3rd party technologies including service communication, secret management, Auth providers, databases, caching, CI/CD pipelines and more. Our catalog also includes ready-made building blocks for generating additional resources such as Helm charts, Terraform configuration files, Github Actions definitions, and more."
  },
  {
    title: 'Custom live templates',
    image: ImageCatalog,
    secondaryBtn: {
      title: 'Get a Demo',
      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
    },
    primaryBtn: undefined,
    content:
      "Leverage private plugins to create live templates that embed your organization's best practices, standards, and unique requirements. These templates streamline the development process, ensuring consistency and efficiency across all projects."
  },



]

const ExtendWithPluginsPage = () => {
  return (
    <>
      <NextSeo
        title="Build & Update Backend Services in Real-Time | Amplication Live Templates"
        description="Discover Amplication's live templates, tailor-made to dynamically update your backend services with patches, versions, and new technologies. No more manual update of the infrastructure code."
      />

      <main
        className="w-full font-poppins z-10 !mb-0  "
        id="apply"
      >
        <PageSection>
          <PageHero
            title={
              <>
                Customize Your Development with Amplication’s <span className="text-purple-bright">Plugins</span>
              </>
            }
            subTitle={''}
            subText={
              "Build your own plugins to integrate internal tools and processes seamlessly. Create bespoke live templates with custom functionalities tailored precisely to your organizational standards and best practices."
            }
            mainButton={{
              text: 'Book a Demo',
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              eventName: 'bookDemoClicked',
              eventParams: {
                buttonLocation: 'hero-extend-with-plugins',
              },
            }}
            secondaryButton={{
              text: 'Free Trial',
              href: 'https://app.amplication.com/login',
              eventName: 'startNowClicked',
              eventParams: {
                buttonLocation: 'hero-extend-with-plugins',
              },
            }}
            imageNode={
              <Image src={ImageHero} alt={"Amplication's Plugins"} />
            }
          />
        </PageSection>
        <PageSection alternate className={'py-5 laptop:py-12 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
        <PageSection>
          <h2 className="my-12 mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            Unlock unlimited customization with Amplication’s plugins          </h2>
          <CardsList
            cards={cards}
            customClasses={'tablet:!grid-cols-1 laptop:!grid-cols-3'}
          />
          <div className="p-4">
            {features.map((feature, i) =>
            (
              <WidePanelWithImage
                key={i}
                image={feature.image}
                title={feature.title}
                content={feature.content}
                primaryBtn={feature.primaryBtn}
                secondaryBtn={feature.secondaryBtn}
                customClasses={feature.customClasses}
                alternate={i % 2 === 1}
                fullWidth={feature.fullWidth}
              />
            )
            )}
          </div>
        </PageSection>

        <PageSection alternate>
          <StartNow
            title="Build smarter, better, faster"
            description="Start building applications that are perfectly aligned with your organization’s operational needs and strategic goals. "
            linkPrimary={{
              href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
              title: 'Get a Demo',
            }}
            linkSecondary={{
              href: 'https://app.amplication.com/',
              title: 'Try Free',
            }}

          />
        </PageSection>

      </main >
    </>
  );
};
ExtendWithPluginsPage.getLayout = function getLayout(page) {
  return (
    <MainLayout
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default ExtendWithPluginsPage;
