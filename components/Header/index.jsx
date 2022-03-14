import TopBar from "./TopBar";
import MainBar from "./MainBar";
import BottomBar from "./BottomBar";

const Header = () => {
  return (
    <header className='z-20 font-poppins'>
      <TopBar/>
      <MainBar/>
      <BottomBar/>
    </header>
  );
};

export default Header
