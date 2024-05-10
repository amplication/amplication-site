import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import * as analytics from '../../../lib/analytics';
import Button from '../Button';
import GitHubStarsUsButtonContent from './GitHubStarsUsButtonContent';

const GitHubStarsButton = ({ className }) => {
  const router = useRouter();

  const handleStarUsClick = useCallback(() => {
    analytics.event({
      action: 'starUsClicked',
      params: {
        pageUri: router.asPath,
      },
    });
  }, [router.asPath]);

  return (
    <Button
      target="github-stars"
      text={<GitHubStarsUsButtonContent />}
      backgroundColor="transparent"
      isLink={true}
      onClick={handleStarUsClick}
      href="https://github.com/amplication/amplication"
      className={`hover:!bg-dark-black-60 text-[13px] h-[40px] whitespace-nowrap !px-4 border border-1 border-white rounded ${className}`}
      delayLinkMs={300}
    />
  );
};

GitHubStarsButton.propTypes = {
  className: PropTypes.string,
};

GitHubStarsButton.defaultProps = {
  className: undefined,
};

export default GitHubStarsButton;
