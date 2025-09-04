import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { concatClassnames } from '../utils';
import { useBannerDetection } from '../hooks/useBannerDetection';

const MainLayout = ({
  children,
  hideFooterBanner,
  footerCompactView,
  paddingTopClasses,
  hideTopBar = false
}) => {
  const hasBanner = useBannerDetection();

  return (
    <div
      className={concatClassnames(
        'page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden bg-purple-dark relative',
      )}
    >
      <Header hideBar={hideTopBar} />
      {/* Wrapper to handle banner offset for all content */}
      <div className={concatClassnames(
        'banner-offset-wrapper flex-1 flex flex-col',
        paddingTopClasses,
      )} style={{ marginTop: hasBanner ? '58px' : '0' }}>
        {children}
      </div>
      <Footer
        compactView={footerCompactView}
        hideBanner={hideFooterBanner}
      />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  hideFooterBanner: PropTypes.bool,
  footerCompactView: PropTypes.bool,
  paddingTopClasses: PropTypes.string,
  hideTopBar: PropTypes.bool
};

MainLayout.defaultProps = {
  hideFooterBanner: false,
  footerCompactView: false,
  paddingTopClasses: 'laptop:pt-[110px]',
  hideTopBar: false
};

export { MainLayout };
