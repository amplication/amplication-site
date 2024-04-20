import StartNow from '../../components/Sections/About/StartNow';
import FooterBottomBar from './FooterBottomBar';
import PropTypes from 'prop-types';
import FooterLinks from './FooterLinks';

const Footer = ({ compactView, hideBanner }) => {
  return (
    <>
      <footer
        className={
          'w-full mt-0 relative overflow-hidden z-10  bg-dark-black-100 '
        }
      >
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop bg-light-blue">
          {!compactView && (
            <>
              {/*Banner*/}
              {!hideBanner && (
                <div className="amplication-base ">
                  <StartNow />
                </div>
              )}
            </>
          )}
        </div>
        <FooterLinks />
        <FooterBottomBar />
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
