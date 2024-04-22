import { useEffect, useRef, useState } from 'react';
import helpers from '../../../../helpers';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import avatar1 from '../../../../public/images/testimonials/testimonial-1.png';
import avatar2 from '../../../../public/images/testimonials/testimonial-2.png';
import avatar5 from '../../../../public/images/testimonials/testimonial-5.png';
import avatar8 from '../../../../public/images/testimonials/testimonial-8.png';
import avatar9 from '../../../../public/images/testimonials/testimonial-9.png';

import Image from 'next/image';
import OutlineButton from '../../../Common/Button/button-outline';

const testimonials = [
  {
    text: "We've been able to have a high focus on our product requirements and specific functionality and this enables to move much faster than anything else I've ever worked on.",
    name: 'Patrick Mannion',
    position: 'Digital Solutions Architect, Whiskey House of Kentucky',
    avatar: avatar8,
  },
  {
    text: '...with the repetitive code automatically generated, we could focus on the custom application logic. As we are using Amplication, we can still dive deeper into the code and make changes.',
    name: 'Steven Xi Zhang',
    position: 'Co-Founder, UpChannels',
    avatar: avatar9,
  },
  {
    text: 'Amplication has helped us at OpenCures develop new API services faster in our work on health data software for preventive health care. ',
    name: 'Vincenzo Domina',
    position: 'OpenCures Inc.',
    avatar: avatar1,
  },
  {
    text: 'As we work in a non-monolithic way we use Amplication to create backend services. What we like about Amplication is its ease of use and the speed with which you get a robust and usable app.',
    name: 'Thibaut Lefort',
    position: 'CEO, Digital Copilote',
    avatar: avatar5,
  },
  {
    text: 'Amplication offering unparalleled flexibility and the ability to auto-generate production-ready backend in minutes.',
    name: 'Marko Denic',
    position: 'Senior Full-stack Developer, Ideenreich Websolutions',
    avatar: avatar2,
  },
];

const TestimonialsSlider = () => {
  const [width, setWidth] = useState(0);
  const [cols, setCols] = useState(3);

  useEffect(() => {
    window.addEventListener('resize', () => {
      //update the state only if the width changed more then 30px
      if (Math.abs(window.innerWidth - width) > 20) setWidth(window.innerWidth);

      //set cols based on the width
      if (window.innerWidth < 768) {
        setCols(1);
      } else if (window.innerWidth < 992) {
        setCols(2);
      } else {
        setCols(3);
      }

      setWidth(window.innerWidth);
    });
    setCols(window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3);
  }, []);

  return (
    <div className={'py-5 tablet:py-12 '}>
      <Swiper
        key={`${width}_${cols}`}
        className="!max-w-[100%] "
        slidesPerView={cols}
        freeMode={true}
        loop={true}
        spaceBetween={16}
        autoHeight={true}
        updateOnWindowResize={true}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
          clickableClass: 'swiper-pagination-clickable !relative pt-4',
          bulletClass: 'swiper-pagination-bullet !bg-white',
          bulletActiveClass:
            'swiper-pagination-bullet-active relative top-[1px] !bg-purple-bright !w-2.5 !h-2.5',
        }}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide key={index} className="self-stretch">
              <div className="h-full box-border overflow-hidden w-full flex flex-col gap-6 items-center rounded-xl border-solid border-2 bg-light-blue bg-[#442A8B]  border-purple-bright p-8 ">
                <div className="flex items-start gap-2">
                  <div className="min-w-[40px] !w-[40px] !h-[40px] rounded-[100%] overflow-hidden ">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        height={40}
                        width={40}
                        layout="responsive"
                      />
                    ) : (
                      <span className="text-lg bg-[#5d5dff] h-full flex items-center justify-center">
                        {helpers.getInitials(testimonial.name)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-sm ">
                      {testimonial.name}
                    </div>
                    <div className="font-normal text-xs ">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <div className="font-light text-sm max-laptop:text-sm font-semibold text-center text-white ">
                  <q>{testimonial.text}</q>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center justify-center mt-4">
        <OutlineButton
          text="Show all testimonials"
          isLink={true}
          href={'/testimonials'}
          delayLinkMs={300}
          className={'!w-auto !max-w-[200px]'}
        />
      </div>
    </div>
  );
};

export default TestimonialsSlider;
