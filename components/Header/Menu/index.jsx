import Link from "next/link";
import Button from "../../Common/Button";
import { useRouter } from 'next/router'
import {useState} from 'react';



const Menu = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { asPath } = useRouter();

  const menuItems = [
    {
      title: 'Docs',
      href: 'https://docs.amplication.com/docs/getting-started/',
      target: '_blank',
      isActive: false,
    },
    {
      title: 'Features',
      href: '/features',
      target: '_self',
      isActive: Boolean(asPath === '/features'),
    },
    {
      title: 'Pricing',
      href: '/pricing',
      target: '_self',
      isActive: Boolean(asPath === '/pricing'),
    },
    {
      title: 'Community',
      href: '/community',
      target: '_self',
      isActive: Boolean(asPath === '/community'),
    },
    {
      title: 'Team',
      href: '/team',
      target: '_self',
      isActive: Boolean(asPath === '/team'),
    },
    {
      title: 'Careers',
      href: 'https://amplication.breezy.hr/',
      target: '_blank',
      isActive: false,
    },
    {
      title: 'Roadmap',
      href: '/#roadmap',
      target: '_self',
      isActive: false,
    },
    {
      title: 'Blog',
      href: '/blog',
      target: '_self',
      isActive: Boolean(asPath.includes('/tags') || asPath.includes('/blog')),
    },
  ];

  return(
    <div className=''>
      <div onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} className='cursor-pointer relative w-h h-6 laptop:hidden'>
        <div className={'burger-menu' + (isMobileMenuOpened ? ' burger-menu--active' : '')}>
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
        </div>
      </div>
      <div className={`menu ${isMobileMenuOpened ? 'menu--opened' : 'menu--closed overflow-visible'}`}>
        <nav>
          <ul className='flex flex-col justify-start items-stretch laptop:flex-row justify:end items:center'>
            {menuItems.map((item, index) => {
              let menuItemClasses = 'menu__item laptop:px-4 relative';
              if (item.isActive) {
                menuItemClasses += ' laptop:before:absolute laptop:before:block laptop:before:content-[attr(data-before)] laptop:before:w-full laptop:before:h-1 laptop:before:bg-purple-bright laptop:before:left-0 laptop:before:bottom-[-14px] laptop:before:rounded-t';
              } else {
                menuItemClasses += '';
              }
              return (
                <li key={index.toString()} className={menuItemClasses}>
                  <Link
                    // href={{
                    //   pathname: item.href,
                    //   //hash: 'roadmap'
                    // }}
                    href={item.href}
                  >
                    <a className={`text-xl py-3 inline-block laptop:text-base laptop:p-1 ${(item.isActive ? 'text-white' : 'text-[#A3A8B8]')}`} target={item.target}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>
        <div className='hidden laptop:inline-block ml-4'>
          <Button
            text='Login'
            backgroundColor='purpleBright'
            hoverBackgroundColor='purpleBrightHover'
            isLink={true}
            href={process.env.NEXT_PUBLIC_SITE}
            />
        </div>
      </div>
    </div>
  )
}

export default Menu
