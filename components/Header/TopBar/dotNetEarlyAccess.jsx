import Link from 'next/link';
import * as analytics from '../../../lib/analytics';
import { useCallback } from 'react';
import dotnetLogo from '../../../public/images/dotnet/dotnet_logo.svg';
import Image from 'next/image';

const EnterpriseTrialBar = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'dotNetEarlyAccessClicked',
    });
  }, []);

  return (
    <div className="relative z-10 w-full bg-light-blue laptop:mb-[-1px] py-1">
      <Link href="/dot-net-early-access">
        <a
          onClick={handleStartNowClick}
          className="w-full flex flex-col laptop:flex-row gap-1 laptop:gap-4 justify-center text-xs text-center items-center max-w-container m-container p-container py-2 cursor-pointer  "
        >
          <span className="flex flex-row items-center gap-4">
            Working with .NET? Sign up for early access here
            <span className="w-[30px] h-[30px] rounded-[4px] overflow-hidden flex items-center justify-center text-center">
              <Image
                src={dotnetLogo}
                alt={'.net logo'}
                width={30}
                height={30}
              />
            </span>
          </span>
        </a>
      </Link>
    </div>
  );
};

export default EnterpriseTrialBar;
