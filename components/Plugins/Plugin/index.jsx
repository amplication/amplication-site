import Image from 'next/image';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import * as analytics from '../../../lib/analytics';
import Button from '../../Common/Button';
import PluginLogo from './plugin-logo';

const Plugin = ({ plugin }) => {
  const handleStartNowClick = useCallback((pluginId) => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'add-plugin-button',
        pluginId,
      },
    });
  }, []);

  return (
    <div
      key={plugin.pluginId}
      className={
        'flex flex-col justify-between items-start overflow-hidden border border-solid border-dark-black-70 bg-purple-light  h-full hover:shadow-hover-post rounded-lg p-4 min-h-[200px] '
      }
    >
      <div className={'flex flex-row justify-start items-center  '}>
        <PluginLogo plugin={plugin} />
        <div>
          <div className="text-base">{plugin.name}</div>
        </div>
      </div>
      <span className="text-xs text-gray py-4">{plugin.description}</span>
      <div className="flex flex-row justify-between items-center mt-auto pt-4 w-full border-t-1 border-t-dark-black-70 ">
        <span className="text-xs text-white">
          <a href={plugin.github} target="github_plugin">
            View Source
          </a>
        </span>
        <span className="text-xs text-white">
          <Button
            text="Add Plugin"
            backgroundColor="purpleBright"
            hoverBackgroundColor="purpleBrightHover"
            isLink={true}
            onClick={() => {
              handleStartNowClick(plugin.pluginId);
            }}
            href={`https://app.amplication.com/login?plugin-id=${plugin.pluginId}`}
            className=" whitespace-nowrap !px-2 !py-2"
            delayLinkMs={300} //add 300ms to be able to send the event
          />
        </span>
      </div>
    </div>
  );
};

Plugin.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default Plugin;
