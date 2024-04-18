import PropTypes from 'prop-types';

const PluginSpec = ({ plugin }) => {
  return (
    <div className=" bg-dark-black-surface rounded-xl border-dark-black-70 border    ">
      <div className="flex flex-col justify-content-between align-items-center gap-4 m-6 overflow-hidden">
        <div className="text-2xl font-semibold">Details</div>

        <div>
          <div className="text-lg font-bold">npm</div>
          <div className="text-xs text-secondary-turquoise">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.npmjs.com/package/${plugin.npm}`}
            >
              {plugin.npm}
            </a>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">github</div>
          <div className="text-xs text-secondary-turquoise">
            <a target="_blank" rel="noreferrer" href={plugin.github}>
              {plugin.github}
            </a>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Installs</div>
          <div className="text-xs text-secondary-turquoise">
            {plugin.downloads?.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Categories</div>
          <div className="text-xs text-secondary-turquoise">
            {plugin.categories.join(', ')}
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Documentation</div>
          <div className="text-xs text-secondary-turquoise">
            <a target="_blank" rel="noreferrer" href={plugin.website}>
              {plugin.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PluginSpec.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default PluginSpec;
