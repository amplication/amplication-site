import {useRef} from 'react';
import IframeResizer from 'iframe-resizer-react';
import Link from 'next/link';

const Testimonials = () => {
  const iframe = useRef();

  const testimonialLink =
    'https://embed.testimonial.to/grid/selected/amplication/0?theme=dark&autoplay=off&showmore=on&one-row=on&same-height=off';

  return (
    <>
      <section className="!pt-5 !pb-4 laptop:!px-14 laptop:!pt-24 laptop:!pb-20">
        <div className="flex-grow max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <h2 className="!text-3xl !text-5xl large:!text-[56px] !leading-tight !font-semibold tablet:text-center">
            What users are saying about Amplication?
          </h2>
          <div className="mt-16 relative pb-24">
            <IframeResizer
              autoResize={false}
              className="transition-all"
              heightCalculationMethod="lowestElement"
              src={testimonialLink}
              style={{width: '1px', minWidth: '100%'}}
              forwardRef={iframe}
            ></IframeResizer>
            <div className="absolute pt-48 inset-0 top-auto flex justify-content-center bg-[linear-gradient(180deg,_transparent_0%,_#15192c_60%,_#15192c_100%)]">
              <Link href={testimonialLink} passHref={true}>
                <a
                  target="_blank"
                  className="btn btn-outline-light btn-lg mb-4 text-black80"
                >
                  Show all testimonials
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
