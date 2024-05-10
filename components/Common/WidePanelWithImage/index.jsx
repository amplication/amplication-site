import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import OutlineButton from '../../Common/Button/button-outline';
import PrimaryButton from '../../Common/Button/button-primary';

const WidePanelWithImage = ({
  image,
  title,
  customClasses,
  primaryBtn,
  secondaryBtn,
  content,
  children,
  alternate,
  fullWidth,
}) => {
  return (
    <div
      className={`w-full grid grid-cols-1 ${
        fullWidth
          ? 'max-w-[1100px] m-auto gap-4'
          : 'tablet:grid-cols-2 gap-8 tablet:gap-16'
      }    content-center item-center py-8 ${customClasses}`}
    >
      <div
        className={`flex flex-col  ${
          fullWidth
            ? 'text-center tablet:text-center items-center justify-center'
            : 'text-left tablet:text-left items-start '
        }   justify-center ${alternate && 'order-1 tablet:order-2'}`}
      >
        <div className="!text-[24px] desktop:!text-[32px] !leading-[36px] desktop:!leading-[48px] font-semibold pb-2">
          {title}
        </div>
        <div
          className={`text-sm desktop:text-base text-white  ${
            fullWidth ? 'max-w-[750px]' : 'max-w-[600px]'
          }`}
        >
          {content}
        </div>
        {children}
        <div className="buttons-wrapper d-flex tablet:align-items-center justify-content-start mt-4">
          {primaryBtn && (
            <PrimaryButton
              text={primaryBtn.title}
              isLink={true}
              href={primaryBtn.href}
              delayLinkMs={300}
            />
          )}
          {secondaryBtn && (
            <OutlineButton
              text={secondaryBtn.title}
              isLink={true}
              href={secondaryBtn.href}
              delayLinkMs={300}
            />
          )}
        </div>
      </div>
      <div className={`order-1 ${fullWidth && 'flex items-center'}`}>
        {image && <Image src={image} alt={title} objectFit={'cover'} />}
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
  alternate: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

WidePanelWithImage.defaultProps = {
  image: '',
  title: '',
  customClasses: '',
  primaryBtn: undefined,
  secondaryBtn: undefined,
  content: '',
  alternate: false,
  fullWidth: false,
};

export default WidePanelWithImage;
