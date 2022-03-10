import FooterText from "../FooterText";
import FooterMenu from "../FooterMenu";
import SocialList from "../../Common/SocialList";

const FooterContent = () => {
  return (
    <div className='w-full mt-9 laptop:flex laptop:justify-end laptop:items-center laptop:py-28 laptop:my-0 relative'>

      {/*Footer Main Text*/}
      <FooterText />

      {/*Footer Menu*/}
      <FooterMenu />

      {/*Footer Sharing Block*/}
      <SocialList />

    </div>
  )
}

export default FooterContent
