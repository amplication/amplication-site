import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import IframeResizer from 'iframe-resizer-react';
const testimonialLink =
  'https://embed-v2.testimonial.to/w/amplication?theme=dark&card=base&loadMore=on&initialCount=20&tag=testimonial-page';



const Testimonials = () => {
  return (
    <>
      <NextSeo
        title="Testimonials: Flexible Backend Development Platform | Amplication"
        description="Read why users love Amplication. We're changing the game for Node.js app backend development. We provide open source plans as well as enterprise plans."
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        <section className="page-welcome">
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
            <IframeResizer
              autoResize={true}
              className="transition-all"
              heightCalculationMethod="lowestElement"
              src={testimonialLink}
              style={{ width: '1px', minWidth: '100%' }}
            ></IframeResizer>
          </div>
        </section>
      </main>
    </>
  );
};

Testimonials.getLayout = function getLayout(page) {
  return <MainLayout hideFooterBanner>{page}</MainLayout>;
};

export default Testimonials;
