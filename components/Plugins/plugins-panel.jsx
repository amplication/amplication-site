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
      <div className="mt-8">
        <div className=" flex items-center  justify-center">
          <div className="w-[100%] h-20 overflow-hidden relative">
            <div className="flex items-center h-20 justify-around absolute animate  ">
              {plugins.map((plugin) => {
                return (
                  <div
                    key={plugin.pluginId}
                    className="flex flex-row justify-center items-center whitespace-nowrap  border border-solid border-dark-black-70 bg-purple-light    rounded-lg p-2 px-3  m-2 font-normal "
                  >
                    <PluginLogo plugin={plugin} />
                    <span className="text-gray text-sm">{plugin.name}</span>
                  </div>
                );
              })}
              {plugins.map((plugin) => {
                return (
                  <div
                    key={plugin.pluginId}
                    className="flex flex-row justify-center items-center whitespace-nowrap  border border-solid border-dark-black-70 bg-purple-light    rounded-lg p-2 px-3  m-2 font-normal "
                  >
                    <PluginLogo plugin={plugin} />
                    <span className="text-gray text-sm">{plugin.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/plugins" passHref={true}>
          <a className="btn btn-outline-light btn-lg mb-4 text-black80 btn-sm !h-[34px] !font-normal !text-sm px-4">
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
