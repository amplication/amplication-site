import FooterBanner from "./FooterBanner";
import FooterBottomBar from "./FooterBottomBar";
import FooterContent from "./FooterContent";
import PropTypes from "prop-types";

const Footer = ({compactView, isBlog}) => {
  return (
    <>
      <footer className='w-full mt-auto relative overflow-hidden z-10 laptop:mt-0'>
        <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop'>

          {!compactView &&
            <>
              {/*Banner*/}
              <FooterBanner/>

              {/*Footer Main Content*/}
              <FooterContent/>
            </>
          }

          {/*Footer Bottom Bar*/}
          <FooterBottomBar/>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = {
  compactView: PropTypes.bool,
  isBlog: PropTypes.bool,
};

Footer.defaultProps = {
  isLink: false,
  isBlog: false
};

export default Footer
