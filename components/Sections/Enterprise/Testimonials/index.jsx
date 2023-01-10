import {useState, useRef} from 'react';
import IframeResizer from 'iframe-resizer-react';

const Testimonials = () => {
  const iframe = useRef();
  const [showTestimonials, setShowTestimonials] = useState(false);

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
              src="https://embed.testimonial.to/grid/selected/amplication/0?theme=dark&autoplay=off&showmore=on&one-row=on&same-height=off"
              style={{ width: '1px', minWidth: '100%'}}
              forwardRef={iframe}
            ></IframeResizer>
            {
              !showTestimonials && (
                <div className="absolute pt-48 inset-0 top-auto flex justify-content-center bg-[linear-gradient(180deg,_transparent_0%,_#15192c_60%,_#15192c_100%)]">
                  <div
                    className="btn btn-outline-light btn-lg mb-4 text-black80"
                    onClick={() => {
                      if (!showTestimonials) {
                        iframe.current?.resize();
                      }
                      setShowTestimonials(!showTestimonials)
                    }}
                  >
                    {!showTestimonials
                      ? 'Show all testimonials'
                      : 'Hide testimonials'}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
