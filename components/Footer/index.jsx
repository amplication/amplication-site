import FooterBanner from './FooterBanner';
import FooterBottomBar from './FooterBottomBar';
import FooterContent from './FooterContent';
import PropTypes from 'prop-types';

const Footer = ({customClass, compactView, hideBanner}) => {
  return (
    <>
      <footer className={'w-full mt-auto relative overflow-hidden z-10 laptop:mt-0 ' + customClass}>
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          {!compactView && (
            <>
              {/*Banner*/}
              {!hideBanner && <FooterBanner />}

              {/*Footer Main Content*/}
              <FooterContent />
            </>
          )}

          {/*Footer Bottom Bar*/}
          <FooterBottomBar />
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  customClass: PropTypes.string,
  compactView: PropTypes.bool,
  hideBanner: PropTypes.bool,
};

Footer.defaultProps = {
  customClass: '',
  isLink: false,
  hideBanner: false,
};

export default Footer;
