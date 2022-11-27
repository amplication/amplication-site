import Link from 'next/link';
import Button from '../../Common/Button';
import {useRouter} from 'next/router';
import {useState} from 'react';
import useWindowSize from '../../../utils/useWindowSize';

const Menu = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');
  const {asPath} = useRouter();
  const {width} = useWindowSize();

  const menuItems = [
    {
      title: 'Docs',
      href: {
        pathname: 'https://docs.amplication.com/getting-started/',
      },
      target: '_blank',
      isActive: false,
    },
    {
      title: 'Product',
      href: {
        pathname: '/product',
      },
      target: '_blank',
      isActive: false,
      menuItems: [
        {
          title: 'Features',
          href: {
            pathname: '/features',
          },
          target: '_self',
          isActive: Boolean(asPath === '/features'),
        },
        {
          title: 'Roadmap',
          href: {
            pathname: '/',
            hash: 'roadmap',
          },
          target: '_self',
          isActive: false,
        },
      ]
    },
    {
      title: 'Enterprise',
      href: {
        pathname: '/enterprise',
      },
      target: '_self',
      isActive: Boolean(asPath === '/enterprise'),
    },
    {
      title: 'Community',
      href: {
        pathname: '/community',
      },
      target: '_self',
      isActive: Boolean(asPath === '/community'),
    },
    {
      title: 'Pricing',
      href: {
        pathname: '/pricing',
      },
      target: '_self',
      isActive: Boolean(asPath === '/pricing'),
    },
    {
      title: 'Company',
      href: {
        pathname: '/company',
      },
      target: '_blank',
      isActive: false,
      menuItems: [
        {
          title: 'About',
          href: {
            pathname: '/about',
          },
          target: '_self',
          isActive: Boolean(asPath === '/about'),
        },
        {
          title: 'Team',
          href: {
            pathname: '/team',
          },
          target: '_self',
          isActive: Boolean(asPath === '/team'),
        },
        {
          title: 'Careers',
          href: {
            pathname: 'https://amplication.breezy.hr/',
          },
          target: '_blank',
          isActive: false,
        },
      ]
    },
    {
      title: 'Blog',
      href: {
        pathname: '/blog',
      },
      target: '_self',
      isActive: Boolean(asPath.includes('/tags') || asPath.includes('/blog')),
    },
  ];

  return (
    <>
      <div
        onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        className="cursor-pointer relative w-h h-6 laptop:hidden"
      >
        <div
          className={
            'burger-menu' + (isMobileMenuOpened ? ' burger-menu--active' : '')
          }
        >
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
        </div>
      </div>
      <div
        className={`menu ${
          isMobileMenuOpened ? 'menu--opened' : 'menu--closed overflow-visible'
        }`}
      >
        <nav>
          <ul className="flex flex-col justify-start items-stretch laptop:flex-row justify:end items:center">
            {menuItems.map((item, index) => {
              let menuItemClasses = 'menu__item relative';
              if (item.isActive) {
                menuItemClasses +=
                  ' laptop:before:absolute laptop:before:block laptop:before:content-[attr(data-before)] laptop:before:w-full laptop:before:h-1 laptop:before:bg-purple-bright laptop:before:left-0 laptop:before:bottom-0 laptop:before:rounded-t';
              } else {
                menuItemClasses += '';
              }
              return (
                <li
                  key={index.toString()}
                  className={(hoveredLink === item.href.pathname ? 'bg-purple-bright laptop:bg-transparent ' : '') + menuItemClasses}
                  onMouseEnter={() => {
                    if (width > 991) {
                      setHoveredLink(hoveredLink === '' ? item.href.pathname : '')
                    }
                  }}
                  onMouseLeave={() => {
                    if (width > 991) {
                      setHoveredLink(hoveredLink === '' ? item.href.pathname : '')
                    }
                  }}
                  onClick={() => {
                    if (width <= 991) {
                      setHoveredLink(hoveredLink === '' ? item.href.pathname : '')
                    }
                  }}
                >
                  { !item.menuItems && (
                    <Link href={item.href}>
                      <a
                        className={`text-xl block laptop:inline-block hover:text-purple-bright text-center laptop:text-left border-[#353B57] border-b-[1px] laptop:border-b-0 laptop:text-base p-7 laptop:py-5 laptop:px-2 desktop:px-[15px] ${
                          ( item.isActive ? 'text-purple-bright' : 'text-gray' ) + ( item.href.pathname === '/enterprise' ? ' !text-[#54DBEE] font-medium' : '' )
                        }`}
                        target={item.pathname}
                        onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
                      >
                        {item.title}
                      </a>
                    </Link>
                  ) }
                  {
                    item.menuItems && (
                      <>
                        <span className={"text-gray text-xl hover:text-purple-bright text-center laptop:text-left laptop:text-base p-7 laptop:py-5 laptop:px-2 desktop:px-[15px] cursor-pointer justify-center flex " + (hoveredLink === item.href.pathname ? ' !text-white laptop:!text-purple-bright' : 'border-[#353B57] border-b-[1px] laptop:border-b-0')}>
                          {item.title}
                          <svg className={"ml-1 my-auto block" + (hoveredLink === item.href.pathname ? ' rotate-180' : '')} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 7L8.75 10.75L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <ul className={"laptop:absolute top-0 invisible transition-all min-w-[110px] bg-purple-light laptop:rounded laptop:top-16 h-0 overflow-hidden " + (hoveredLink === item.href.pathname ? ' !h-auto !visible laptop:!top-[60px]' : '')}>
                          {item.menuItems.map((subItem, i) => {
                            return (
                              <li key={i.toString()} className="menu__item relative laptop:rounded">
                                <Link href={subItem.href}>
                                  <a
                                    className={`text-xl hover:text-white laptop:text-base text-center laptop:text-left block py-7 laptop:p-4 !leading-snug bg-purple-bright laptop:bg-purple-light ${asPath !== subItem.href.pathname ? 'text-white laptop:text-gray laptop:bg-purple-light' : 'laptop:!text-white laptop:!bg-purple-bright'}`}
                                    target={subItem.pathname}
                                  >
                                    {subItem.title}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )
                  }
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-auto mt-[-1px] pb-8 laptop:hidden">
          <div className="w-full menu__item pt-12 flex flex-col justify-end items-stretch border-t border-[rgba(255,255,255,0.2)]">
            <div className="w-full">
              <p className="font-poppins font-medium text-white text-center text-base mb-6 laptop:text-lg laptop:text-left laptop:mb-6">
                Contact us
              </p>
              <ul className="w-full flex flex-col justify-start items-center">
                <li className="mb-1">
                  <Link href={`mailto:${process.env.NEXT_PUBLIC_MAIL}`}>
                    <a className="text-gray laptop:text-lg hover:text-purple-bright-hover">
                      {process.env.NEXT_PUBLIC_MAIL}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden laptop:flex ml-1 desktop:ml-4 align-items-center">
          <Button
            text="Try Free"
            backgroundColor="purpleBright"
            hoverBackgroundColor="purpleBrightHover"
            isLink={true}
            href="https://app.amplication.com/login"
            className="text-[15px] h-[40px] whitespace-nowrap !px-4 desktop:!px-8"
          />
          <Link href="https://app.amplication.com/login">
            <a className="whitespace-nowrap text-xl block laptop:inline-block hover:text-purple-bright text-center laptop:text-left text-gray laptop:text-base py-7 laptop:py-2 ml-3 desktop:ml-8"
            >
              Log In
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
