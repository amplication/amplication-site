import Image from 'next/image';
import Link from 'next/link';
import Button from '../../Common/Button';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import useWindowSize from '../../../utils/useWindowSize';
import * as analytics from '../../../lib/analytics';
import Logo from '../Logo';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubStarsUsButtonContent from '../../Common/GitHubStarsButton/GitHubStarsUsButtonContent';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  LEFT_MENU_ITEMS,
  RIGHT_MENU_ITEMS,
  LOGIN_MENU_ITEM,
} from './menu-items';

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
            <Nav className="mr-auto">
              {LEFT_MENU_ITEMS.map((item, index) => (
                <MenuItem
                  isMobileMenu={isMobileMenu}
                  key={index}
                  item={item}
                  onMenuItemClick={handleMenuClick}
                />
              ))}
            </Nav>
            <Nav className="ml-auto">
              {RIGHT_MENU_ITEMS.map((item, index) => (
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
                  url: 'https://github.com/amplication/amplication',

                  target: '_blank',
                }}
                onMenuItemClick={handleStarUsClick}
              />
              <MenuItem
                isMobileMenu={isMobileMenu}
                item={LOGIN_MENU_ITEM}
                className="nav-link-sep"
                onMenuItemClick={handleStartNowClick}
              />
            </Nav>
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
        }, 100),
      );
    }
  };

  const { asPath } = useRouter();

  const hasSubItems = item.menuItems && item.menuItems.length > 0;
  const hasColumns = item.columns && item.columns.length > 0;

  return hasSubItems || hasColumns ? (
    <NavDropdown
      onClick={handleDropDownClick}
      show={dropdownOpen}
      onMouseOver={handleDropDownMouseOver}
      onMouseOut={handleDropDownMouseOut}
      align={item.align || 'start'}
      title={item.title}
      id="basic-nav-dropdown"
    >
      <Container fluid>
        <Row className="p-4" lg={item.columns?.length || 1} xs="1">
          {item.columns?.length ? (
            item.columns.map((column, index) => (
              <Col key={index} className="nav-link-column">
                {column.title && (
                  <div className="flex flex-row items-center text-xs text-gray font-normal pb-2">
                    {column.title}
                  </div>
                )}

                {column.menuItems.map((subItem, index) => (
                  <InnerMenuItem
                    isMobileMenu={isMobileMenu}
                    key={index}
                    item={subItem}
                    onMenuItemClick={onMenuItemClick}
                  />
                ))}
              </Col>
            ))
          ) : (
            <Col>
              {item.menuItems.map((subItem, index) => (
                <InnerMenuItem
                  isMobileMenu={isMobileMenu}
                  key={index}
                  item={subItem}
                  onMenuItemClick={onMenuItemClick}
                />
              ))}
            </Col>
          )}
        </Row>
      </Container>
    </NavDropdown>
  ) : (
    <Link href={item.url}>
      <a
        target={item.target}
        onClick={() => onMenuItemClick(item)}
        className={`nav-link ${
          asPath === item.url ? 'active' : ''
        } ${className}`}
      >
        {item.title}
      </a>
    </Link>
  );
};

const InnerMenuItem = ({ item, onMenuItemClick, isMobileMenu }) => {
  const { asPath } = useRouter();

  return (
    <Link href={item.url}>
      <a
        target={item.target}
        onClick={() => onMenuItemClick(item)}
        className={`nav-link-inner ${asPath === item.url ? 'active' : ''} `}
      >
        <div className="flex flex-row items-center justify-start gap-3 ">
          <div className="w-[32px] h-[32px] flex items-center justify-center bg-dark-black-70 !rounded">
            <Image
              className=""
              width={32}
              height={32}
              src={item.image}
              alt={item.title}
            />
          </div>

          <div>{item.title}</div>
        </div>
      </a>
    </Link>
  );
};

export default Menu;
