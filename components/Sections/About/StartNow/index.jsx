import { useCallback } from 'react';
import Link from 'next/link';
import Button from '../../../Common/Button';
import * as analytics from '../../../../lib/analytics';

const PRIMARY_LINK = 'https://app.amplication.com/';
const PRIMARY_TITLE = 'Start Free';

const StartNow = () => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'footer',
      },
    });
  }, []);

  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'footer',
      },
    });
  }, []);

  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop !pt-8 !pb-10 desktop:!py-20">
        <h2 className="roadmap-heading text-center mx-auto !mb-8 max-w-[960px]">
          Build faster, with no limits
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <Link href={PRIMARY_LINK} passHref={true}>
            <a
              onClick={handleStartNowClick}
              target="_blank"
              className="btn btn-primary btn-sm !text-sm !h-10 mr-4 w-full max-w-[104px] !px-0 !h-[34px] !font-normal"
              rel="noreferrer"
            >
              {PRIMARY_TITLE}
            </a>
          </Link>

          <Button
            text={'Book a demo'}
            className="outline-button !text-sm !h-10 mr-2 w-full max-w-[104px] !px-0 !h-[34px] !font-normal !bg-light-blue hover:!bg-dark-black-60"
            isLink={true}
            href={process.env.NEXT_PUBLIC_BOOK_MEETING_URL}
            onClick={handleBookDemoClick}
            target={'_blank'}
          />
        </div>
      </section>
    </>
  );
};

export default StartNow;
