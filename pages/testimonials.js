import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import IframeResizer from 'iframe-resizer-react';
import helpers from '../helpers';
const testimonialLink =
  'https://embed-v2.testimonial.to/grid/selected/amplication/0?theme=dark&autoplay=off&showmore=on&one-row=on&same-height=off';

const Testimonials = () => {
  return (
    <>
      <NextSeo
        title="Testimonials: Flexible Backend Development Platform | Amplication"
        description="Amplication is an open-source platform built by developers for developers. We provide forever-free community developer license alongside flexible enterprise plans"
        canonical={helpers.getCanonical('pricing')}
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        <section className="page-welcome">
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
            <IframeResizer
              autoResize={true}
              className="transition-all"
              heightCalculationMethod="lowestElement"
              src={testimonialLink}
              style={{width: '1px', minWidth: '100%'}}
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
