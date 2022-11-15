import Background from '../components/Background';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import {concatClassnames} from '../utils';

const MainLayout = ({
  children,
  hideBackground,
  hideFooterBanner,
  footerCompactView,
  footerClass,
  paddingTopClasses,
}) => {
  return (
    <div
      className={concatClassnames(
        'page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden bg-purple-dark relative',
        paddingTopClasses
      )}
    >
      <Header />
      {children}
      <Footer customClass={footerClass} compactView={footerCompactView} hideBanner={hideFooterBanner} />
      {!hideBackground && <Background />}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  hideBackground: PropTypes.bool,
  hideFooterBanner: PropTypes.bool,
  footerCompactView: PropTypes.bool,
  footerClass: PropTypes.string,
  paddingTopClasses: PropTypes.string,
};

MainLayout.defaultProps = {
  hideBackground: false,
  hideFooterBanner: false,
  footerCompactView: false,
  footerClass: '',
  paddingTopClasses: 'pt-[60px] laptop:pt-[110px]',
};

export {MainLayout};
