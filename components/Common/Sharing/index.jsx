import Link from "next/link";

const Sharing = () => {
  return (
    <div className='w-full mb-12'>
      <p className='font-poppins font-medium text-white text-center text-sm mb-3'>
        Follow us
      </p>
      <ul className='flex justify-center items-center flex-wrap'>
        {/*Github*/}
        <li className='m-3'>
          <Link href='https://twitter.com'>
            <a>
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0C6.10898 0 0.52002 5.50883 0.52002 12.3034C0.52002 17.7394 4.09554 22.3511 9.0553 23.9782C9.67826 24.092 9.88002 23.7106 9.88002 23.3866V21.0962C6.4085 21.8405 5.6857 19.6444 5.6857 19.6444C5.11786 18.2223 4.29938 17.844 4.29938 17.844C3.16682 17.0801 4.3857 17.0965 4.3857 17.0965C5.6389 17.1827 6.29826 18.3648 6.29826 18.3648C7.41106 20.2452 9.21754 19.7018 9.92994 19.387C10.0412 18.5924 10.3647 18.049 10.7224 17.7425C7.95082 17.4298 5.03674 16.3748 5.03674 11.6615C5.03674 10.3174 5.5245 9.22035 6.32218 8.35911C6.19322 8.04845 5.76578 6.79658 6.44386 5.10282C6.44386 5.10282 7.49218 4.77268 9.8769 6.36391C10.8722 6.09119 11.9392 5.95483 13 5.9497C14.0608 5.95483 15.1289 6.09119 16.1263 6.36391C18.5089 4.77268 19.5551 5.10282 19.5551 5.10282C20.2343 6.79761 19.8068 8.04948 19.6779 8.35911C20.4787 9.22035 20.9623 10.3184 20.9623 11.6615C20.9623 16.3871 18.043 17.4277 15.2641 17.7322C15.7113 18.1136 16.12 18.8621 16.12 20.0104V23.3866C16.12 23.7137 16.3197 24.0982 16.9531 23.9772C21.9087 22.348 25.48 17.7374 25.48 12.3034C25.48 5.50883 19.8921 0 13 0Z" fill="#A3A8B8"/>
              </svg>
            </a>
          </Link>
        </li>
        {/*LinkedIn*/}
        <li className='m-3'>
          <Link href='https://linkedin.com'>
            <a>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2394 23.9998C15.3943 23.9998 9.55393 23.9998 3.70886 23.9998C3.6713 23.9857 3.63844 23.9669 3.60088 23.9575C2.15018 23.7181 1.17835 22.901 0.666609 21.5298C0.577407 21.2857 0.535154 21.0227 0.474121 20.7644C0.478816 14.9229 0.478816 9.0767 0.478816 3.23519C0.4929 3.19762 0.51168 3.16475 0.521069 3.12718C0.816844 1.28175 2.27694 0.00450882 4.13609 0.00450882C9.69478 -0.00488269 15.2582 -0.000186936 20.8168 0.00920457C21.2253 0.00920457 21.6478 0.0796409 22.0328 0.211122C23.5492 0.732351 24.4741 2.07534 24.4741 3.70946C24.4788 7.52711 24.4741 11.3494 24.4741 15.1671C24.4741 16.8857 24.4788 18.6044 24.4741 20.323C24.4694 21.9478 23.5211 23.2814 22.0093 23.8073C21.7605 23.8918 21.4976 23.9341 21.2394 23.9998ZM14.4131 19.0646C14.4131 18.9425 14.4131 18.8392 14.4131 18.7406C14.4225 16.7167 14.4131 14.6928 14.446 12.6737C14.46 11.8613 14.9201 11.2837 15.6619 10.9597C16.5774 10.5606 17.5586 10.9174 17.9389 11.8049C18.0891 12.1524 18.1783 12.5563 18.183 12.9366C18.2112 14.8807 18.2018 16.8247 18.2065 18.7687C18.2065 18.8627 18.2065 18.9519 18.2065 19.0505C19.4225 19.0505 20.6103 19.0505 21.8121 19.0505C21.8121 18.9378 21.8121 18.8439 21.8121 18.7547C21.8121 16.928 21.8168 15.1014 21.8075 13.27C21.8075 12.7957 21.7981 12.3168 21.7464 11.8425C21.6525 10.9691 21.3943 10.1473 20.8591 9.43358C20.2018 8.56017 19.3004 8.11407 18.2253 7.99668C16.6995 7.82763 15.4366 8.27373 14.5398 9.56976C14.5117 9.61202 14.5023 9.66367 14.4882 9.71533C14.46 9.69185 14.4319 9.67307 14.399 9.64959C14.399 9.17532 14.399 8.70574 14.399 8.22677C13.1924 8.22677 12.0093 8.22677 10.8215 8.22677C10.8215 11.8472 10.8215 15.4488 10.8215 19.0552C12.0187 19.0646 13.1971 19.0646 14.4131 19.0646ZM8.79806 19.0646C8.79806 15.4441 8.79806 11.8425 8.79806 8.23147C7.59619 8.23147 6.41309 8.23147 5.22529 8.23147C5.22529 11.8472 5.22529 15.4535 5.22529 19.0646C6.41778 19.0646 7.59619 19.0646 8.79806 19.0646ZM7.02342 2.96753C6.77928 3.01449 6.52576 3.03327 6.29102 3.1084C5.62436 3.31971 5.17835 3.7752 5.0422 4.46547C4.90604 5.16984 5.07975 5.79907 5.64783 6.27804C6.15487 6.70535 6.75112 6.77109 7.38961 6.71004C8.52107 6.59735 9.29102 5.47976 8.98116 4.39034C8.72295 3.49815 8.01403 2.99101 7.02342 2.96753Z" fill="#A3A8B8"/>
              </svg>
            </a>
          </Link>
        </li>
        {/*Twitter*/}
        <li className='m-3'>
          <Link href='https://twitter.com'>
            <a>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7796 0C12.2517 0 12.7238 0 13.1806 0C13.2415 0.0152284 13.3024 0.0304569 13.3634 0.0456853C14.8253 0.137056 16.2263 0.48731 17.5512 1.14213C21.2517 2.95431 23.5055 5.87817 24.2974 9.92893C24.3887 10.3858 24.4192 10.8579 24.4801 11.3147C24.4801 11.7868 24.4801 12.2589 24.4801 12.7157C24.4649 12.7766 24.4497 12.8528 24.4344 12.9137C24.3126 14.5888 23.8862 16.1726 23.0639 17.6345C20.8557 21.5635 17.4903 23.7107 12.9826 23.9848C10.8202 24.1218 8.76438 23.6497 6.87605 22.599C2.93189 20.3909 0.78468 17.0102 0.49534 12.5025C0.358284 10.3401 0.830365 8.26904 1.88113 6.36548C3.75422 2.98477 6.58671 0.913706 10.3938 0.182741C10.8507 0.106599 11.3075 0.0609137 11.7796 0ZM20.6578 5.20812C19.9877 5.58883 19.3329 5.84772 18.6476 6.01523C18.4801 6.06091 18.3735 6.03046 18.2365 5.90863C17.1705 4.94924 15.937 4.69036 14.6121 5.16244C13.272 5.64975 12.4801 6.65482 12.2974 8.08629C12.2517 8.48223 12.2821 8.8934 12.2821 9.30457C9.35828 9.1066 6.93696 7.85787 5.01818 5.60406C4.62224 6.30457 4.46996 7.03553 4.56133 7.79695C4.68316 8.84772 5.20092 9.68528 6.06894 10.3096C6.05372 10.3401 6.03849 10.3553 6.02326 10.3858C5.52072 10.2487 5.01818 10.1117 4.50042 9.95939C4.50042 10.7665 4.7593 11.4975 5.27707 12.1523C5.79483 12.7919 6.46488 13.203 7.25676 13.4315C7.01311 13.4772 6.76945 13.5228 6.51057 13.5381C6.26691 13.5533 6.02326 13.5381 5.76438 13.5381C5.9928 14.2386 6.4192 14.802 6.99788 15.2437C7.57656 15.6853 8.24661 15.9137 8.9928 15.9746C7.48519 17.1472 5.7796 17.6041 3.89128 17.4822C4.31767 17.7259 4.72884 17.9695 5.15524 18.1675C7.15016 19.0508 9.206 19.2487 11.338 18.8376C13.8811 18.3503 15.9065 17.0254 17.3989 14.9239C18.739 13.0508 19.409 10.934 19.3634 8.61929C19.3634 8.52792 19.4243 8.42132 19.4852 8.34518C19.7288 8.11675 20.003 7.91878 20.2314 7.67513C20.5359 7.35533 20.8101 7.0203 21.0994 6.67005C20.4293 6.85279 19.805 7.0203 19.1806 7.18782C19.1654 7.15736 19.1654 7.14213 19.1502 7.11168C19.8659 6.67005 20.3684 6.06091 20.6578 5.20812Z" fill="#A3A8B8"/>
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sharing