import Image from 'next/image';
import PropTypes from 'prop-types';
import WidePanelWithImage from '../../../Common/WidePanelWithImage';

import ImgBackstage from '../../../../public/images/idp/backstage.svg';
import ImgPort from '../../../../public/images/idp/port.svg';

const TITLE = 'Seamlessly Integrate with Your Portal';
const CONTENT = `Amplication can integrate with your internal developer portal, including
        leading platforms like Backstage, Port
        , and many others. Ensure smooth collaboration and a unified developer
        experience by connecting Amplication to your developer's portal.`;

const IntegrateWithIdp = ({ classes }) => {
  return (
    <>
      <WidePanelWithImage
        title={TITLE}
        content={CONTENT}
        fullWidth={true}
        alternate={false}
      />
      <div className="flex flex-wrap items-center justify-center gap-12">
        <div className="flex justify-center h-[50px] ">
          <Image src={ImgBackstage} alt="Backstage" />
        </div>
        <div className="flex justify-center h-[50px] ">
          <Image src={ImgPort} alt="Port" />
        </div>
      </div>
    </>
  );
};

IntegrateWithIdp.propTypes = {
  classes: PropTypes.string,
};

IntegrateWithIdp.defaultProps = {
  classes: '',
};

export default IntegrateWithIdp;
