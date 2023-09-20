import PropTypes from 'prop-types';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';
import Button from '../../../Common/Button';

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
        <div className="flex flex-col items-center  justify-center bg-reward-success bg-no-repeat bg-center bg-80% h-full w-full max-laptop:bg-reward-mobile">
          <span className="block font-extrabold text-4xl">
            Congratulations!
          </span>
          <span className="block font-extrabold text-4xl max-w-[800px]">
            You&apos;ve won a 2-month Pro subscription to Amplication!
          </span>
          <Button
            text={'Claim your reward'}
            backgroundColor="transparent"
            hoverBackgroundColor="transparent"
            isLink={true}
            onClick={handleStartNowClick}
            href={`https://app.amplication.com/login?coupon-code=${couponCode}`}
            className="mt-8 border border-1 border-white rounded !py-2 !px-4 inline-flex"
            delayLinkMs={300}
          />
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
