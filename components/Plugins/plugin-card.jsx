import Link from 'next/link';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import helpers from '../../helpers';
import * as analytics from '../../lib/analytics';
import OutlineButton from '../Common/Button/button-outline';
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

  const handleClick = useCallback(() => {
    analytics.event({
      action: 'pluginCatalogItemClicked',
      params: {
        slug: plugin.pluginId,
      },
    });
  }, [plugin.pluginId]);

  const pluginPageUrl = helpers.getPluginSlug(plugin.pluginId);

  return (
    <Link href={pluginPageUrl} passHref>
      <a
        className="text-white transition-colors text-ellipsis display-block laptop:mb-0 group"
        onClick={handleClick}
      >
        <div
          key={plugin.pluginId}
          className={
            'flex flex-col justify-between items-start overflow-hidden border border-solid border-dark-black-70 bg-dark-black-100  h-full hover:shadow-hover-post rounded-lg p-4 min-h-[200px] '
          }
        >
          <div className={'flex flex-row justify-start items-center  '}>
            <PluginLogo plugin={plugin} size={62} />
            <div>
              <div className="text-base">{plugin.name}</div>
            </div>
          </div>
          <span className="text-xs text-gray py-4 max-h-[64px] overflow-hidden">
            {plugin.description}
          </span>
          <div className="flex flex-row justify-end items-center mt-auto pt-8 w-full ">
            <span className="text-xs text-white">
              <OutlineButton
                text="Learn more"
                isLink={true}
                onClick={() => {
                  handleStartNowClick(plugin.pluginId);
                }}
                href={pluginPageUrl}
                className="whitespace-nowrap !px-2 !py-2"
                delayLinkMs={300} //add 300ms to be able to send the event
              />
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

Plugin.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default Plugin;
