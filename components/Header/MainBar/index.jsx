import Menu from '../Menu';

const MainBar = ({ hasBanner = false }) => {
  return (
    <div
      className={`relative z-10 w-full bg-purple-dark border border-light-blue border-solid border-r-0 border-l-0 border-t-0 fixed laptop:static w-full ${
        hasBanner ? 'top-[58px] laptop:top-0' : 'top-0'
      }`}
    >
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop relative z-10 flex justify-between items-center relative py-6 laptop:py-0 !max-w-[1904px]">
        <Menu />
      </div>
    </div>
  );
};

export default MainBar;
