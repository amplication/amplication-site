import {useEffect, useState} from "react";

const Background = () => {
  const [bottomBlockClasses, setBottomBlockClasses] = useState('hidden laptop:block absolute w-[604px] h-[736px] z-0');
  const [bottomBlockSecondClasses, setBottomBlockSecondClasses] = useState('hidden laptop:block absolute w-[383px] h-[2133px] right-0 z-0');

  useEffect(() => {
    if (window.location.hash) {
      setBottomBlockClasses(bottomBlockClasses + ' bottom-0');
      setBottomBlockSecondClasses(bottomBlockSecondClasses + ' bottom-0');
    } else {
      setBottomBlockClasses(bottomBlockClasses + ' bottom-[-5%]');
      setBottomBlockSecondClasses(bottomBlockSecondClasses + ' bottom-[-5%]');
    }
  }, [])

  return (
    <>
      <div className="hidden laptop:block absolute w-[2047px] h-[2358px] top-[10%] z-0">
        <svg width="601" height="2888" viewBox="0 0 601 2888" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_494_3734)">
            <ellipse cx="-687.233" cy="1444.24" rx="1023.77" ry="1179.3" fill="#A787FF" fillOpacity="0.2"/>
          </g>
          <defs>
            <filter id="filter0_f_494_3734" x="-1975" y="0.943359" width="2575.53" height="2886.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="132" result="effect1_foregroundBlur_494_3734"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="hidden laptop:block absolute w-[374px] h-[1778px] top-[-10%] right-0 z-0">
        <svg width="374" height="1778" viewBox="0 0 374 1778" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_494_3735)">
            <ellipse cx="1006.54" cy="665.774" rx="806.458" ry="911.774" fill="#41CADD" fillOpacity="0.15"/>
          </g>
          <defs>
            <filter id="filter0_f_494_3735" x="0.0844727" y="-446" width="2012.92" height="2223.55" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_494_3735"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="hidden laptop:block absolute w-[860px] h-[970px] top-[25%] left-[40%] z-0">
        <svg width="1243" height="1356" viewBox="0 0 1243 1356" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_494_3736)">
            <ellipse cx="621.5" cy="678" rx="429.5" ry="485.589" fill="#8DD9B9" fillOpacity="0.1"/>
          </g>
          <defs>
            <filter id="filter0_f_494_3736" x="0" y="0.410767" width="1243" height="1355.18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="96" result="effect1_foregroundBlur_494_3736"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className={bottomBlockSecondClasses}>
        <svg width="383" height="2133" viewBox="0 0 383 2133" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_494_3732)">
            <ellipse cx="1158.54" cy="1283.72" rx="958.54" ry="1083.72" fill="#F7AA50" fillOpacity="0.3"/>
          </g>
          <defs>
            <filter id="filter0_f_494_3732" x="0" y="0" width="2317.08" height="2567.43" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_494_3732"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className={bottomBlockClasses}>
        <svg width="604" height="736" viewBox="0 0 604 736" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_494_3733)">
            <ellipse cx="-153.997" cy="831.263" rx="565.003" ry="638.788" fill="#F85B6E" fillOpacity="0.15"/>
          </g>
          <defs>
            <filter id="filter0_f_494_3733" x="-911" y="0.475098" width="1514.01" height="1661.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="96" result="effect1_foregroundBlur_494_3733"/>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default Background
