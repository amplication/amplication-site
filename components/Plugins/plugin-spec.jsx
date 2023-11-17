import PropTypes from 'prop-types';

const PluginSpec = ({ plugin }) => {
  return (
    <div className="flex flex-col  bg-light-blue justify-content-between align-items-center  p-3 gap-3">
      <div>
        <div className="text-xs text-gray">npm</div>
        <div className="text-xs text-white">
          <a href={`https://www.npmjs.com/package/${plugin.npm}`}>
            {plugin.npm}
          </a>
        </div>
      </div>
      <div>
        <div className="text-xs text-gray">github</div>
        <div className="text-xs text-white">
          <a href={plugin.github}>{plugin.github}</a>
        </div>
      </div>
      <div>
        <div className="text-xs text-gray">Installs</div>
        <div className="text-xs text-white">Less than 100</div>
      </div>
      <div>
        <div className="text-xs text-gray">Categories</div>
        <div className="text-xs text-white">Database</div>
      </div>
      <div>
        <div className="text-xs text-gray">Documentation</div>
        <div className="text-xs text-white">
          <a href={plugin.website}>{plugin.website}</a>
        </div>
      </div>
    </div>
  );
};

PluginSpec.propTypes = {
  pluginSpec: PropTypes.object.isRequired,
};

export default PluginSpec;
