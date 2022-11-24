import Image from 'next/image';
import feature1 from '../../../../public/images/features/feature1.svg';
import feature2 from '../../../../public/images/features/feature2.svg';
import feature3 from '../../../../public/images/features/feature3.svg';
import feature4 from '../../../../public/images/features/feature4.svg';

const Features = () => {
  const features = [
    {
      title: 'Database',
      icon: feature1,
      content: 'Easily generate all core BE functionality, including creation of entities & roles',
    },
    {
      title: 'GitHub',
      icon: feature2,
      content: 'Continuously sync the generated code to your GitHub repo ',
    },
    {
      title: 'Docker',
      icon: feature3,
      content: 'Simply create microservices or monolithic architecture',
    },
    {
      title: 'Docker',
      icon: feature4,
      content: 'Get a production-ready Node.js application and a Docker container to deploy anywhere',
    },
  ];
  return (
    <>
      <section className="page-welcome-solution bg-transparent">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="solution">
            {features.map((item, index) => {
              return (
                <div className="solution-card !flex align-items-center flex-column" key={index}>
                  {item.icon && (
                    <div className="flex justify-center max-w-[96px] large:max-w-[120px]">
                      <Image objectFit="cover" src={item.icon} alt={item.title ?? ''} />
                    </div>
                  )}
                  <div
                    className="solution-content text-base large:text-xl text-white text-center max-w-[270px] mt-2 large:mt-4 large:!leading-8"
                    dangerouslySetInnerHTML={{__html: item.content}}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
