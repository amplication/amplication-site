import { useRef } from 'react';
import IframeResizer from 'iframe-resizer-react';
import Link from 'next/link';

const Testimonials = () => {
  const iframe = useRef();

  const testimonialLink =
    'https://embed-v2.testimonial.to/w/amplication?theme=dark&card=base&loadMore=off&initialCount=5&tag=testimonial-page';

  return (
    <>
      <h2 className="roadmap-heading !mb-2 tablet:text-center">
        What users are saying about Amplication?
      </h2>
      <div className="mt-4 laptop:mt-16 relative pb-24">
        <IframeResizer
          autoResize={false}
          className="transition-all"
          src={testimonialLink}
          style={{ width: '1px', minWidth: '100%', minHeight: '400px' }}
          forwardRef={iframe}
        ></IframeResizer>
        <div className="absolute pt-48 inset-0 top-auto flex justify-content-center bg-[linear-gradient(180deg,_transparent_0%,_#15192c_60%,_#15192c_100%)]">
          <Link href="/testimonials" passHref={true}>
            <a className="btn btn-outline-light btn-lg mb-4 text-black80 btn-sm !h-[34px] !font-normal !text-sm">
              Show all testimonials
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
