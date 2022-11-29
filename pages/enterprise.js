import HeroBlock from '../components/Sections/Enterprise/HeroBlock';
import Slider from '../components/Sections/Enterprise/Slider';
import Facts from '../components/Sections/Enterprise/Facts';
import StartNow from '../components/Sections/About/StartNow';

import enterprise1 from '../public/images/enterprise/enterprise-1.svg';
import enterprise2 from '../public/images/enterprise/enterprise-2.svg';
import enterprise3 from '../public/images/enterprise/enterprise-3.svg';
import enterprise4 from '../public/images/enterprise/enterprise-4.svg';
import enterprise5 from '../public/images/enterprise/enterprise-5.svg';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      image: enterprise5,
      title: 'Extend existing projects or start from scratch',
      customClasses: '!pb-8',
      content:
        '<p>Whether you want to break the monolith, extend an existing product with new services, or start from scratch - Amplication got your back{end}.</p>' +
        '<p>Amplication can connect to an existing monorepo and add new services alongside the existing ones, and the generated code can be extended to include the configuration, actions, and workflows to integrate with your CI/CD pipelines.</p>',
    },
    {
      image: enterprise1,
      title: 'Write business value from day 0',
      customClasses: '!pt-8',
      content:
        '<p>Amplication generates a fully extendable and customizable code base for all the application infrastructure, so your team can focus on moving the needle.' +
        'The generated code is created with well-known technology, so your team does not need to learn anything new. We adopt industry best practices, so your team can use their existing knowledge and skillset.</p>' +
        '<p>The generated code can include anything from data schema management, API endpoints (GraphQL or REST API), queues and message brokers, storage, IaC and deployment, roles and permissions, database connections, microservices communication, integrations, logging, exception handling, admin UI and more.</p>',
      buttons: [],
    },
    {
      image: enterprise2,
      title:
        'Keep your best practices and conventions or adopt industry standards',
      customClasses: '!pb-6',
      content:
        '<p>Using a community-driven plugin system, your team has full control over the flavor of the generated code, including security, privacy, standards, and best practices.</p>' +
        '<p>Plugins can be used to control anything from the type of database to use, code conventions and format, authentication providers, connecting to CI/CD pipelines, monorepo management, build tools, and more.</p>' +
        "<p>Your infra team can create custom plugins to keep the organization's current conventions, standards, and best practices and enforce usage across teams. You can easily update plugins and automatically push changes to dozen or hundreds of services in one click.</p>",
    },
    {
      image: enterprise3,
      title: 'Build your product with no limits at any scale',
      customClasses: '!pb-8',
      content:
        '<p>You build something unique, so use the creativity of your team to make a difference. The generated code is fully customizable. Your team keeps working with their favorite IDE to extend and build on top of the generated code. Anything can be customized, and Amplication will give you all the freedom to keep making changes without losing any of the custom code.</p>' +
        '<p>Amplication will always create a Pull Request with the newly generated code, so your team has full control over what goes to production. No black boxing or vendor-locking. You own the code, as it should be, allowing you to build the next amazing product with no limits or obstacles.</p>',
    },
    {
      image: enterprise4,
      title: 'Limitless architecture',
      customClasses: '!pb-8',
      content:
        '<p>Whether you build a single service or a microservices architecture, Amplication allows you to build at any scale.</p>' +
        '<p>Your teams can create various services, manage microservices communication, use Kafka, connect to storage, or add an API Gateway. The code is consistent, secure, and reliable across all teams.</p>' +
        '<p>Amplication can sync the generated code with a monorepo where each service goes to a different folder or sync with various repositories. You can manage dozens or hundreds of services with maximum consistency from a single source of truth and centralized management and visibility.</p>',
    },
  ];

  return (
    <>
      <NextSeo
        title="Build Enterprise Ready Backend | Amplication"
        description="Build microservices 20x faster. Reliably. Securely. Consistently."
        canonical={helpers.getCanonical('features')}
      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <HeroBlock />
        <Slider />

        {features.map((feature, i) => {
          return (
            <section
              className={
                'features-page-feature !py-10 desktop:!py-24 ' +
                (feature.customClasses ?? '')
              }
              key={i}
            >
              <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
                {i === 0 && (
                  <h2 className="!text-3xl laptop:!text-[56px] !leading-[40px] laptop:!leading-[68px] !font-semibold tablet:text-center !mb-12">
                    Let your teams write critical business logic instead of
                    managing redundant infrastructure code.
                  </h2>
                )}
                <div
                  className={
                    (i % 2 !== 0 ? 'flex-row-reverse ' : '') +
                    'row d-flex justify-content-between align-items-center feature-page-card py-0 laptop:py-6'
                  }
                >
                  <div
                    className={
                      (i % 2 !== 0 ? 'desktop:!px-9 ' : '') +
                      'col-sm-12 col-md-6 pb-0 desktop:pt-8 pr-3'
                    }
                  >
                    <div className="!text-[24px] desktop:!text-[32px] !leading-[36px] desktop:!leading-[48px] font-bold pb-3">
                      {feature.title}
                    </div>
                    <div
                      className="text-sm desktop:text-lg text-white desktop:!leading-[27px] max-w-[690px]"
                      dangerouslySetInnerHTML={{__html: feature.content}}
                    ></div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 desktop:left-4 desktop:top-6 feature-image"
                    data-aos="fade-up-left"
                  >
                    {feature.image && (
                      <Image
                        className="max-w-[710px] !visible"
                        src={feature.image}
                        alt={feature.title}
                        objectFit={'cover'}
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        <Facts />
        <StartNow
          title="Build faster, with no limits"
          linkPrimary={{
            href: 'https://app.amplication.com/',
            title: 'Get started',
          }}
          linkOutline={{
            title: 'Contact us',
          }}
        />
      </main>
    </>
  );
};
Features.getLayout = function getLayout(page) {
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
export default Features;
