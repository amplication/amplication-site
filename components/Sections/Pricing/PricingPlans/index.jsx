import { useCallback } from 'react';
import { StiggProvider, Paywall } from '@stigg/react-sdk';
import * as analytics from '../../../../lib/analytics';

export const PricingPlans = () => {
  const handlePlanSelected = useCallback(({ plan }) => {
    if (plan.id === 'plan-amplication-free') {
      analytics.event({
        action: 'startNowClicked',
        params: {
          buttonLocation: 'website-pricing',
        },
      });
      window.location.href = 'https://app.amplication.com/login';
    } else if (plan.id === 'plan-amplication-essential') {
      analytics.event({
        action: 'upgradeEssentialClicked',
        params: {
          buttonLocation: 'website-pricing',
        },
      });
      window.location.href = 'https://app.amplication.com/purchase';
    } else {
      analytics.event({
        action: 'enterpriseContactUsClicked',
        params: {
          buttonLocation: 'website-pricing',
        },
      });
      window.location.href = process.env.NEXT_PUBLIC_BOOK_MEETING_URL;
    }
  }, []);

  return (
    <div className="stigg-wrapper">
      <StiggProvider apiKey={process.env.NEXT_PUBLIC_BILLING_API_KEY}>
        <Paywall
          textOverrides={{
            entitlementsTitle: (plan) => {
              return plan.basePlan
                ? `Everything in ${plan.basePlan.displayName} plan, plus:`
                : 'All core backend functionality:';
            },
            planCTAButton: {
              startNew: 'Start Now',
              upgrade: 'Upgrade Now',
              custom: 'Contact Us',
              startTrial: (plan) => `Book a Demo`,
            },
            price: {
              free: {
                price: '$0',
                unit: '',
              },
              custom: 'Contact Us',
              priceNotSet: 'Price not set',
            },
          }}
          onPlanSelected={handlePlanSelected}
        />
      </StiggProvider>
    </div>
  );
};
