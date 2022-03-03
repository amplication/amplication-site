import FooterBanner from "./FooterBanner";
import FooterBottomBar from "./FooterBottomBar";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <footer className='w-full mt-auto bg-purple-dark pt-3 relative overflow-hidden'>
      <div className='hidden laptop:block absolute w-[60%] h-[155%] rounded-[50%] bg-pink top-0 left-0 translate-x-[-50%] translate-y-[30%] opacity-20 blur-[300px]'></div>
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