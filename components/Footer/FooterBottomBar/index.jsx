import Link from 'next/link';
import Image from 'next/image';
import youtubeIcon from '../../../public/images/icons/youtube.svg';

const FooterBottomBar = () => {
  return (
    <div className="text-center w-full relative">
      <ul className="w-full flex flex-col items-center py-3.5">
        <li className="flex flex-col laptop:flex-row align-items-center my-4 laptop:mb-0 laptop:mt-0 laptop:w-auto py-3.5">
          <span className="mb-4 laptop:mb-0 laptop:mr-6 text-xs text-white/50 font-poppins laptop:text-sm text-center laptop:text-left">
            Follow us
          </span>
          <ul className="flex justify-center align-items-center flex-wrap laptop:justify-start gap-7">
            <li className="m-3 laptop:m-0 laptop:flex">
              <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK}>
                <a
                  className="inline-block transition-opacity hover:opacity-50"
                  title="GitHub"
                >
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 0C6.10898 0 0.52002 5.50883 0.52002 12.3034C0.52002 17.7394 4.09554 22.3511 9.0553 23.9782C9.67826 24.092 9.88002 23.7106 9.88002 23.3866V21.0962C6.4085 21.8405 5.6857 19.6444 5.6857 19.6444C5.11786 18.2223 4.29938 17.844 4.29938 17.844C3.16682 17.0801 4.3857 17.0965 4.3857 17.0965C5.6389 17.1827 6.29826 18.3648 6.29826 18.3648C7.41106 20.2452 9.21754 19.7018 9.92994 19.387C10.0412 18.5924 10.3647 18.049 10.7224 17.7425C7.95082 17.4298 5.03674 16.3748 5.03674 11.6615C5.03674 10.3174 5.5245 9.22035 6.32218 8.35911C6.19322 8.04845 5.76578 6.79658 6.44386 5.10282C6.44386 5.10282 7.49218 4.77268 9.8769 6.36391C10.8722 6.09119 11.9392 5.95483 13 5.9497C14.0608 5.95483 15.1289 6.09119 16.1263 6.36391C18.5089 4.77268 19.5551 5.10282 19.5551 5.10282C20.2343 6.79761 19.8068 8.04948 19.6779 8.35911C20.4787 9.22035 20.9623 10.3184 20.9623 11.6615C20.9623 16.3871 18.043 17.4277 15.2641 17.7322C15.7113 18.1136 16.12 18.8621 16.12 20.0104V23.3866C16.12 23.7137 16.3197 24.0982 16.9531 23.9772C21.9087 22.348 25.48 17.7374 25.48 12.3034C25.48 5.50883 19.8921 0 13 0Z"
                      fill="#A3A8B8"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="m-3 laptop:m-0 laptop:flex">
              <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}>
                <a
                  className="inline-block transition-opacity hover:opacity-50"
                  title="LinkedIn"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2394 23.9998C15.3943 23.9998 9.55393 23.9998 3.70886 23.9998C3.6713 23.9857 3.63844 23.9669 3.60088 23.9575C2.15018 23.7181 1.17835 22.901 0.666609 21.5298C0.577407 21.2857 0.535154 21.0227 0.474121 20.7644C0.478816 14.9229 0.478816 9.0767 0.478816 3.23519C0.4929 3.19762 0.51168 3.16475 0.521069 3.12718C0.816844 1.28175 2.27694 0.00450882 4.13609 0.00450882C9.69478 -0.00488269 15.2582 -0.000186936 20.8168 0.00920457C21.2253 0.00920457 21.6478 0.0796409 22.0328 0.211122C23.5492 0.732351 24.4741 2.07534 24.4741 3.70946C24.4788 7.52711 24.4741 11.3494 24.4741 15.1671C24.4741 16.8857 24.4788 18.6044 24.4741 20.323C24.4694 21.9478 23.5211 23.2814 22.0093 23.8073C21.7605 23.8918 21.4976 23.9341 21.2394 23.9998ZM14.4131 19.0646C14.4131 18.9425 14.4131 18.8392 14.4131 18.7406C14.4225 16.7167 14.4131 14.6928 14.446 12.6737C14.46 11.8613 14.9201 11.2837 15.6619 10.9597C16.5774 10.5606 17.5586 10.9174 17.9389 11.8049C18.0891 12.1524 18.1783 12.5563 18.183 12.9366C18.2112 14.8807 18.2018 16.8247 18.2065 18.7687C18.2065 18.8627 18.2065 18.9519 18.2065 19.0505C19.4225 19.0505 20.6103 19.0505 21.8121 19.0505C21.8121 18.9378 21.8121 18.8439 21.8121 18.7547C21.8121 16.928 21.8168 15.1014 21.8075 13.27C21.8075 12.7957 21.7981 12.3168 21.7464 11.8425C21.6525 10.9691 21.3943 10.1473 20.8591 9.43358C20.2018 8.56017 19.3004 8.11407 18.2253 7.99668C16.6995 7.82763 15.4366 8.27373 14.5398 9.56976C14.5117 9.61202 14.5023 9.66367 14.4882 9.71533C14.46 9.69185 14.4319 9.67307 14.399 9.64959C14.399 9.17532 14.399 8.70574 14.399 8.22677C13.1924 8.22677 12.0093 8.22677 10.8215 8.22677C10.8215 11.8472 10.8215 15.4488 10.8215 19.0552C12.0187 19.0646 13.1971 19.0646 14.4131 19.0646ZM8.79806 19.0646C8.79806 15.4441 8.79806 11.8425 8.79806 8.23147C7.59619 8.23147 6.41309 8.23147 5.22529 8.23147C5.22529 11.8472 5.22529 15.4535 5.22529 19.0646C6.41778 19.0646 7.59619 19.0646 8.79806 19.0646ZM7.02342 2.96753C6.77928 3.01449 6.52576 3.03327 6.29102 3.1084C5.62436 3.31971 5.17835 3.7752 5.0422 4.46547C4.90604 5.16984 5.07975 5.79907 5.64783 6.27804C6.15487 6.70535 6.75112 6.77109 7.38961 6.71004C8.52107 6.59735 9.29102 5.47976 8.98116 4.39034C8.72295 3.49815 8.01403 2.99101 7.02342 2.96753Z"
                      fill="#A3A8B8"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="m-3 laptop:m-0 laptop:flex">
              <Link href={process.env.NEXT_PUBLIC_TWITTER_LINK}>
                <a
                  className="inline-block transition-opacity hover:opacity-50"
                  title="Twitter"
                >
                  <svg
                    width="25"
                    height="35"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="m9.42,6.83L14.99.36h-1.32l-4.83,5.62L4.98.36H.52l5.84,8.5L.52,15.64h1.32l5.11-5.93,4.08,5.93h4.45l-6.06-8.81h0Zm-1.81,2.1l-.59-.85L2.32,1.35h2.03l3.8,5.43.59.85,4.94,7.06h-2.03l-4.03-5.76h0Z" 
                      fill="#A3A8B8"/>
                  </svg>
                 
                </a>
              </Link>
            </li>
            <li className="m-3 laptop:m-0 laptop:flex">
              <Link href={process.env.NEXT_PUBLIC_YOUTUBE_LINK}>
                <a
                  className="inline-block transition-opacity hover:opacity-50"
                  title="YouTube"
                >
                  <Image
                    src={youtubeIcon}
                    width={25}
                    height={25}
                    alt={'YouTube Icon'}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="w-full flex-col flex laptop:flex-row laptop:justify-center gap-4 justify-end py-3.5">
          <Link href="/privacy-policy">
            <a className="text-xs text-white/50 font-poppins underline laptop:text-sm hover:text-purple-bright-hover">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms">
            <a className="text-xs text-white/50 font-poppins underline laptop:text-sm hover:text-purple-bright-hover">
              Terms & Conditions
            </a>
          </Link>
        </li>
        <li className="w-full laptop:w-auto py-3.5">
          <p className="text-xs text-white/50 font-poppins laptop:text-sm">
            {`©${new Date().getFullYear()} amplication`}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FooterBottomBar;
