import PropTypes from 'prop-types';
import { useCallback } from 'react';
import * as analytics from '../../../lib/analytics';
import OutlineButton from '../../Common/Button/button-outline';
import PrimaryButton from '../../Common/Button/button-primary';

const VerticalPageHero = ({
  title,
  subTitle,
  subText,
  mainButton,
  secondaryButton,
  imageNode,
}) => {
  const handleMainClick = useCallback(() => {
    analytics.event({
      action: mainButton?.eventName,
      params: mainButton?.eventParams,
    });
  }, [mainButton]);

  const handleSecondaryClick = useCallback(() => {
    analytics.event({
      action: secondaryButton?.eventName,
      params: secondaryButton?.eventParams,
    });
  }, [secondaryButton]);
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-between  text-center min-h-[600px] gap-8 ">
        <div className="laptop:!max-w-[50%]">
          <div className=" flex flex-col gap-2 text-center items-center mt-32 max-w-[500px] laptop:max-w-[none]">
            <h1 className="text-4xl desktop:text-5xl font-semibold ">
              {title}
            </h1>
            <h2 className="text-2xl desktop:text-3xl  font-semibold">
              {subTitle}
            </h2>
            <div className="text-base desktop:text-lg text-white  !max-w-[710px]">
              {subText}
            </div>
          </div>
          <div className="flex items-center justify-center   mt-8 gap-4">
            {mainButton && (
              <PrimaryButton
                text={mainButton.text}
                backgroundColor="purpleBright"
                hoverBackgroundColor="purpleBrightHover"
                isLink={true}
                onClick={handleMainClick}
                href={mainButton.href}
                delayLinkMs={300}
              />
            )}
            {secondaryButton && (
              <OutlineButton
                text={secondaryButton.text}
                isLink={true}
                onClick={handleSecondaryClick}
                href={secondaryButton.href}
                delayLinkMs={300}
              />
            )}
          </div>
        </div>
        <div className="relative flex items-center max-w-[600px] mb-8 w-full laptop:min-h-[600px] laptop:!max-w-[46%] laptop:mb-0 ">
          <div className="">{imageNode}</div>
        </div>
      </div>
    </>
  );
};

VerticalPageHero.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  imageNode: PropTypes.node,
};

export default VerticalPageHero;
