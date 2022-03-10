import FooterBanner from "./FooterBanner";
import FooterBottomBar from "./FooterBottomBar";
import FooterContent from "./FooterContent";
import PropTypes from "prop-types";

const Footer = ({compactView}) => {
  return (
    <footer className='w-full mt-auto pt-3 relative overflow-hidden z-10'>
      {!compactView &&
        <div className='hidden laptop:block absolute w-[60%] h-[155%] rounded-[50%] bg-pink top-0 left-0 translate-x-[-50%] translate-y-[30%] opacity-20 blur-[300px]'></div>
      }

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
  )
}

Footer.propTypes = {
  compactView: PropTypes.bool,
};

Footer.defaultProps = {
  isLink: false,
};

export default Footer
