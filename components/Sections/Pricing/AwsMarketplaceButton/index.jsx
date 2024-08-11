import Link from 'next/link';
import Image from 'next/image';
import AwsMarketPlaceLogo from '../../../../public/images/aws-marketplace.svg';
import { useCallback } from 'react';
import * as analytics from '../../../../lib/analytics';

export const AwsMarketplaceButton = () => {
  const handleClick = useCallback((e) => {
    analytics.event({
      action: 'awsMarketplaceButtonClicked',
      params: {
        buttonLocation: 'pricing-page',
      },
    });
  }, []);

  return (
    <Link href={'https://aws.amazon.com/marketplace/pp/prodview-gplydokkf64js'}>
      <a
        onClick={handleClick}
        className="w-[340px] m-auto  border border-1 border-white rounded  flex justify-center items-center gap-2 text-white font-normal text-center rounded py-2 laptop:font-medium transition-all duration-300"
        target="_blank"
      >
        <div className="flex justify-center items-center gap-2 pb-2">
          <div className="w-[9px] h-[9px] bg-success rounded" />
          Available on
        </div>
        <Image
          width={152}
          height={27}
          src={AwsMarketPlaceLogo}
          alt={'AWS Marketplace'}
        />
      </a>
    </Link>
  );
};
