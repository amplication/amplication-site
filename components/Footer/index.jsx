import FooterBanner from './FooterBanner';
import FooterContent from './FooterContent';
import FooterBottomBar from './FooterBottomBar';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";

const Footer = ({customClass, compactView, hideBanner}) => {
  const router = useRouter();
  console.log(router.asPath)
  const showFooterContent = Boolean(
      router.asPath === '/' || router.asPath === '/about'
  );

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
              {!hideBanner && <FooterBanner />}

              {/*Footer Main Content*/}
              {showFooterContent &&
                  <FooterContent />
              }
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
