import Link from 'next/link';
import Button from '../../Common/Button';
import {useRouter} from 'next/router';
import {useState, useEffect, useCallback} from 'react';
import useWindowSize from '../../../utils/useWindowSize';
import * as analytics from '../../../lib/analytics';

const Menu = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');
  const {width} = useWindowSize();
  const {asPath} = useRouter();

  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'header',
      },
    });
  });

  const handleMenuClick = useCallback(menuItem => {
    if (menuItem && menuItem.onClickEventName) {
      analytics.event({
        action: menuItem.onClickEventName,
        params: menuItem.onClickEventParams,
      });
    }
  });

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
      title: 'Enterprise',
      href: {
        pathname: '/enterprise',
      },
      target: '_self',
      isActive: Boolean(asPath === '/enterprise'),
    },
    {
      title: 'Developers',
      href: {
        pathname: '/developers',
      },
      target: '_self',
      isActive: Boolean(asPath === '/developers'),
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
          title: 'Blog',
          href: {
            pathname: '/blog',
          },
          target: '_self',
          isActive: Boolean(
            asPath.includes('/tags') || asPath.includes('/blog')
          ),
        },
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
        {
          title: 'Contact Us',
          href: {
            pathname: '/contact-us',
          },
          target: '_self',
          isActive: Boolean(asPath === '/contact-us'),
        },
      ],
    },
    {
      title: '',
    },
    {
      title: 'Log In',
      href: {
        pathname: 'https://app.amplication.com/login',
      },
      target: '_self',
      isActive: Boolean(asPath === 'https://app.amplication.com/login'),
      onClickEventName: 'startNowClicked',
      onClickEventParams: {
        buttonLocation: 'header-login',
      },
    },
  ];

  useEffect(() => {
    if (hoveredLink !== '') {
      setHoveredLink(null);
    }
  }, [asPath]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHoveredLink('');
    });
  }, [width]);

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
              const menuItemClasses = 'menu__item relative';
              if (item.title === '') {
                return (
                  <li
                    className="py-2 mx-2 items-center hidden laptop:flex"
                    key={index}
                  >
                    <span className="w-[1px] h-[34px] bg-light-blue"></span>
                  </li>
                );
              }

              return (
                <li
                  key={index.toString()}
                  className={
                    (hoveredLink === item.href.pathname
                      ? 'bg-purple-bright laptop:bg-transparent '
                      : '') + menuItemClasses
                  }
                  onMouseOver={() => {
                    if (width > 991) {
                      setHoveredLink(
                        hoveredLink === '' ? item.href.pathname : ''
                      );
                    }
                  }}
                  onMouseOut={() => {
                    if (width > 991) {
                      setHoveredLink(
                        hoveredLink === '' ? item.href.pathname : ''
                      );
                    }
                  }}
                  onClick={() => {
                    if (width <= 991) {
                      setHoveredLink(
                        hoveredLink === '' ? item.href.pathname : ''
                      );
                    }
                  }}
                >
                  {!item.menuItems && (
                    <Link href={item.href}>
                      <a
                        className={`text-xl block laptop:inline-block hover:text-purple-bright text-center laptop:text-left border-[#353B57] border-b-[1px] laptop:border-b-0 laptop:text-base p-7 laptop:py-6 laptop:px-2 desktop:px-[15px] ${
                          item.isActive ? 'text-purple-bright' : 'text-gray'
                        }`}
                        target={item.pathname}
                        onClick={() => {
                          handleMenuClick(item);
                          setIsMobileMenuOpened(!isMobileMenuOpened);
                        }}
                      >
                        {item.title}
                      </a>
                    </Link>
                  )}
                  {item.menuItems && (
                    <>
                      <span
                        className={
                          'text-gray hover:text-purple-bright text-xl text-center laptop:text-left laptop:text-base p-7 laptop:py-6 laptop:px-2 desktop:px-[15px] cursor-pointer justify-center flex ' +
                          (hoveredLink === item.href.pathname
                            ? ' !text-white laptop:!text-purple-bright'
                            : 'border-[#353B57] border-b-[1px] laptop:border-b-0')
                        }
                      >
                        {item.title}
                        <svg
                          className={
                            'ml-1 my-auto block' +
                            (hoveredLink === item.href.pathname
                              ? ' rotate-180'
                              : '')
                          }
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 7L8.75 10.75L5 7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <ul
                        className={
                          'laptop:absolute top-0 invisible transition-all min-w-[110px] bg-purple-light laptop:rounded laptop:top-16 h-0 overflow-hidden ' +
                          (hoveredLink === item.href.pathname
                            ? ' !h-auto !visible laptop:!top-[60px]'
                            : '')
                        }
                      >
                        {item.menuItems.map((subItem, i) => {
                          const url =
                            subItem.href.pathname +
                            (subItem.href.hash ? '#' + subItem.href.hash : '');
                          return (
                            <li
                              key={i.toString()}
                              className="menu__item relative laptop:rounded"
                              onClick={() => {
                                if (width <= 991) {
                                  setIsMobileMenuOpened(false);
                                }
                              }}
                            >
                              <Link href={subItem.href}>
                                <a
                                  onClick={() => {
                                    handleMenuClick(subItem);
                                  }}
                                  className={`text-xl max-laptop:hover:opacity-90 hover:text-white laptop:text-base text-center laptop:text-left block py-7 laptop:p-4 !leading-snug bg-purple-bright laptop:bg-purple-light ${
                                    asPath !== url
                                      ? 'text-white laptop:text-gray laptop:bg-purple-light'
                                      : 'laptop:!text-white laptop:!bg-purple-bright'
                                  }`}
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
                  )}
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
            text="Start Now"
            backgroundColor="purpleBright"
            hoverBackgroundColor="purpleBrightHover"
            isLink={true}
            onClick={handleStartNowClick}
            href="https://app.amplication.com/login"
            className="text-[15px] h-[40px] whitespace-nowrap !px-4"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
