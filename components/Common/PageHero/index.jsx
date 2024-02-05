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
  imageNode,
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
      <div className="relative w-full flex gap-8 flex-col laptop:flex-row items-center  justify-between  laptop:h-[calc(100vh-90px)] text-center min-h-[600px] max-h-[800px]">
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
              text={secondaryButton.text}
              isLink={true}
              onClick={handleSecondaryClick}
              href={secondaryButton.href}
              delayLinkMs={300}
            />
          </div>
        </div>
        <div className="relative flex items-center max-w-[600px] mb-8 w-full laptop:min-h-[600px] laptop:!max-w-[46%] laptop:mb-0 ">
          <div>{imageNode}</div>
        </div>
      </div>
    </>
  );
};

PageHero.propTypes = {
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

export default PageHero;
