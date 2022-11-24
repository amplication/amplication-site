import Logo from '../Logo';
import Menu from '../Menu';

const MainBar = () => {
  return (
    <div className="relative z-10 w-full bg-purple-dark border border-light-blue border-solid border-r-0 border-l-0 border-t-0 fixed laptop:static top-0 w-full">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop relative z-10 bg-purple-dark flex justify-between items-center relative py-6 laptop:py-0">
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default MainBar;
