import Link from 'next/link';
const PRIMARY_LINK = 'https://app.amplication.com/';
import * as analytics from '../../../lib/analytics';
import { useCallback } from 'react';

const EnterpriseTrialBar = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'enterprise-trial-bar',
      },
    });
  }, []);

  return (
    <div className="relative z-10 w-full bg-light-blue laptop:mb-[-1px]">
      <Link href={PRIMARY_LINK}>
        <a
          onClick={handleStartNowClick}
          className="w-full flex flex-col laptop:flex-row gap-1 laptop:gap-4 justify-center text-xs text-center items-center max-w-container m-container p-container py-2 cursor-pointer  "
        >
          <span>
            Try Amplication Enterprise free for 14 days. No credit card
            required.
          </span>
        </a>
      </Link>
    </div>
  );
};

export default EnterpriseTrialBar;
