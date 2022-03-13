import Button from "../../Common/Button";
import Image from "next/image";
import footerBanner from '../../../public/images/footer_banner.png';
import footerBannerDesktop from '../../../public/images/footer_banner_desktop.png';

const FooterBanner = () => {
  return (
    <div className='bg-purple px-4 pt-9 my-5 flex flex-col justify-start items-center rounded-lg laptop:flex-row laptop:justify-between laptop:p-0 overflow-hidden relative'>
      <div className='absolute block w-[250%] h-[250%] left-[-125%] bg-radial-gradient top-[-5%] laptop:w-[230%] laptop:h-[230%] laptop:left-[-100%] laptop:top-[-20%]'></div>
      <div className='relative laptop:order-2 laptop:pr-20 laptop:pl-5 laptop:w-[34rem] laptop:pt-14 laptop:pb-7 shrink-0 grow'>
        <p className='font-poppins text-3xl font-semibold text-white text-center mb-7 laptop:text-6xl laptop:mb-10'>
          Free to Use. Open-source.
        </p>
        <div className='mb-7 laptop:flex laptop:justify-center'>
          <Button
            text='Try amplication in 5 minutes'
            isAlignFull={false}
            backgroundColor='purpleDark'
            isLink={true}
            href='https://amplication.com'
          />
        </div>
      </div>
      <div className='flex justify-center items-center laptop:order-1 laptop:grow laptop:mt-auto'>
        <div className='flex flex-col justify-end laptop:hidden'>
          <Image
            src={footerBanner}
            objectPosition='center bottom'
            alt=''
          />
        </div>
        <div className='hidden laptop:flex laptop:flex-col laptop:justify-end'>
          <Image
            src={footerBannerDesktop}
            objectPosition='center bottom'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
