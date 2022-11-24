import React from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: null,
    height: null,
  });

  function changeWindowSize() {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }

  React.useEffect(() => {
    changeWindowSize();

    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
