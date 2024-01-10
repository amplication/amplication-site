import Image from 'next/image';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import * as analytics from '../../../lib/analytics';
import OutlineButton from '../../Common/Button/button-outline';
import PrimaryButton from '../../Common/Button/button-primary';

const PageHero = ({
  title,
  subTitle,
  subText,
  mainButton,
  secondaryButton,
  image,
}) => {
  const handleMainClick = useCallback(() => {
    analytics.event({
      action: mainButton.eventName,
      params: mainButton.eventParams,
    });
  }, [mainButton.eventName, mainButton.eventParams]);

  const handleSecondaryClick = useCallback(() => {
    analytics.event({
      action: secondaryButton.eventName,
      params: secondaryButton.eventParams,
    });
  }, [secondaryButton.eventName, secondaryButton.eventParams]);
  return (
    <>
      <div className="relative w-full flex flex-col laptop:flex-row items-center  justify-between  laptop:h-[calc(100vh-90px)] text-center min-h-[600px]">
        <div className="laptop:!max-w-[50%]">
          <div className="text-center laptop:text-left mt-12 laptop:mt-0 max-w-[500px] laptop:max-w-[none]">
            <h1 className="text-2xl laptop:text-4xl desktop:text-5xl font-bold ">
              {title}
            </h1>
            <h2 className="text-lg laptop:text-2xl desktop:text-3xl  font-semibold">
              {subTitle}
            </h2>
            <div className="text-sm laptop:text-base large:text-lg text-white !mt-3 !mb-4 !max-w-[710px]">
              {subText}
            </div>
          </div>
          <div className="flex items-center justify-center laptop:justify-start tablet:items-center mt-2 gap-4">
            <PrimaryButton
              text={mainButton.text}
              backgroundColor="purpleBright"
              hoverBackgroundColor="purpleBrightHover"
              isLink={true}
              onClick={handleMainClick}
              href={mainButton.href}
              delayLinkMs={300}
            />
            <OutlineButton
              text="Try Free"
              isLink={true}
              onClick={handleSecondaryClick}
              href={'https://app.amplication.com/login'}
              delayLinkMs={300}
            />
          </div>
        </div>
        <div className="relative items-center middle:!max-w-[90%] w-full middle:min-h-[600px] flex medium:!max-w-[46%]">
          <div className="absolute laptop:my-auto w-[50vw] -left-16 max-medium:w-full max-medium:left-0 max-medium:relative medium:flex align-items-center">
            <Image src={image.src} alt={image.alt} />
          </div>
        </div>
      </div>
    </>
  );
};

PageHero.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  subText: PropTypes.string,
  mainButton: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    eventName: PropTypes.string,
    eventParams: PropTypes.object,
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    eventName: PropTypes.string,
    eventParams: PropTypes.object,
  }),
  image: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }),
};

export default PageHero;
