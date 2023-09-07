import PropTypes from 'prop-types';
import PluginLogo from './plugin-logo';
import Link from 'next/link';

const PluginsPanel = ({ plugins }) => {
  return (
    <>
      <h2 className="roadmap-heading tablet:text-center">Plugins</h2>
      <div className="text-center">
        Extend and customize your services by using plugins for various
        technologies and integrations.
      </div>
      <div className="mt-6 flex flex-wrap align-items-center justify-center text-sm">
        {plugins.map((plugin) => (
          <div
            key={plugin.pluginId}
            className="flex flex-row justify-center items-center overflow-hidden border border-solid border-dark-black-70 bg-purple-light   hover:shadow-hover-post rounded-lg p-2   m-2 font-normal "
          >
            <PluginLogo plugin={plugin} />
            <span>{plugin.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/plugins" passHref={true}>
          <a className="btn btn-outline-light btn-lg mb-4 text-black80 btn-sm !h-[34px] !font-normal !text-sm">
            Show all plugins
          </a>
        </Link>
      </div>
    </>
  );
};

PluginsPanel.propTypes = {
  plugins: PropTypes.array,
};

PluginsPanel.defaultProps = {
  plugins: [],
};

export default PluginsPanel;
