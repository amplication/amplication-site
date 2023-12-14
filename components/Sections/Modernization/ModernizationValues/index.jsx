import Image from 'next/image';
import Feature1 from '../../../../public/images/modernization/faster.svg';
import Feature2 from '../../../../public/images/modernization/save-cost.svg';
import Feature3 from '../../../../public/images/modernization/flexible.svg';

const items = [
  {
    image: Feature1,
    title: 'Modernize faster',
    content:
      'Accelerate your transition from legacy to modern systems. Amplication automates the generation of secure, consistent, and scalable backend services, multiplying your development speed by 20X.',
  },
  {
    image: Feature2,
    title: 'Focus on business, not integrations',
    content:
      "Easily integrate with existing systems, ensuring a unified ecosystem for your entire development process. Amplication enhances your team's productivity, while allowing creation of custom code with familiar tools.",
  },
  {
    image: Feature3,
    title: 'Scalability and flexibility',
    content:
      "Ensure your systems scale to support growing demand. Our platform supports any architecture and is built to scale with your organization's needs.",
  },
];
const ModernizationValues = () => {
  return (
    <>
      <div>
        <div className="flex gap-10 flex-row flex-wrap justify-content-around align-items-start ">
          {items.map((item, index) => {
            return (
              <div
                className=" flex  flex-column align-items-center  text-center! max-w-[350px]"
                key={index}
              >
                <div className="flex min-w-[60px] max-w-[60px] h-[60px]">
                  <Image src={item.image} alt={item.title} />
                </div>

                <div className=" text-lg text-white leading-[25px] !font-semibold !max-w-full !mt-[.75rem] pb-2">
                  {item.title}
                </div>
                <div className=" text-sm text-center text-white font-regular ">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ModernizationValues;
