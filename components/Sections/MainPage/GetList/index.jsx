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

const items = [
  {
    image: Feature12,
    title: 'AI-powered generation',
    content: 'Generate models, APIs, and configuration using the power of AI',
  },
  {
    image: Feature1,
    title: 'Production-ready APIs',
    content: 'Full featured GraphQL and REST APIs',
  },
  {
    image: Feature2,
    title: 'Data model',
    content: 'Simple definition of entities & database schema',
  },
  {
    image: Feature3,
    title: 'Role-Based access control',
    content: 'Automatically generated identity & permission models',
  },
  {
    image: Feature4,
    title: 'Microservices support',
    content: 'Any architecture, synchronous or asynchronous communication',
  },
  {
    image: Feature5,
    title: 'Continuous Git sync',
    content: 'Automated sync with any Git provider',
  },
  {
    image: Feature6,
    title: 'Full ownership of source code',
    content: 'Human-readable and human-editable .NET & Node.js code',
  },
  {
    image: Feature7,
    title: 'Plugin system',
    content: 'Use community-built plugins or create your own',
  },
  {
    image: Feature8,
    title: 'Monorepo or polyrepo',
    content: 'Use Amplication with a monorepo, polyrepo, or both',
  },
  {
    image: Feature9,
    title: 'Custom code',
    content: 'Easy customization & modification of generated code',
  },
  {
    image: Feature10,
    title: 'Ready to deploy app',
    content:
      'Generate Docker container or use plugins to connect to CI/CD tools & cloud providers',
  },
  {
    image: Feature11,
    title: 'Admin UI',
    content:
      'Automatically generated React Admin UI to create & edit your data models',
  },
];
const GetList = () => {
  return (
    <>
      <div className="mb-6 large:mb-11">
        <h2 className="roadmap-heading m-0">
          What do you get from Amplication?
        </h2>
      </div>
      <div className="features">
        <div
          className="d-flex flex-wrap justify-content-between align-items-start !w-auto !max-w-none"
          id="features"
        >
          {items.map((item, index) => {
            return (
              <div className="feature-card flex !text-left" key={index}>
                <div className="flex min-w-[60px] max-w-[60px]">
                  <Image src={item.image} alt={'open source'} />
                </div>
                <div className="flex-auto">
                  <div className="feature-card-text text-lg text-white leading-[25px] !font-semibold !max-w-full !mt-[.75rem] pb-2">
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
    </>
  );
};

export default GetList;
