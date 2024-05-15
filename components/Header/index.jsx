import TopBar from './TopBar/productHunt';
import MainBar from './MainBar';
import BottomBar from './BottomBar';

const Header = ({ hideBar = false }) => {
  return (
    <>
      <header className="z-20 font-poppins laptop:fixed laptop:w-full laptop:top-0 h-[150px]">
        <div className="fixed w-full">
          {!hideBar && <TopBar />}
          <MainBar />
          <BottomBar />
        </div>
      </header>
    </>
  );
};

export default Header;
