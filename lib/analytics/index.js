// log the page view with their URL
export const page = (name, props) => {
  //segment
  window.analytics?.page(name, props);
  // hubspot
  window._hsq?.push(["setPath", name]);
  window._hsq?.push(["trackPageView"]);
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
