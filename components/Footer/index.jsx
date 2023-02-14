import StartNow from '../../components/Sections/About/StartNow';
import FooterBottomBar from './FooterBottomBar';
import PropTypes from 'prop-types';

const Footer = ({customClass, compactView, hideBanner}) => {
  return (
    <>
      <footer
        className={
          'w-full mt-auto relative overflow-hidden z-10 laptop:mt-0 ' +
          customClass
        }
      >
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          {!compactView && (
            <>
              {/*Banner*/}
              {!hideBanner && (
                <div className="amplication-base">
                  <StartNow
                    title="Build faster, with no limits"
                    linkPrimary={{
                      href: 'https://app.amplication.com/',
                      title: 'Get started',
                    }}
                    linkOutline={{
                      title: 'Contact us',
                    }}
                  />
                </div>
              )}

              {/*Footer Main Content*/}
              {/*<FooterContent />*/}
            </>
          )}
        </div>
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop relative z-10 flex justify-between items-center relative py-6 laptop:py-0 !max-w-[1904px]">
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
