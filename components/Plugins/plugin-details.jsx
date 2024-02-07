import PropTypes from 'prop-types';
import PluginLogo from './plugin-logo';
import PluginReadme from './plugin-readme';
import PluginSpec from './plugin-spec';
import Button from '../Common/Button';
import * as analytics from '../../lib/analytics';
import { useCallback } from 'react';

const PluginDetails = ({ plugin }) => {
  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'add-plugin-button',
        pluginId: plugin.pluginId,
      },
    });
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between items-center py-8 mb-8 border-b border-light-blue">
        <div className={'flex flex-row justify-start items-center '}>
          <PluginLogo plugin={plugin} size={72} />
          <div>
            <div className="text-base text-3xl">{plugin.name}</div>
          </div>
        </div>
        <Button
          text="Install Plugin"
          backgroundColor="purpleBright"
          hoverBackgroundColor="purpleBrightHover"
          isLink={true}
          onClick={() => {
            handleStartNowClick(plugin.pluginId);
          }}
          href={`https://app.amplication.com/login?plugin-id=${plugin.pluginId}`}
          className=" whitespace-nowrap !px-2 !py-2 justify-self-end"
          delayLinkMs={300} //add 300ms to be able to send the event
        />
      </div>
      <div className="flex flex-col justify-between gap-8 laptop:flex-row">
        <div className="laptop:max-w-[calc(100%-462px)] flex flex-col gap-4 order-2 laptop:order-1">
          <PluginReadme plugin={plugin} />
        </div>
        <div className="laptop:w-[430px] order-1 laptop:order-2">
          <PluginSpec plugin={plugin} />
        </div>
      </div>
    </div>
  );
};

PluginDetails.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default PluginDetails;
