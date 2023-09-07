import Image from 'next/image';
import PropTypes from 'prop-types';

const PLUGIN_LOGO_BASE_URL =
  'https://raw.githubusercontent.com/amplication/plugin-catalog/master/assets/icons/';

const PluginLogo = ({ plugin }) => {
  return (
    <span className="min-w-[60px] max-w-[60px] pr-4 flex flex-row justify-center items-center">
      {plugin?.icon ? (
        <Image
          width={44}
          height={44}
          src={`${PLUGIN_LOGO_BASE_URL}${plugin.icon}`}
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
};

export default PluginLogo;
