import TopBar from "./TopBar";
import MainBar from "./MainBar";
import BottomBar from "./BottomBar";

const Header = () => {
  return (
    <header className='fixed w-full top-0 z-10 laptop:static font-poppins'>
      <TopBar/>
      <MainBar/>
      <BottomBar/>
    </header>
  );
};

export default Header
