import Image from 'next/image';
import icon1 from '../../../public/images/icons/icon-1.svg';
import PropTypes from 'prop-types';

import {useEffect, useState} from 'react';

// eslint-disable-next-line node/no-missing-import
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';

const CardsList = ({title, subTitle, cards, customClasses}) => {
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

  return (
    <section className={'!bg-light-blue !py-[100px] ' + customClasses}>
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        {title && (
          <h2 className="mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
            {title}
          </h2>
        )}
        {subTitle && (
          <div className="mx-auto text-lg font-normal leading-[27px] tracking-normal text-center max-w-[780px]">
            {subTitle}
          </div>
        )}
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
              {cards.map((item, index) => {
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
                      className="mt-2 text-xl mb-1 font-bold text-center"
                      style={{color: '#A787FF'}}
                      dangerouslySetInnerHTML={{__html: item.title}}
                    ></span>
                    {item.subTitle && (
                      <span
                        className="font-normal text-[0.875rem] tablet:!text-base laptop:!text-lg leading-normal text-center text-white max-w-[360px]"
                        dangerouslySetInnerHTML={{__html: item.subTitle}}
                      ></span>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            cards.map((item, index) => {
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
                    className="mt-2 text-xl mb-1 font-bold text-center"
                    style={{color: '#A787FF'}}
                    dangerouslySetInnerHTML={{__html: item.title}}
                  ></span>
                  {item.subTitle && (
                    <span
                      className="font-normal text-[0.875rem] tablet:!text-base laptop:!text-lg leading-normal text-center text-white max-w-[360px]"
                      dangerouslySetInnerHTML={{__html: item.subTitle}}
                    ></span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

CardsList.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  cards: PropTypes.arrayOf({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    icon: PropTypes.string,
  }),
  customClasses: PropTypes.string,
};

const items = [
  {
    title: 'example item',
    subTitle: 'example text for a card item',
    icon: icon1,
  },
];

CardsList.defaultProps = {
  title: '',
  subTitle: '',
  cards: items,
  customClasses: '',
};

export default CardsList;
