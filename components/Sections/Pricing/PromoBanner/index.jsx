import { useEffect, useState } from 'react';

export const PromoBanner = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const imgSrc =
    'https://static-assets.amplication.com/marketing/banners/promo-banner.png';

  useEffect(() => {
    const bannerBackgroundImage = new Image();
    bannerBackgroundImage.src = imgSrc;

    bannerBackgroundImage.onload = () => {
      if (
        bannerBackgroundImage.width !== 1 ||
        bannerBackgroundImage.height !== 1
      ) {
        setBackgroundImage(imgSrc);
      } else {
        setBackgroundImage(null);
      }
    };
  }, [imgSrc]);

  return (
    backgroundImage && (
      <div
        className={'promo-banner'}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    )
  );
};
