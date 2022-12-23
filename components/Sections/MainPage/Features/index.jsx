import Image from 'next/image';
import feature1 from '../../../../public/images/features/feature1.svg';
import feature2 from '../../../../public/images/features/feature2.svg';
import feature3 from '../../../../public/images/features/feature3.svg';
import feature4 from '../../../../public/images/features/feature4.svg';

const Features = () => {
  const features = [
    {
      title: 'Microservices',
      icon: feature3,
      content:
        'Simply configure your architecture, with APIs, data models, database, and more',
    },
    {
      title: 'Code Generation',
      icon: feature1,
      content: 'Automatically generate all boilerplate and infrastructure code',
    },
    {
      title: 'GitHub',
      icon: feature2,
      content:
        'Continuously get Pull Requests with the generated code to your Git repositories',
    },
    {
      title: 'Customize',
      icon: feature4,
      content: 'Freely customize and extend the generated code',
    },
  ];
  return (
    <>
      <section className="page-welcome-solution bg-transparent">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="solution">
            {features.map((item, index) => {
              return (
                <div
                  className="solution-card !flex align-items-center flex-column"
                  key={index}
                >
                  {item.icon && (
                    <div className="flex justify-center max-w-[96px] large:max-w-[120px]">
                      <Image
                        objectFit="cover"
                        src={item.icon}
                        alt={item.title ?? ''}
                      />
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
