import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import * as analytics from '../../../lib/analytics';
import useWindowSize from '../../../utils/useWindowSize';
import Button from '../../Common/Button';
import Logo from '../Logo';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import GitHubStarsButton from '../../Common/GitHubStarsButton';
import GitHubStarsUsButtonContent from '../../Common/GitHubStarsButton/GitHubStarsUsButtonContent';

const MENU_ITEMS = [
  {
    title: 'Docs',
    href: {
      pathname: 'https://docs.amplication.com/',
    },
    target: '_blank',
  },
  {
    title: 'Enterprise',
    href: {
      pathname: '/enterprise',
    },
    target: '_self',
  },
  {
    title: 'Developers',
    href: {
      pathname: '/developers',
    },
    target: '_self',
  },
  {
    title: 'Pricing',
    href: {
      pathname: '/pricing',
    },
    target: '_self',
  },
  {
    title: 'Company',
    href: {
      pathname: '/company',
    },
    target: '_blank',
    menuItems: [
      {
        title: 'Blog',
        href: {
          pathname: '/blog',
        },
        target: '_self',
      },
      {
        title: 'About',
        href: {
          pathname: '/about',
        },
        target: '_self',
      },
      {
        title: 'Team',
        href: {
          pathname: '/team',
        },
        target: '_self',
      },
      {
        title: 'Careers',
        href: {
          pathname: 'https://amplication.breezy.hr/',
        },
        target: '_blank',
      },
      {
        title: 'Contact Us',
        href: {
          pathname: '/contact-us',
        },
        target: '_self',
      },
    ],
  },
];

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  const { width } = useWindowSize();

  const router = useRouter();
  const isMobileMenu = width < 992;

  const handleStartNowClick = useCallback(() => {
    analytics.event({
      action: 'startNowClicked',
      params: {
        buttonLocation: 'header',
      },
    });
  }, []);

  const handleStarUsClick = useCallback(() => {
    analytics.event({
      action: 'starUsClicked',
      params: {
        pageUri: router.asPath,
      },
    });
  }, [router.asPath]);

  const handleMenuClick = useCallback((menuItem) => {
    if (menuItem && menuItem.onClickEventName) {
      analytics.event({
        action: menuItem.onClickEventName,
        params: menuItem.onClickEventParams,
      });
    }
    setExpanded(false);
  }, []);

  return (
    <>
      <div className="bootstrap-wrapper">
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" expanded={expanded}>
          <Navbar.Brand href="/" onClick={handleMenuClick}>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : 'expanded')}
          >
            <div
              className={
                'burger-menu' + (expanded ? ' burger-menu--active' : '')
              }
            >
              <div className="burger-menu__item"></div>
              <div className="burger-menu__item"></div>
              <div className="burger-menu__item"></div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem
                  isMobileMenu={isMobileMenu}
                  key={index}
                  item={item}
                  onMenuItemClick={handleMenuClick}
                />
              ))}
              <MenuItem
                isMobileMenu={isMobileMenu}
                item={{
                  title: <GitHubStarsUsButtonContent />,
                  href: {
                    pathname: 'https://github.com/amplication/amplication',
                  },
                  target: '_blank',
                }}
                onMenuItemClick={handleStarUsClick}
              />
              <MenuItem
                isMobileMenu={isMobileMenu}
                item={{
                  title: 'Log In',
                  href: {
                    pathname: 'https://app.amplication.com/login',
                  },
                  target: '_self',
                  onClickEventName: 'startNowClicked',
                  onClickEventParams: {
                    buttonLocation: 'header-login',
                  },
                }}
                className="nav-link-sep"
                onMenuItemClick={handleStartNowClick}
              />
            </Nav>
            <div className="mt-auto mt-[-1px] pb-8 laptop:hidden">
              <div className="w-full menu__item pt-12 flex flex-col justify-end items-stretch border-t border-[rgba(255,255,255,0.2)]">
                <div className="w-full">
                  <p className="font-poppins font-medium text-center text-base mb-6 laptop:text-lg laptop:text-left laptop:mb-6">
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
          </Navbar.Collapse>
        </Navbar>
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
          delayLinkMs={300}
        />
      </div>
    </>
  );
};

const MenuItem = ({ item, onMenuItemClick, isMobileMenu, className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutHandle, setTimeoutHandle] = useState(null);

  const handleDropDownClick = () => {
    timeoutHandle && clearTimeout(timeoutHandle);
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropDownMouseOver = () => {
    if (!isMobileMenu) {
      timeoutHandle && clearTimeout(timeoutHandle);
      setDropdownOpen(true);
    }
  };

  const handleDropDownMouseOut = () => {
    if (!isMobileMenu) {
      timeoutHandle && clearTimeout(timeoutHandle);
      setTimeoutHandle(
        setTimeout(() => {
          setDropdownOpen(false);
        }, 300),
      );
    }
  };

  const { asPath } = useRouter();
  const url =
    item.href?.pathname + (item.href?.hash ? '#' + item.href?.hash : '');

  const hasSubItem = item.menuItems && item.menuItems.length > 0;

  return hasSubItem ? (
    <NavDropdown
      onClick={handleDropDownClick}
      show={dropdownOpen}
      onMouseOver={handleDropDownMouseOver}
      onMouseOut={handleDropDownMouseOut}
      title={item.title}
      id="basic-nav-dropdown"
    >
      {item.menuItems.map((subItem, index) => (
        <MenuItem
          isMobileMenu={isMobileMenu}
          key={index}
          item={subItem}
          onMenuItemClick={onMenuItemClick}
        />
      ))}
    </NavDropdown>
  ) : (
    <Link href={url}>
      <a
        target={item.target}
        onClick={() => onMenuItemClick(item)}
        className={`nav-link ${asPath === url ? 'active' : ''} ${className}`}
      >
        {item.title}
      </a>
    </Link>
  );
};

export default Menu;
