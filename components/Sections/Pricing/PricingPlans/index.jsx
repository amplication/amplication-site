import {StiggProvider, Paywall} from '@stigg/react-sdk';

export const PricingPlans = () => {
  return (
    <div className="stigg-wrapper">
      <StiggProvider apiKey={process.env.NEXT_PUBLIC_BILLING_API_KEY}>
        <Paywall
          textOverrides={{
            entitlementsTitle: plan => {
              return plan.basePlan
                ? `Everything in ${plan.basePlan.displayName} plan, plus:`
                : 'All core backend functionality:';
            },
            planCTAButton: {
              startNew: 'Start Now',
              upgrade: 'Upgrade now',
              custom: 'Contact us',
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
          onPlanSelected={async ({plan}) => {
            if (plan.id === 'plan-amplication-free') {
              window.location.href = 'https://app.amplication.com/login';
            } else if (plan.id === 'plan-amplication-pro') {
              window.location.href = 'https://app.amplication.com/purchase';
            } else {
              window.HubSpotConversations.widget.open();
            }
          }}
        />
      </StiggProvider>
    </div>
  );
};
