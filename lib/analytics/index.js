// log the page view with their URL
export const page = (name, props) => {
  //segment
  window.analytics?.page(name, props, {
    traits: {
      experiment: window?.amplication?.branchName || 'main',
    },
  });
  // hubspot
  window._hsq?.push(['setPath', name]);
  window._hsq?.push(['trackPageView']);
};

// log specific events happening.
export const event = ({action, params}) => {
  const analytics = window.analytics;
  analytics.track(
    action,
    {
      ...params,
    },
    {
      traits: {
        experiment: window?.amplication?.branchName || 'main',
      },
    }
  );
};
