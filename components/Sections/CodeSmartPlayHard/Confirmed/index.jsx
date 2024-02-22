import Image from 'next/image';
import Link from 'next/link';
import icon6 from '../../../../public/images/db-import/icon-6.svg';
import icon7 from '../../../../public/images/db-import/icon-7.svg';
import icon8 from '../../../../public/images/db-import/icon-8.svg';
import PageSection from '../../../Common/PageSection';
import * as analytics from '../../../../lib/analytics';
import { useCallback } from 'react';

const links = [
  {
    title: 'Book a demo',
    subTitle:
      "See how to bring your applications to life quicker than you've ever imagined",
    to: 'https://meetings-eu1.hubspot.com/oalaluf/book-your-demo-mwc',
    icon: icon6,
    actionName: 'bookDemo',
  },
  {
    title: 'Try for free',
    subTitle: 'Sign up for our free 14-day Enterprise trial',
    to: 'https://app.amplication.com/login',
    icon: icon7,
    actionName: 'tryForFree',
  },
  {
    title: 'Learn more',
    subTitle:
      'Read our docs to learn how to create services and apps that meet the highest standards',
    to: 'https://docs.amplication.com/',
    icon: icon8,
    actionName: 'learnMore',
  },
];

const Hero = () => {
  const handleCtaClick = useCallback((actionName, to) => {
    analytics.event({
      action: 'raffleCtaClicked',
      params: {
        ctaLabel: actionName,
        url: to,
      },
    });
  }, []);

  return (
    <>
      <PageSection>
        <div className="my-[80px] min-h-[300px] w-full flex flex-col items-center  justify-between text-center ">
          <div className="w-full hero-blur--far"></div>
          <div className="flex flex-col gap-10 laptop:flex-row  justify-between flex-1 ">
            <div className="flex flex-col gap-2 flex-1 items-center max-w-[800px] ">
              <h1 className="text-5xl  laptop:text-7xl font-bold ">
                Success!
                <br /> You&apos;re in the Game!
              </h1>

              <div className="text-sm laptop:text-base large:text-lg text-white">
                Thank you for entering the Amplication Xbox Raffle! Your
                registration is now confirmed. The winner will be announced
                following the tradeshow&apos;s conclusion.
              </div>
            </div>
          </div>

          <div className="hidden laptop:block w-full hero-blur--side"></div>
        </div>
      </PageSection>
      <PageSection alternate className={'py-12'}>
        <div className="text-center flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-semibold">Build. Deploy. Accelerate.</h2>
        </div>
        <div className="w-full  flex flex-col laptop:flex-row gap-8 my-10 z-10 items-center laptop:items-stretch justify-center">
          {links.map((link, index) => (
            <Link href={link.to} passHref key={index}>
              <a
                target="_blank"
                onClick={() => {
                  handleCtaClick(link.actionName, link.to);
                }}
              >
                <div
                  className={
                    'text-center flex p-8 w-[300px] flex-col justify-start gap-8 items-center overflow-hidden border border-solid border-dark-black-70 bg-dark-black-100  h-full hover:shadow-hover-post rounded-lg p-4 min-h-[200px] '
                  }
                >
                  <Image height={40} src={link.icon} alt={link.title ?? ''} />
                  <div className="text-lg font-medium">{link.title}</div>
                  <div className="text-xs text-gray">{link.subTitle}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
};

export default Hero;
