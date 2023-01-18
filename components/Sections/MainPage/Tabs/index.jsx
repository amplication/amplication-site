import {useEffect, useState} from 'react';
import Image from 'next/image';
import enterprise5 from '../../../../public/images/enterprise/enterprise-5.svg';
import enterprise1 from '../../../../public/images/enterprise/enterprise-1.svg';
import enterprise2 from '../../../../public/images/enterprise/enterprise-2.svg';
import enterprise3 from '../../../../public/images/enterprise/enterprise-3.svg';
import enterprise4 from '../../../../public/images/enterprise/enterprise-4.svg';

let timeout = null;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [autorun, setAutorun] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  const destroyTimeout = () => clearTimeout(timeout);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      setIsMobile(window.innerWidth < 641);
    });
    setIsMobile(window.innerWidth < 641);
  }, []);

  useEffect(() => {
    if (autorun) {
      timeout = setTimeout(() => {
        const next = activeTab + 1;
        setActiveTab(next < features.length ? next : 0);
      }, 5000);
    }
  }, [activeTab]);

  const features = [
    {
      image: enterprise5,
      tabTitle: 'Any phase',
      title: 'Extend existing projects or start from scratch',
      customClasses: '!pb-8',
      content:
        '<p>Whether you want to break the monolith, extend an existing product with new services, or start from scratch - Amplication got your back{end}.</p>' +
        '<p>Amplication can connect to an existing monorepo and add new services alongside the existing ones, and the generated code can be extended to include the configuration, actions, and workflows to integrate with your CI/CD pipelines.</p>',
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
      tabTitle: 'Any Architecture',
      title: 'Limitless architecture',
      customClasses: '!pb-8',
      content:
        '<p>Whether you build a single service or a microservices architecture, Amplication allows you to build at any scale.</p>' +
        '<p>Your teams can create various services, manage microservices communication, use Kafka, connect to storage, or add an API Gateway. The code is consistent, secure, and reliable across all teams.</p>' +
        '<p>Amplication can sync the generated code with a monorepo where each service goes to a different folder or sync with various repositories. You can manage dozens or hundreds of services with maximum consistency from a single source of truth and centralized management and visibility.</p>',
    },
    {
      image: enterprise1,
      tabTitle: 'Industry Standards',
      title: 'Write business value from day 0',
      customClasses: '!pt-8',
      content:
        '<p>Amplication generates a fully extendable and customizable code base for all the application infrastructure, so your team can focus on moving the needle.</p>' +
        '<p>The generated code is created with well-known technology, so your team does not need to learn anything new. We adopt industry best practices, so your team can use their existing knowledge and skillset.</p>' +
        '<p>The generated code can include anything from data schema management, API endpoints (GraphQL or REST API), queues and message brokers, storage, IaC and deployment, roles and permissions, database connections, microservices communication, integrations, logging, exception handling, admin UI and more.</p>',
      buttons: [],
    },
    {
      image: enterprise2,
      tabTitle: 'Plugins',
      title:
        'Keep your best practices and conventions or adopt industry standards',
      customClasses: '!pb-6',
      content:
        '<p>Using a community-driven plugin system, your team has full control over the flavor of the generated code, including security, privacy, standards, and best practices.</p>' +
        '<p>Plugins can be used to control anything from the type of database to use, code conventions and format, authentication providers, connecting to CI/CD pipelines, monorepo management, build tools, and more.</p>' +
        "<p>Your infra team can create custom plugins to keep the organization's current conventions, standards, and best practices and enforce usage across teams. You can easily update plugins and automatically push changes to dozen or hundreds of services in one click.</p>",
    },
  ];

  const [opened, setOpened] = useState(features.map(() => false));

  return (
    <>
      <section className="page-steps !py-20">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <h2 className="roadmap-heading">
            Let your teams write critical business logic instead of redundant
            <br />
            infrastructure code
          </h2>
          <div className="flex max-medium:!flex-col mt-8 laptop:mt-24">
            <ul className="w-[22.4%] max-medium:w-full max-medium:overflow-x-scroll scrollbar-hide snap-x flex flex-column max-medium:!flex-row">
              {features.map((feature, index) => {
                return (
                  <li
                    className={
                      (activeTab === index ? 'text-white ' : '') +
                      'max-medium:pr-4 max-medium:whitespace-nowrap cursor-pointer font-semibold text-sm leading-7 text-[#686F8C] hover:text-white'
                    }
                    onClick={() => {
                      destroyTimeout();
                      setAutorun(false);
                      setActiveTab(index);
                    }}
                    key={index}
                  >
                    {feature.tabTitle}
                  </li>
                );
              })}
            </ul>
            <div className="tab-content w-[75%] max-medium:w-full mt-[16px] tablet:mt-0">
              {features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className={
                      (activeTab === index
                        ? '!flex justify-content-between flex-col tablet:flex-row '
                        : '') + 'hidden'
                    }
                  >
                    <div className="relative max-w-full tablet:max-w-[44%]">
                      {feature.title && (
                        <h4 className="!font-bold !text-2xl !leading-9 !mb-4">
                          {feature.title}
                        </h4>
                      )}
                      <div
                        className={
                          (isMobile && !opened[index]
                            ? 'max-h-[calc(4*1.53em)] text-ellipsis overflow-hidden'
                            : '') +
                          ' w-full font-normal text-sm leading-[1.56em]'
                        }
                        dangerouslySetInnerHTML={{__html: feature.content}}
                      ></div>
                      <span
                        onClick={() => {
                          setOpened(
                            opened.map((open, i) =>
                              i === index ? open === false : open
                            )
                          );
                        }}
                        className={
                          (isMobile
                            ? 'flex font-normal text-sm leading-[1.5em]'
                            : 'hidden') +
                          ' cursor-pointer text-turquoise underline'
                        }
                      >
                        Read more
                      </span>
                    </div>
                    <div className="ml-auto w-full tablet:w-[40%] mt-12 tablet:mt-0 medium:mr-32">
                      <Image src={feature.image} alt={feature.title} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
