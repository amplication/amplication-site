import Logo from '../Logo';
import Menu from '../Menu';

const MainBar = () => {
  return (
    <div className="w-full bg-purple-dark border border-light-blue border-solid border-r-0 border-l-0 border-t-0 fixed laptop:static top-0 w-full">
      <div className="w-full container-desktop-enlarged flex justify-between items-center relative py-4 laptop:py-0">
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default MainBar;
