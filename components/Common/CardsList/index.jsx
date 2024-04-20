import Image from 'next/image';
import icon1 from '../../../public/images/icons/icon-1.svg';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const CardsList = ({ title, subTitle, cards, customClasses }) => {
  return (
    <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-4 p-4">
      {cards.map((item, index) => {
        return (
          <div
            className="flex p-12 gap-2 flex-col items-start text-left !border-dark-black-70 rounded-xl border-solid border bg-light-blue bg-[#442A8B] "
            key={index}
          >
            {item.icon && (
              <div className="w-[60px]">
                <Image src={item.icon} alt={item.title ?? ''} />
              </div>
            )}
            <span className="text-xl font-semibold ">{item.title}</span>
            {item.subTitle && (
              <span className="font-light text-base leading-normal text-white ">
                {item.subTitle}
              </span>
            )}
          </div>
        );
      })}
    </div>
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
