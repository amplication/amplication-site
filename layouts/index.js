import Background from "../components/Background";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";

const Layout = ({
  children,
  hideBackground,
  hideFooterBanner,
  footerCompactView,
}) => {
  return (
    <div className="page min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[110px] bg-purple-dark relative">
      <Header />
      {children}
      <Footer compactView={footerCompactView} hideBanner={hideFooterBanner} />
      {!hideBackground && <Background />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  hideBackground: PropTypes.bool,
  hideFooterBanner: PropTypes.bool,
  footerCompactView: PropTypes.bool,
};

Layout.defaultProps = {
  hideBackground: false,
  hideFooterBanner: false,
  footerCompactView: false,
};

export default Layout;
