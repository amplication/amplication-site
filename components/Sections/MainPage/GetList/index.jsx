import Image from 'next/image';
import Feature1 from '../../../../public/images/features/feature-icon-1.svg';
import Feature2 from '../../../../public/images/features/feature-icon-2.svg';
import Feature3 from '../../../../public/images/features/feature-icon-3.svg';
import Feature4 from '../../../../public/images/features/feature-icon-4.svg';
import Feature5 from '../../../../public/images/features/feature-icon-5.svg';
import Feature6 from '../../../../public/images/features/feature-icon-6.svg';
import Feature7 from '../../../../public/images/features/feature-icon-7.svg';
import Feature8 from '../../../../public/images/features/feature-icon-8.svg';
import Feature9 from '../../../../public/images/features/feature-icon-9.svg';
import Feature10 from '../../../../public/images/features/feature-icon-10.svg';
import Feature11 from '../../../../public/images/features/feature-icon-11.svg';
import Feature12 from '../../../../public/images/features/feature-icon-12.svg';

const GetList = () => {
  const items = [
    {
      image: Feature1,
      link: '/features#open-source',
      title: 'Production-ready APIs',
      content: 'Full featured GraphQL and REST APIs',
    },
    {
      image: Feature2,
      link: '/features#custom-code',
      title: 'Data model',
      content: 'Simple definition of entities & database schema',
    },
    {
      image: Feature3,
      link: '/features#sync-with-github',
      title: 'Role-Based access control',
      content: 'Automatically generated identity & permission models',
    },
    {
      image: Feature4,
      link: '/features#version-control',
      title: 'Microservices support',
      content: 'Any architecture, synchronous or asynchronous communication',
    },
    {
      image: Feature5,
      link: '/features#custom-code',
      title: 'Continuous Git sync',
      content: 'Automated sync with private or public GitHub repos',
    },
    {
      image: Feature6,
      link: '/features#code-generation',
      title: 'TypeScript & Node.js source code',
      content:
        'Automatically generated human-readable and human-editable Node.js code',
    },
    {
      image: Feature7,
      link: '/features#deployment',
      title: 'Plugin system',
      content: 'Use community-built plugins or create your own',
    },
    {
      image: Feature8,
      link: '/features#identity-permissions',
      title: 'Monorepo or polyrepo',
      content: 'Use Amplication with a monorepo, polyrepo, or both',
    },
    {
      image: Feature9,
      link: '/features#admin-ui',
      title: 'Custom code',
      content: 'Easy customization & modification of generated code',
    },
    {
      image: Feature10,
      link: '/features#identity-permissions',
      title: 'Ready to deploy app',
      content:
        'Generate Docker container or use plugins to connect to CI/CD tools & cloud providers',
    },
    {
      image: Feature11,
      link: '/features#deployment',
      title: 'Admin UI',
      content:
        'Automatically generated React Admin UI to create & edit your data models',
    },
    {
      image: Feature12,
      link: '/features#cli',
      title: 'Amplication console & CLI',
      content:
        'Fast app generation using Amplication console or Command Line Interface (CLI)',
    },
  ];

  return (
    <>
      <section className="!bg-light-blue !py-24">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop ">
          <div className="mb-6 large:mb-14">
            <h2 className="roadmap-heading m-0">
              What do you get from Amplication?
            </h2>
          </div>
          <div className="features">
            <div
              className="pt-4 row d-flex justify-content-between align-items-start !w-auto !max-w-none"
              id="features"
            >
              {items.map((item, index) => {
                return (
                  <div
                    className="feature-card flex !text-left hover:bg-purple-light"
                    key={index}
                  >
                    <div className="flex min-w-[60px] max-w-[60px] medium:p-2">
                      <Image src={item.image} alt={'open source'} />
                    </div>
                    <div className="flex-auto ml-2">
                      <div className="feature-card-text text-lg text-white leading-[25px] !font-semibold !max-w-full mt-2 pb-2">
                        {item.title}
                      </div>
                      <div className="feature-card-content text-sm text-white font-regular max-w-[282px]">
                        {item.content}
                      </div>
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

export default GetList;
