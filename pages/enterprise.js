import enterprise1 from '../public/images/enterprise/enterprise-1.svg';
import enterprise2 from '../public/images/enterprise/enterprise-2.svg';
import enterprise3 from '../public/images/enterprise/enterprise-3.svg';
import enterprise4 from '../public/images/enterprise/enterprise-4.svg';
import enterprise5 from '../public/images/enterprise/enterprise-5.svg';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      image: enterprise1,
      title: 'Write business value from day 0',
      content:
        'Amplication generates a fully extendable and customizable code base for all the application infrastructure, so your team can focus on moving the needle. (/ on making an impact/ on delivering value).<br />\n' +
        'The generated code is created with well-known technology, so your team does not need to learn anything new. Nothing in the generated code is proprietary to Amplication - we adopt industry best practices, so your team can use their existing knowledge and skillset.<br />\n' +
        'The generated code can include anything from data schema management, API endpoints (GraphQL or REST API), queues and message brokers, storage, IaC and deployment, roles and permissions, database connections, microservices communication, integrations, logging, exception handling, admin UI and more.<br />\n' +
        'Shift left anything that can be automated and ensure your code is scalable, secure, and performant. Prevent knowledge gaps and losing knowledge with employee turnover.\n',
      buttons: [],
    },
    {
      image: enterprise2,
      title: 'Keep your best practices and conventions or adopt industry standards',
      content:
        'Using a community-driven plugin system, your team has full control over the flavor of the generated code, including security, privacy, standards, and best practices.<br />\n' +
        'Plugins can be used to control anything from the type of database to use, code conventions and format, authentication providers, connecting to CI/CD pipelines, monorepo management, build tools, and more.<br />\n' +
        'Your infra team can create custom plugins to keep the organization\'s current conventions, standards, and best practices and enforce usage across teams. You can easily update plugins and automatically push changes to dozen or hundreds of services in one click.',
      buttons: [],
    },
    {
      image: enterprise3,
      title: 'Build your product with no limits at any scale',
      content:
        'You build something unique, so use the creativity of your team to make a difference.<br />\n' +
        'The generated code is fully customizable. Your team keeps working with their favorite IDE to extend and build on top of the generated code. Anything can be customized, and Amplication will give you all the freedom to keep making changes without losing any of the custom code.<br />\n' +
        'Amplication will always create a Pull Request with the newly generated code, so your team has full control over what goes to production. No black boxing or vendor-locking. You own the code, as it should be, allowing you to build the next amazing product with no limits or obstacles.',
      buttons: [],
    },
    {
      image: enterprise4,
      title: 'Limitless architecture',
      content:
        'Whether you build a single service or a microservices architecture, Amplication allows you to build at any scale.<br />\n' +
        'Your teams can create various services, manage microservices communication, use Kafka, connect to storage, or add an API Gateway. The code is consistent, secure, and reliable across all teams.<br />\n' +
        'Amplication can sync the generated code with a monorepo where each service goes to a different folder or sync with various repositories. You can manage dozens or hundreds of services with maximum consistency from a single source of truth and centralized management and visibility.',
      buttons: [],
    },
    {
      image: enterprise5,
      title: 'Extend existing projects or start from scratch',
      content:
        'Whether you want to break the monolith, extend an existing product with new services, or start from scratch - Amplication got your back{end}.<br />\n' +
        'Amplication can connect to an existing monorepo and add new services alongside the existing ones, and the generated code can be extended to include the configuration, actions, and workflows to integrate with your CI/CD pipelines.',
      buttons: [],
    },
  ];

  return (
    <>
      <NextSeo
        title="GraphQL API Feature for Backend API Development | Amplication"
        description="Amplication is the most flexible open-source backend development platform for Node.JS applications. Design models and roles, deploy your app, connect with REST or GraphQL API, sync with GitHub. Built for developers, by developers."
        canonical={helpers.getCanonical('features')}
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        {features.map((feature, i) => {
          return (
            <section className="features-page-feature !py-24">
              <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
                <div className={(i % 2 !== 0 ? 'flex-row-reverse ' : '') + "row d-flex justify-content-between align-items-center feature-page-card"}>
                  <div className="col-sm-12 col-md-6 pr-3">
                    <div className="feature-title">{feature.title}</div>
                    <div className="feature-page-description text-base text-white" dangerouslySetInnerHTML={{__html: feature.content}}></div>
                    {feature.buttons.length > 0 && (
                      <div className="buttons-wrapper d-flex mb-4 align-items-center justify-content-start mt-4">
                        {feature.buttons.map((button, index) => {
                          return (
                            <Link href={button.url ?? ''} passHref={true} key={index}>
                              <a className={button.buttonClass ?? ''}>
                                <span className={button.iconClass ?? ''}> </span>
                                {button.title ?? ''}
                              </a>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="col-sm-12 col-md-6 feature-image" data-aos="fade-up-left">
                    {feature.image && (
                      <Image className="max-w-[710px]" src={feature.image} alt={feature.title} objectFit={'contain'} />
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};
Features.getLayout = function getLayout(page) {
  return <MainLayout hideFooterBanner={true} hideBackground={true}>{page}</MainLayout>;
};
export default Features;
