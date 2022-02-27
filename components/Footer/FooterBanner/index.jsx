import Button from "../../Common/Button";
import Image from "next/image";

const FooterBanner = () => {
  return (
    <div className='bg-purple px-4 pt-9 my-5 flex flex-col justify-start items-center rounded border border-black border-solid'>
      <p className='font-poppins text-3xl font-semibold text-white text-center mb-7'>
        Free to Use. Open-source.
      </p>
      <div className='mb-7'>
        <Button
          text='Try amplication in 5 minutes'
          isAlignFull={false}
          backgroundColor='#15192C'
          isLink={true}
          href='https://amplication.com'
        />
      </div>
      <div className='flex justify-center items-center'>
        <Image
          src='/../public/images/footer_banner.png'
          width='330'
          height='240'
        />
      </div>
    </div>
  )
}

export default FooterBanner