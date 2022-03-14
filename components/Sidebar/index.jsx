import SharingBlock from "../Common/SharingBlock";
import SubscribeForm from "../Common/SubscribeForm";

const Sidebar = () => {
  return (
    <div className='laptop:pt-32'>
      <div className='w-full mb-16'>
        <SharingBlock />
      </div>
      <div className='w-full'>
        <SubscribeForm
          isCompactView={true}
        />
      </div>
    </div>
  )
}

export default Sidebar