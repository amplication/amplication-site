import IframeResizer from 'iframe-resizer-react';

const Testimonials = () => {
  return (
    <section className="!bg-transparent">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="row align-items-center justify-content-center mb-6 large:mb-14">
          <h2 className="h2 !text-4xl large:!text-[50px] text-center">
            What users are saying about Amplication?
          </h2>
        </div>
        <div className="row align-items-center justify-content-center">
          <IframeResizer
            src="https://embed.testimonial.to/carousel/all/amplication?theme=light&autoplay=off&showmore=on&one-row=on&same-height=on"
            style={{width: '1px', minWidth: '100%'}}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
