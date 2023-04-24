import Hero from '../components/Sections/Enterprise/Hero';
import Slider from '../components/Sections/Enterprise/Slider';
import StartNow from '../components/Sections/Enterprise/StartNow';
import IconsGroup from '../components/Sections/Enterprise/IconsGroup';

import enterprise1 from '../public/images/enterprise/enterprise-1.png';
import enterprise2 from '../public/images/enterprise/enterprise-2.png';
import enterprise3 from '../public/images/enterprise/enterprise-3.png';
import enterprise4 from '../public/images/enterprise/enterprise-4.png';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';
import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  const features = [
    {
      image: enterprise1,
      title: 'All-in-One Platform',
      customClasses: '!pb-8',
      secondaryBtn: {
        title: 'Learn More',
        href: 'https://docs.amplication.com/getting-started/',
      },
      content:
        '<p>Amplication Enterprise makes the most of any use case from data-driven applications to complex workflows. Our platform automates the creation of any backend foundations with all standards built-in, so your developers can focus on creating custom solutions for your business.</p>',
    },
    {
      image: enterprise2,
      title: 'Unparalleled Efficiency and Speed',
      customClasses: '!pt-8',
      secondaryBtn: {
        title: 'Book a Demo',
        href: '/contact-us',
      },
      content:
        '<p>Amplication Enterprise allows you to build, manage and scale applications at the speed of light. With our platform you can create applications faster and with fewer resources. Generate all the necessary foundations for your service in a few clicks and tailor applications to your unique needs.</p>',
      buttons: [],
    },
    {
      image: enterprise3,
      title: 'Secure, Reliable Solutions',
      customClasses: '!pb-6',
      primaryBtn: {
        title: 'Contact Sales',
        href: '/contact-us',
      },
      secondaryBtn: {
        title: 'Start Now',
        href: 'https://app.amplication.com/login',
      },
      content:
        '<p>Amplication Enterprise includes built-in security measures that ensure the safety of your data and applications. Our platform offers Authentication and Authorization options, combined with regular audits, and ongoing vulnerability assessments, so you can rest assured that your applications will run smoothly and reliably.</p>',
    },
    {
      image: enterprise4,
      title: 'Seamless Integration and Scale',
      customClasses: '!pb-8',
      primaryBtn: {
        title: 'Contact Sales',
        href: '/contact-us',
      },
      secondaryBtn: {
        title: 'Start Now',
        href: 'https://app.amplication.com/login',
      },
      content:
        '<p>Amplication Enterprise is designed to grow with your business. Our platform integrates seamlessly with your existing CI/CD pipelines, enabling you to easily scale with increased business demand.</p>',
    },
  ];

  return (
    <>
      <NextSeo
        title="Building Enterprise Ready Backends | Amplication"
        description="Amplication is the most flexible open-source backend development platform for Node.JS applications. Design models and roles, deploy your app, connect with REST or GraphQL API, sync with GitHub. Built for developers, by developers."
        canonical={helpers.getCanonical('features')}
      />

      <main className="w-full font-poppins z-10 !mb-0 laptop:mb-[100px] amplication-base">
        <Hero />
        <Slider classes="!bg-light-blue" />

        {features.map((feature, i) => {
          return (
            <section
              className={
                'features-page-feature !py-10 desktop:!py-24 ' +
                (feature.customClasses ?? '')
              }
              key={i}
            >
              <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
                <div
                  className={
                    (i % 2 !== 0 ? 'flex-row-reverse ' : '') +
                    'row d-flex justify-content-between align-items-center feature-page-card py-0 laptop:py-6'
                  }
                >
                  <div
                    className={
                      (i % 2 !== 0 ? 'desktop:!px-9 ' : '') +
                      'col-sm-12 col-md-6 pb-0 desktop:pt-8 pr-3'
                    }
                  >
                    <div className="!text-[24px] desktop:!text-[32px] !leading-[36px] desktop:!leading-[48px] font-semibold pb-2">
                      {feature.title}
                    </div>
                    <div
                      className="text-sm desktop:text-lg text-white desktop:!leading-[27px] max-w-[600px]"
                      dangerouslySetInnerHTML={{__html: feature.content}}
                    ></div>
                    <div className="buttons-wrapper d-flex tablet:align-items-center justify-content-start mt-4">
                      {feature.primaryBtn && (
                        <Link href={feature.primaryBtn.href} passHref={true}>
                          <a className="btn btn-primary btn-sm !h-[34px] mb-2 mr-6 w-full !font-normal !text-sm !max-w-[140px]">
                            {feature.primaryBtn.title}
                          </a>
                        </Link>
                      )}
                      {feature.secondaryBtn && (
                        <Link
                          href={feature.secondaryBtn.href ?? ''}
                          passHref={true}
                        >
                          <a className="btn btn-outline-light btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]">
                            {feature.secondaryBtn.title}
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 desktop:left-4 desktop:top-6 feature-image"
                    data-aos="fade-up-left"
                  >
                    {feature.image && (
                      <Image
                        className="max-w-[710px] !visible"
                        src={feature.image}
                        alt={feature.title}
                        objectFit={'cover'}
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        <StartNow
          title="Supercharge Your Business Today"
          description="Discover how Amplication Enterprise can help you build powerful, scalable, and secure applications tailored to your business needs."
          linkPrimary={{
            href: '/contact-us',
            title: 'Book a Demo',
          }}
        />
        <IconsGroup />
        <StartNow
          title="Build faster, with no limits"
          description="Try Amplication Enterprise today and unlock the power of fast development cycles."
          linkPrimary={{
            href: 'https://app.amplication.com/login',
            title: 'Start Now',
          }}
        />
      </main>
    </>
  );
};
Features.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      hideFooterBanner={true}
      hideBackground={true}
    >
      {page}
    </MainLayout>
  );
};
export default Features;
