import Image from 'next/image';
import PropTypes from 'prop-types';
import helpers from '../../helpers';

const PluginLogo = ({ plugin, size = 44 }) => {
  return (
    <span className=" pr-4 flex flex-row justify-center items-center">
      {plugin?.icon ? (
        <Image
          width={size}
          height={size}
          src={helpers.getPluginLogoUrl(plugin)}
          alt="plugin logo"
          className="rounded-lg"
        />
      ) : (
        <Image src={``} alt="plugin logo" />
      )}
    </span>
  );
};

PluginLogo.propTypes = {
  plugin: PropTypes.object.isRequired,
  size: PropTypes.number,
};

export default PluginLogo;
