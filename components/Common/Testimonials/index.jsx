import IframeResizer from 'iframe-resizer-react';

const Testimonials = () => {
  return (
    <section className="!bg-light-blue !py-10 !pb-4 laptop:!pt-36 laptop:!pb-28">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="row align-items-center justify-content-center">
          <IframeResizer
            src="https://embed.testimonial.to/carousel/all/amplication?theme=light&autoplay=on&showmore=off&one-row=on&same-height=on"
            style={{width: '1px', minWidth: '100%'}}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
