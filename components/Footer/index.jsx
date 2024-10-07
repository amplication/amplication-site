import StartNow from '../../components/Sections/Enterprise/StartNow';
import FooterBottomBar from './FooterBottomBar';
import PropTypes from 'prop-types';
import FooterLinks from './FooterLinks';

const Footer = ({ compactView, hideBanner }) => {
  return (
    <>
      <footer
        className={
          'w-full mt-0 relative overflow-hidden z-10  bg-dark-black-100 font-poppins'
        }
      >
        <div className=" ">
          {!compactView && (
            <>
              {/*Banner*/}
              {!hideBanner && (
                <div className=" bg-light-blue">
                  <StartNow
                    title="Build smarter, better, faster"
                    description="Discover how Amplication Enterprise can help you build powerful, scalable, and secure applications tailored to your business needs."
                    linkPrimary={{
                      href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
                      title: 'Book a Demo',
                    }}
                    linkSecondary={{
                      href: 'https://app.amplication.com/login',
                      title: 'Try Free',
                    }}
                  />
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
  compactView: PropTypes.bool,
  hideBanner: PropTypes.bool,
};

Footer.defaultProps = {
  isLink: false,
  hideBanner: false,
};

export default Footer;
