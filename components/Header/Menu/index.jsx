import Link from 'next/link';
import Button from '../../Common/Button';
import {useRouter} from 'next/router';
import {useState} from 'react';

const Menu = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');
  const {asPath} = useRouter();

  const menuItems = [
    {
      title: 'Docs',
      href: {
        pathname: 'https://docs.amplication.com/docs/getting-started/',
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
      title: 'Features',
      href: {
        pathname: '/features',
      },
      target: '_self',
      isActive: Boolean(asPath === '/features'),
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
      title: 'Community',
      href: {
        pathname: '/community',
      },
      target: '_self',
      isActive: Boolean(asPath === '/community'),
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
        // {
        //   title: 'Roadmap',
        //   href: {
        //     pathname: '/',
        //     hash: 'roadmap',
        //   },
        //   target: '_self',
        //   isActive: false,
        // },
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
              let menuItemClasses = 'menu__item laptop:px-4 relative';
              if (item.isActive) {
                menuItemClasses +=
                  ' laptop:before:absolute laptop:before:block laptop:before:content-[attr(data-before)] laptop:before:w-full laptop:before:h-1 laptop:before:bg-purple-bright laptop:before:left-0 laptop:before:bottom-0 laptop:before:rounded-t';
              } else {
                menuItemClasses += '';
              }
              return (
                <li key={index.toString()} className={menuItemClasses} onMouseEnter={() => setHoveredLink(item.href.pathname)} onMouseLeave={() => setHoveredLink('')}>
                  { !item.menuItems && (
                    <Link href={item.href}>
                      <a
                        className={`text-xl inline-block hover:text-white laptop:text-base py-3 laptop:py-5 ${
                          ( item.isActive ? 'text-white' : 'text-[#A3A8B8]' ) + ( item.href.pathname === '/enterprise' ? ' !text-[#54DBEE] font-medium' : '' )
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
                        <span className="text-xl text-[#A3A8B8] inline-block hover:text-white laptop:text-base laptop:p-1 py-3 laptop:py-5 cursor-pointer">
                          {item.title}
                        </span>
                        <ul className={"absolute top-0 invisible transition-all min-w-[110px] bg-purple-light rounded top-20 overflow-hidden " + (hoveredLink === item.href.pathname ? ' !visible !top-16' : '')}>
                          {item.menuItems.map((item, i) => {
                            return (
                              <li key={i.toString()} className={"menu__item relative rounded" + (i !== 0 ? ' laptop:before:absolute laptop:before:block laptop:before:content-[attr(data-after)] laptop:before:w-full laptop:before:h-[1px] laptop:before:bg-light-blue laptop:before:left-0 laptop:before:top-0' : '')}>
                                <Link href={item.href}>
                                  <a
                                    className={`text-xl hover:text-white laptop:text-base block laptop:px-4 py-3 laptop:py-4 ${item.isActive ? 'text-white bg-purple-bright' : 'text-[#A3A8B8]'}`}
                                    target={item.pathname}
                                    onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
                                  >
                                    {item.title}
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
        <div className="mt-auto py-8 laptop:hidden">
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
        <div className="hidden laptop:inline-block ml-4">
          <Button
            text="Login"
            backgroundColor="purpleBright"
            hoverBackgroundColor="purpleBrightHover"
            isLink={true}
            href={'https://app.amplication.com/'}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
