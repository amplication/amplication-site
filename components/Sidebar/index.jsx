import SharingBlock from "../Common/SharingBlock";
import SubscribeForm from "../Common/SubscribeForm";

const Sidebar = () => {
  return (
    <div className='laptop:pt-32 flex flex-col justify-start items-stretch w-full h-full'>
      <div className='w-full laptop:mb-16 order-2 laptop:order-1'>
        <SharingBlock />
      </div>
      <div className='medium:sticky medium:top-[7rem] w-full order-1 laptop:order-2 mb-14 laptop:mb-0'>
        <SubscribeForm
          isCompactView={true}
        />
      </div>
    </div>
  )
}

export default Sidebar
