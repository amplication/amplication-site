import CategoriesList from "../Common/CategoriesList";
import SharingBlock from "../Common/SharingBlock";
import SubscribeForm from "../Common/SubscribeForm";

const Sidebar = () => {
  return (
    <>
      <div className='w-full mb-14'>
        <SharingBlock />
      </div>
      <div className='w-full mb-14'>
        <SubscribeForm
          isCompactView={true}
        />
      </div>
    </>
  )
}

export default Sidebar