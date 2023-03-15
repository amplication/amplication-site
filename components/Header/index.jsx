import WebinarBar from './WebinarBar';
import MainBar from './MainBar';
import BottomBar from './BottomBar';

const Header = () => {
  return (
    <>
      <header className="z-20 font-poppins laptop:fixed laptop:w-full laptop:top-0 h-[150px] max-laptop:h-[225px]">
        <div className="fixed w-full">
          <WebinarBar />
          <MainBar />
          <BottomBar />
        </div>
      </header>
    </>
  );
};

export default Header;
