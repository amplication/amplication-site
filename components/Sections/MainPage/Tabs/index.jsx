import {useState} from 'react';
import Image from 'next/image';
import enterprise5 from '../../../../public/images/enterprise/enterprise-5.svg';
import enterprise1 from '../../../../public/images/enterprise/enterprise-1.svg';
import enterprise2 from '../../../../public/images/enterprise/enterprise-2.svg';
import enterprise3 from '../../../../public/images/enterprise/enterprise-3.svg';
import enterprise4 from '../../../../public/images/enterprise/enterprise-4.svg';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Project Extension');

  const features = [
    {
      image: enterprise5,
      tabTitle: 'Project Extension',
      title: 'Extend existing projects or start from scratch',
      customClasses: '!pb-8',
      content:
        '<p>Whether you want to break the monolith, extend an existing product with new services, or start from scratch - Amplication got your back{end}.</p>' +
        '<p>Amplication can connect to an existing monorepo and add new services alongside the existing ones, and the generated code can be extended to include the configuration, actions, and workflows to integrate with your CI/CD pipelines.</p>',
    },
    {
      image: enterprise1,
      tabTitle: 'Business value',
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
      tabTitle: 'Keep or Adopt',
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
      tabTitle: 'Any scale',
      title: 'Build your product with no limits at any scale',
      customClasses: '!pb-8',
      content:
        '<p>You build something unique, so use the creativity of your team to make a difference. The generated code is fully customizable. Your team keeps working with their favorite IDE to extend and build on top of the generated code. Anything can be customized, and Amplication will give you all the freedom to keep making changes without losing any of the custom code.</p>' +
        '<p>Amplication will always create a Pull Request with the newly generated code, so your team has full control over what goes to production. No black boxing or vendor-locking. You own the code, as it should be, allowing you to build the next amazing product with no limits or obstacles.</p>',
    },
    {
      image: enterprise4,
      tabTitle: 'Limitless architecture',
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
      <section className="page-steps">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="!my-12">
            <h2 className="w-full !text-3xl !text-5xl large:!text-[56px] !leading-tight !font-semibold">
              Let your teams write critical business logic instead of redundant
              infrastructure code
            </h2>
            <div className="flex max-medium:!flex-col mt-20">
              <ul className="w-[25%] max-medium:w-full max-medium:overflow-x-scroll scrollbar-hide snap-x flex flex-column max-medium:!flex-row">
                {features.map((feature, index) => {
                  return (
                    <li
                      className={
                        (activeTab === feature.tabTitle ? 'text-white ' : '') +
                        'py-2 max-medium:pr-4 max-medium:whitespace-nowrap cursor-pointer font-semibold text-sm leading-5 text-[#686F8C] hover:text-white'
                      }
                      onClick={() => setActiveTab(feature.tabTitle)}
                      key={index}
                    >
                      {feature.tabTitle}
                    </li>
                  );
                })}
              </ul>
              <div className="tab-content w-[75%] max-medium:w-full max-medium:mt-12">
                {features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        (activeTab === feature.tabTitle
                          ? '!flex justify-content-between flex-col tablet:flex-row '
                          : '') + 'hidden'
                      }
                    >
                      <div className="relative max-w-full tablet:max-w-[50%]">
                        {feature.title && (
                          <h4 className="!font-bold !text-2xl !leading-9 !mb-8">
                            {feature.title}
                          </h4>
                        )}
                        <div
                          className="w-full"
                          dangerouslySetInnerHTML={{__html: feature.content}}
                        ></div>
                      </div>
                      <div className="ml-auto w-full tablet:w-[40%] mt-12 tablet:mt-0">
                        <Image src={feature.image} alt={feature.title} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
