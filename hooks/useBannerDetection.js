import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if HubSpot banner is present on the page
 * Looks for:
 * - Element with ID = 'hs-web-interactives-top-anchor'
 * - Direct child element with ID starting with 'hs-overlay-cta-'
 */
export const useBannerDetection = (debug = false) => {
    const [hasBanner, setHasBanner] = useState(false);

    useEffect(() => {
        const detectBanner = () => {
            // Check for HubSpot banner elements
            const anchorElement = document.getElementById('hs-web-interactives-top-anchor');

            // Look for overlay element as direct child of anchor element
            let overlayElement = null;
            if (anchorElement) {
                // Check direct children for element with ID starting with 'hs-overlay-cta-'
                overlayElement = Array.from(anchorElement.children).find(child =>
                    child.id && child.id.startsWith('hs-overlay-cta-')
                );
            }

            const bannerExists = anchorElement && overlayElement;

            if (debug) {
                console.log('Banner detection:', {
                    anchorElement: !!anchorElement,
                    overlayElement: !!overlayElement,
                    overlayElementId: overlayElement?.id,
                    bannerExists
                });
            }

            setHasBanner(bannerExists);
        };

        // Initial check
        detectBanner();

        // Set up observer to watch for DOM changes (in case banner loads after initial render)
        const observer = new MutationObserver(detectBanner);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['id']
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, [debug]);

    return hasBanner;
};
