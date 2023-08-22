import Image from 'next/image';
import feature1 from '../../../../public/images/features/feature1.svg';
import feature2 from '../../../../public/images/features/feature2.svg';
import feature3 from '../../../../public/images/features/feature3.svg';
import feature4 from '../../../../public/images/features/feature4.svg';

const features = [
  {
    title: 'Docker',
    icon: feature3,
    content:
      'Simply configure your architecture, with APIs, data models, database, and more',
  },
  {
    title: 'Database',
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
    title: 'Docker',
    icon: feature4,
    content: 'Freely customize and extend the generated code',
  },
];

const Features = () => {
  return (
    <>
      <h2 className="roadmap-heading !mb-2">
        How Amplication backend development platform works?
      </h2>
      <div className="solution max-laptop:!mx-0 !p-0 row">
        {features.map((item, index) => {
          return (
            <div
              className="solution-card !flex align-items-center p-8 py-6 flex-column !max-w-none !bg-light-blue !border-dark-black-70 rounded-lg border-solid border"
              key={index}
            >
              {item.icon && (
                <div className="flex justify-center max-w-[48px] large:max-w-[60px]">
                  <Image
                    objectFit="cover"
                    src={item.icon}
                    alt={item.title ?? ''}
                  />
                </div>
              )}
              <div
                className="solution-content text-base large:text-lg text-white text-center tablet:max-w-[270px] mt-[0.75rem] large:mt-3 large:!leading-7"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
