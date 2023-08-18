import { useEffect, useState } from 'react';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'next-share';

const SharingBlock = () => {
  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full text-white text-2xl font-poppins font-semibold text-left mb-4">
        Share this post.
      </div>
      <ul className="w-full flex justify-start items-center flex-wrap gap-2.5">
        <li className="flex justify-center items-center transition-opacity hover:opacity-50">
          <LinkedinShareButton url={currentURL}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0001 2.66663C8.63629 2.66663 2.66675 8.63616 2.66675 16C2.66675 23.3638 8.63629 29.3333 16.0001 29.3333C23.3639 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63616 23.3639 2.66663 16.0001 2.66663ZM12.7385 12.5461V22.6666H9.5231V12.5461H12.7385ZM12.9504 9.41525C12.9504 10.3864 12.2525 11.1635 11.1312 11.1635H11.1103C10.0312 11.1635 9.33342 10.3865 9.33342 9.41525C9.33342 8.4222 10.0526 7.66663 11.1525 7.66663C12.2525 7.66663 12.9295 8.42219 12.9504 9.41525ZM17.7337 22.6666H14.5182L14.5183 22.6665C14.5183 22.6665 14.5605 13.4956 14.5183 12.546H17.7337V13.9789C18.1611 13.2893 18.9259 12.3086 20.6316 12.3086C22.7471 12.3086 24.3334 13.755 24.3334 16.8636V22.6666H21.1182V17.2523C21.1182 15.8918 20.6527 14.9637 19.4892 14.9637C18.601 14.9637 18.0719 15.5897 17.8395 16.194C17.7546 16.4102 17.7337 16.7124 17.7337 17.0149V22.6666Z"
                fill="white"
              />
            </svg>
          </LinkedinShareButton>
        </li>
        <li className="flex justify-center items-center transition-opacity hover:opacity-50">
          <FacebookShareButton url={currentURL}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0001 0.666626C6.63628 0.666626 0.666748 6.63616 0.666748 14C0.666748 21.3638 6.63628 27.3333 14.0001 27.3333C21.3639 27.3333 27.3334 21.3638 27.3334 14C27.3334 6.63616 21.3639 0.666626 14.0001 0.666626ZM11.477 22H14.4331V13.999H16.4054L16.6667 11.2419H14.4331L14.4365 9.86187C14.4365 9.14276 14.4975 8.75744 15.4198 8.75744H16.6528V5.99996H14.6803C12.3109 5.99996 11.477 7.33748 11.477 9.58678V11.2422H10.0001V13.9993H11.477V22Z"
                fill="white"
              />
            </svg>
          </FacebookShareButton>
        </li>
        <li className="flex justify-center items-center transition-opacity hover:opacity-50">
          <TwitterShareButton url={currentURL}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0001 0.666626C6.63628 0.666626 0.666748 6.63616 0.666748 14C0.666748 21.3638 6.63628 27.3333 14.0001 27.3333C21.3639 27.3333 27.3334 21.3638 27.3334 14C27.3334 6.63616 21.3639 0.666626 14.0001 0.666626ZM22.3333 8.91165C22.3334 8.91164 22.3334 8.91163 22.3334 8.91162H22.3334C22.3334 8.91163 22.3334 8.91164 22.3333 8.91165ZM22.3333 8.91165C21.7815 9.17939 21.1884 9.36026 20.566 9.44164C21.2013 9.02507 21.6893 8.36544 21.919 7.5794C21.3244 7.9652 20.6658 8.24526 19.9648 8.3962C19.4035 7.74198 18.6037 7.33329 17.7185 7.33329C16.019 7.33329 14.641 8.84033 14.641 10.6992C14.641 10.963 14.6683 11.22 14.7208 11.4663C12.1631 11.326 9.89555 9.98585 8.37769 7.94936C8.11279 8.44649 7.96099 9.02466 7.96099 9.64156C7.96099 10.8094 8.50429 11.8396 9.33004 12.4432C8.82559 12.4258 8.35107 12.2743 7.93617 12.0223C7.93582 12.0363 7.93582 12.0504 7.93582 12.0645V12.0646C7.93582 13.6954 8.99662 15.0558 10.4044 15.3652C10.1462 15.4422 9.87434 15.4832 9.59369 15.4832C9.39539 15.4832 9.20265 15.4621 9.0147 15.4229C9.40635 16.7601 10.5428 17.7333 11.8895 17.7603C10.8363 18.6632 9.50939 19.2013 8.06752 19.2013C7.81912 19.2013 7.57417 19.1853 7.33342 19.1543C8.69534 20.1094 10.3129 20.6666 12.0508 20.6666C17.7113 20.6666 20.8068 15.5376 20.8068 11.0894C20.8068 10.9435 20.8038 10.7984 20.7979 10.6539C21.3991 10.1795 21.9208 9.58669 22.3333 8.91165Z"
                fill="white"
              />
            </svg>
          </TwitterShareButton>
        </li>
      </ul>
    </div>
  );
};

export default SharingBlock;
