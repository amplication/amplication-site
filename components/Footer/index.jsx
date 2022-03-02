import FooterBanner from "./FooterBanner";
import FooterBottomBar from "./FooterBottomBar";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <footer className='w-full mt-auto bg-purple-dark pt-3'>
      <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop'>

        {/*Banner*/}
        <FooterBanner/>

        {/*Footer Main Content*/}
        <FooterContent/>

        {/*Footer Bottom Bar*/}
        <FooterBottomBar/>

      </div>
    </footer>
  )
}

export default Footer