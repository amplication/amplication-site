import PropTypes from 'prop-types';
import SharingBlock from '../Common/SharingBlock';
import SubscribeForm from '../Common/SubscribeForm';

const Sidebar = ({ children, hideChildren }) => {
  return (
    <div className="laptop:pt-32 flex flex-col justify-start items-stretch w-full h-full">
      <div className="w-full laptop:mb-16 order-2 laptop:order-1">
        <SharingBlock />
      </div>
      <div className="medium:sticky medium:top-[7rem] w-full order-1 laptop:order-2 mb-14 laptop:mb-0">
        <SubscribeForm isCompactView={true} />
      </div>
      <div
        className={`w-full laptop:mb-16 order-2 laptop:mt-14 laptop:order-3 d-none ${
          hideChildren ? '' : 'd-xl-block'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element,
  hideChildren: PropTypes.bool,
};

export default Sidebar;
