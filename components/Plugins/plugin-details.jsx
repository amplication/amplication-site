import PropTypes from 'prop-types';
import PluginLogo from './plugin-logo';
import PluginReadme from './plugin-readme';
import PluginSpec from './plugin-spec';

const PluginDetails = ({ plugin }) => {
  return (
    <>
      <div className="flex flex-row ">
        <div>
          <div className={'flex flex-row justify-start items-center  '}>
            <PluginLogo plugin={plugin} />
            <div>
              <div className="text-base">{plugin.name}</div>
            </div>
          </div>
          <span className="text-xs text-gray py-4">{plugin.description}</span>

          <PluginReadme plugin={plugin} />
        </div>
        <div className="width-[300px]">
          <PluginSpec plugin={plugin} />
        </div>
      </div>
    </>
  );
};

PluginDetails.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default PluginDetails;
