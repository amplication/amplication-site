import Image from 'next/image';
import icon1 from '../../../../public/images/icons/icon-1.svg';
import icon2 from '../../../../public/images/icons/icon-2.svg';
import icon3 from '../../../../public/images/icons/icon-3.svg';
import icon4 from '../../../../public/images/icons/icon-4.svg';
import icon5 from '../../../../public/images/icons/icon-5.svg';
import icon6 from '../../../../public/images/icons/icon-6.svg';
import icon7 from '../../../../public/images/icons/icon-7.svg';
import icon8 from '../../../../public/images/icons/icon-8.svg';
import icon9 from '../../../../public/images/icons/icon-9.svg';

import {useEffect, useState} from 'react';

// eslint-disable-next-line node/no-missing-import
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';

const IconsGroup = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 991) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      setIsMobile(window.innerWidth < 992);
    });
    setIsMobile(window.innerWidth < 992);
  }, []);

  const items = [
    {
      title: 'Financial Services',
      icon: icon1,
    },
    {
      title: 'Healthcare',
      icon: icon2,
    },
    {
      title: 'Manufacturing',
      icon: icon3,
    },
    {
      title: 'Retail and E-commerce',
      icon: icon4,
    },
    {
      title: 'Government and<br /> Public Sector',
      icon: icon5,
    },
    {
      title: 'Logistics and<br /> Supply Chain',
      icon: icon6,
    },
    {
      title: 'Energy and Utilities',
      icon: icon7,
    },
    {
      title: 'Media and<br /> Entertainment',
      icon: icon8,
    },
    {
      title: 'Telecommunications',
      icon: icon9,
    },
  ];

  return (
    <section className="!bg-light-blue !py-[100px]">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <h2 className="mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
          Industries We Serve
        </h2>
        <div className="mx-auto text-lg font-normal leading-[27px] tracking-normal text-center max-w-[780px]">
          Amplication Enterprise helps companies across wide range of
          industries, including:
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-6 mx-[-12px]">
          {isMobile ? (
            <Swiper
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              autoHeight={false}
              className="pb-4"
            >
              {items.map((item, index) => {
                return (
                  <SwiperSlide
                    className="flex-[1] mx-[12px] max-w-[300px] min-w-[250px] mt-6 flex text-lg font-semibold leading-[27px] tracking-normal text-center align-items-center justify-content-center p-8 py-6 flex-column !border-dark-black-70 rounded-lg border-solid border"
                    key={index}
                  >
                    {item.icon && (
                      <Image
                        objectFit="cover"
                        src={item.icon}
                        alt={item.title ?? ''}
                      />
                    )}
                    <span
                      className="mt-2"
                      dangerouslySetInnerHTML={{__html: item.title}}
                    ></span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            items.map((item, index) => {
              return (
                <div
                  className="flex-[1] mx-[12px] max-w-[300px] min-w-[250px] mt-6 flex text-lg font-semibold leading-[27px] tracking-normal text-center align-items-center p-8 py-6 flex-column !border-dark-black-70 rounded-lg border-solid border"
                  key={index}
                >
                  {item.icon && (
                    <Image
                      objectFit="cover"
                      src={item.icon}
                      alt={item.title ?? ''}
                    />
                  )}
                  <span
                    className="mt-2"
                    dangerouslySetInnerHTML={{__html: item.title}}
                  ></span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default IconsGroup;
