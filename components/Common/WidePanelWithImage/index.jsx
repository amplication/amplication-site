import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const WidePanelWithImage = ({
  image,
  title,
  customClasses,
  primaryBtn,
  secondaryBtn,
  content,
  children,
}) => {
  return (
    <div
      className={`row d-flex justify-content-between align-items-center feature-page-card py-0 laptop:py-6  ${customClasses}`}
    >
      <div className={'col-sm-12 col-md-6 pb-0 desktop:pt-8 pr-3'}>
        <div className="!text-[24px] desktop:!text-[32px] !leading-[36px] desktop:!leading-[48px] font-semibold pb-2">
          {title}
        </div>
        <div
          className="text-sm desktop:text-lg text-white desktop:!leading-[27px] max-w-[600px]"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {children}
        <div className="buttons-wrapper d-flex tablet:align-items-center justify-content-start mt-4">
          {primaryBtn && (
            <Link href={primaryBtn.href} passHref={true}>
              <a className="btn btn-primary btn-sm !h-[34px] mb-2 mr-6 w-full !font-normal !text-sm !max-w-[140px]">
                {primaryBtn.title}
              </a>
            </Link>
          )}
          {secondaryBtn && (
            <Link href={secondaryBtn.href ?? ''} passHref={true}>
              <a className="btn btn-outline-light btn-sm !h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px]">
                {secondaryBtn.title}
              </a>
            </Link>
          )}
        </div>
      </div>
      <div
        className="col-sm-12 col-md-6 desktop:left-4 desktop:top-6 feature-image"
        data-aos="fade-up-left"
      >
        {image && (
          <Image
            className="max-w-[710px] !visible"
            src={image}
            alt={title}
            objectFit={'cover'}
          />
        )}
      </div>
    </div>
  );
};

WidePanelWithImage.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string,
  title: PropTypes.string,
  customClasses: PropTypes.string,
  primaryBtn: {
    title: PropTypes.string,
    href: PropTypes.string,
  },
  secondaryBtn: {
    title: PropTypes.string,
    href: PropTypes.string,
  },
  content: PropTypes.string,
};

WidePanelWithImage.defaultProps = {
  image: '',
  title: '',
  customClasses: '',
  primaryBtn: undefined,
  secondaryBtn: undefined,
  content: '',
};

export default WidePanelWithImage;
