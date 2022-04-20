// log the page view with their URL
export const page = (name, props) => {
  //segment
  const analytics = window.analytics;
  analytics.page(name, props);
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
