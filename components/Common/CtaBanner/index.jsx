import { useCallback } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import * as analytics from '../../../lib/analytics';
import { useRouter } from 'next/router';

const CtaBanner = ({ bgVersion, title, subTitle, buttonText, buttonUrl }) => {
  const router = useRouter();

  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'blogPost',
        ctaVersion: bgVersion,
        pageUri: router.asPath,
      },
    });
  }, [bgVersion, router.asPath]);

  const bgStyle =
    bgVersion === 'version1'
      ? 'bg-cta-1-small tablet:bg-cta-1'
      : 'bg-cta-2-small tablet:bg-cta-2';

  const defaultTitle = (
    <>
      Automate and standardize <br /> backend development.
    </>
  );
  const defaultSubTitle = ' ';
  const defaultButtonText = 'Get a demo';
  const defaultButtonUrl = process.env.NEXT_PUBLIC_BOOK_MEETING_URL;

  return (
    <div
      className={`w-full px-4 py-4 tablet:px-12 tablet:py-16 my-10 rounded-2xl bg-no-repeat bg-cover bg-right-top relative min-h-[450px] tablet:min-h-[300px] border-3 border-white  ${bgStyle} `}
    >
      <div className="max-w-[320px] tablet:max-w-[500px]">
        <div className="font-bold text-white text-[32px] leading-[42px]">
          {title || defaultTitle}
        </div>
        <div className="font-regular text-white text-[18px] mt-2 mb-4">
          {subTitle || defaultSubTitle}
        </div>
        <Button
          text={buttonText || defaultButtonText}
          backgroundColor="purpleBright"
          hoverBackgroundColor="purpleBrightHover"
          isLink={true}
          onClick={handleStartNowClick}
          href={buttonUrl || defaultButtonUrl}
          className="text-[15px] h-[40px] min-w-[100px] whitespace-nowrap !px-4 !text-white !no-underline !inline"
          delayLinkMs={300}
        />
      </div>
    </div>
  );
};

CtaBanner.propTypes = {
  bgVersion: PropTypes.oneOf('version1', 'version2'),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

CtaBanner.defaultProps = {
  bgVersion: 'version1',
  title: undefined,
  subTitle: undefined,
  buttonText: undefined,
  buttonUrl: undefined,
};

export default CtaBanner;
