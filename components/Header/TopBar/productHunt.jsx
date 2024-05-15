import Link from 'next/link';
import * as analytics from '../../../lib/analytics';
import { useCallback } from 'react';
import dotnetLogo from '../../../public/images/dotnet/dotnet_logo.svg';
import Image from 'next/image';

const ProductHuntBar = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'productHuntBarClicked',
    });
  }, []);

  return (
    <div className="relative z-10 w-full bg-jovu-gradient laptop:mb-[-1px] py-1">
      <Link href="https://www.producthunt.com/posts/jovu-by-amplication">
        <a
          target="_blank"
          onClick={handleStartNowClick}
          className="w-full flex flex-col laptop:flex-row gap-1 laptop:gap-4 justify-center text-xs text-center items-center max-w-container m-container p-container py-2 cursor-pointer  "
        >
          <span className="flex flex-row items-center gap-4">
            Our new AI is LIVE NOW on Product Hunt 🐱 Support the coding
            revolution here
          </span>
        </a>
      </Link>
    </div>
  );
};

export default ProductHuntBar;
