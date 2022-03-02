import Logo from "../Logo";
import Menu from "../Menu";

const MainBar = () => {
  return (
    <div className='w-full bg-purple-dark border border-light-blue border-solid border-r-0 border-l-0 border-t-0'>
      <div className='w-full container-desktop-enlarged py-4 flex justify-between items-center relative laptop:py-2.5'>
        <Logo/>
        <Menu/>
      </div>
    </div>
  )
}

export default MainBar