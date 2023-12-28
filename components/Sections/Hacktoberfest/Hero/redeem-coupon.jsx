import PropTypes from 'prop-types';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';
import Button from '../../../Common/Button';
import Link from 'next/link';

const RedeemCoupon = ({ couponCode }) => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'redeemCouponClicked',
      params: {
        couponCode,
      },
    });
  }, [couponCode]);

  return (
    <>
      <div className="relative w-full flex flex-col items-center  justify-center  h-[calc(100vh-90px)] text-center bg-grid min-h-[600px]">
        <div className="p-8 tablet:p-0 flex flex-col items-center  justify-center bg-reward-success bg-no-repeat bg-center bg-80% h-full w-full max-laptop:bg-reward-mobile">
          <span className="block font-extrabold tablet:text-4xl max-w-[700px] text-2xl mt-20 tablet:mt-0">
            You&apos;ve just won a 2-month Amplication Pro subscription!
          </span>
          <span className="hidden tablet:block block font-extrabold tablet:text-4xl max-w-[700px] text-2xl mt-8">
            Take your projects to the next level with our premium features.
          </span>
          <div className=" max-w-[960px] flex flex-col items-center mt-4 tablet:mt-12 laptop:border border-solid border-purple  rounded-2xl laptop:bg-purple-dark p-12 tablet:px-32 px-8 ">
            <span className="text-2xl">
              To claim your prize click below and you&apos;ll be transferred to
              the Amplication app.
            </span>

            <Button
              text={'Claim your reward'}
              backgroundColor="purpleBright"
              hoverBackgroundColor="purpleBrightHover"
              isLink={true}
              onClick={handleStartNowClick}
              href={`https://app.amplication.com/login?coupon-code=${couponCode}`}
              className="mt-8 text-[15px] h-[40px]  w-[250px] whitespace-nowrap !px-4 !text-white !no-underline !inline"
              delayLinkMs={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

RedeemCoupon.propTypes = {
  couponCode: PropTypes.string,
};

RedeemCoupon.defaultProps = {
  couponCode: '',
};

export default RedeemCoupon;
