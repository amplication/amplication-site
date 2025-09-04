//import TopBar from './TopBar/productHunt';
import MainBar from './MainBar';
import BottomBar from './BottomBar';
import { useBannerDetection } from '../../hooks/useBannerDetection';

const Header = ({ hideBar = false }) => {
  const hasBanner = useBannerDetection();

  return (
    <>
      <header
        className={`z-20 font-poppins laptop:fixed laptop:w-full h-[150px] ${
          hasBanner ? 'laptop:top-[58px]' : 'laptop:top-0'
        }`}
      >
        <div className="fixed w-full">
          {/* {!hideBar && <TopBar />} */}
          <MainBar hasBanner={hasBanner} />
          <BottomBar />
        </div>
      </header>
    </>
  );
};

export default Header;
