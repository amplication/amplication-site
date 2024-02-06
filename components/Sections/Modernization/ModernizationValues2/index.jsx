import { useCallback } from 'react';
import Image from 'next/image';
import Feature1 from '../../../../public/images/modernization/production-ready.svg';
import Feature2 from '../../../../public/images/modernization/graph.svg';
import * as analytics from '../../../../lib/analytics';
import Link from 'next/link';

const items = [
  {
    image: Feature1,
    title: 'Enterprise-grade security',
    content:
      'Amplication prioritizes the security and compliance of your digital assets throughout the modernization process. We are SOC2 certified.',
  },
  {
    image: Feature2,
    title: 'Build for success',
    content:
      'Deliver robust and future-proof applications. Amplication-generated code is error-free, based on best practices and built-in standards, ensuring optimal performance.',
  },
];
const ModernizationValues2 = () => {
  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'application-modernization',
      },
    });
  }, []);

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
          <div className="gap-6 py-10 px-5 flex bg-dark-black-100 border rounded-xl border-dark-black-70 flex-column align-items-center  text-center! max-w-[350px]">
            <div>
              <div className=" text-lg text-center  text-white leading-[25px] !font-semibold !max-w-full !mt-[.75rem] pb-2">
                Revolutionize Your Legacy Services Today
              </div>
              <div className=" text-sm text-center text-white font-regular ">
                Learn how Amplication can help modernize your legacy systems and
                fast-track your digital transformation.
              </div>
            </div>
            <Link
              href={process.env.NEXT_PUBLIC_BOOK_MEETING_URL}
              passHref={true}
            >
              <a
                target="_blank"
                onClick={handleBookDemoClick}
                className="btn btn-primary btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]"
              >
                Book a Demo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernizationValues2;
