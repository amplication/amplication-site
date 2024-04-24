import { useCallback } from 'react';
import Image from 'next/image';
import * as analytics from '../../../lib/analytics';
import PrimaryButton from '../Button/button-primary';
import PropTypes from 'prop-types';

const DescriptionStripe = ({ items, ctaItem }) => {
  const handleCtaClick = useCallback(() => {
    analytics.event({
      action: ctaItem.buttonEvent.action,
      params: ctaItem.buttonEvent.params,
    });
  }, [ctaItem]);

  return (
    <>
      <div>
        <div className="flex gap-10 flex-row flex-wrap justify-around items-start ">
          {items.map((item, index) => {
            return (
              <div
                className=" flex  flex-col items-center  text-center! max-w-[350px]"
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
          {ctaItem && (
            <div className="gap-6 py-10 px-5 flex bg-dark-black-100 border rounded-xl border-dark-black-70 flex-col items-center  text-center! max-w-[350px]">
              <div>
                <div className=" text-lg text-center  text-white leading-[25px] !font-semibold !max-w-full !mt-[.75rem] pb-2">
                  {ctaItem.title}
                </div>
                <div className=" text-sm text-center text-white font-regular ">
                  {ctaItem.content}
                </div>
              </div>
              <PrimaryButton
                text={ctaItem.buttonTitle}
                isLink={true}
                onClick={handleCtaClick}
                href={ctaItem.buttonLink}
                target="_blank"
                delayLinkMs={300}
              ></PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

DescriptionStripe.propTypes = {
  items: PropTypes.arrayOf({
    image: PropTypes.node,
    title: PropTypes.string,
    content: PropTypes.string,
  }),

  ctaItem: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonTitle: PropTypes.string,
    buttonEvent: PropTypes.shape({
      action: PropTypes.string,
      params: PropTypes.object,
    }),
  }),
};

DescriptionStripe.defaultProps = {
  items: [],
  ctaItem: undefined,
};

export default DescriptionStripe;
