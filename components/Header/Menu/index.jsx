import Link from "next/link";
import Button from "../../Common/Button";
import { useRouter } from 'next/router'
import {useState} from 'react';



const Menu = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const router = useRouter();

  const menuItems = [
    {
      title: 'Docs',
      href: '/docs',
      isActive: false,
    },
    {
      title: 'Features',
      href: '/features',
      isActive: false,
    },
    {
      title: 'Pricing',
      href: '/pricing',
      isActive: false,
    },
    {
      title: 'Community',
      href: '/community',
      isActive: false,
    },
    {
      title: 'Careers',
      href: '/careers',
      isActive: false,
    },
    {
      title: 'Roadmap',
      href: '/roadmap',
      isActive: false,
    },
    {
      title: 'Blog',
      href: '/blog',
      isActive: router.pathname !== '/404',
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
                menuItemClasses += ' laptop:before:absolute laptop:before:block laptop:before:content-[attr(data-before)] laptop:before:w-full laptop:before:h-1 laptop:before:bg-purple-bright laptop:before:left-0 laptop:before:bottom-[-12px] laptop:before:rounded-t';
              } else {
                menuItemClasses += '';
              }
              return (
                <li key={index.toString()} className={menuItemClasses}>
                  <Link href={item.href}>
                    <a className={`text-xl py-3 inline-block laptop:text-base laptop:p-1 ${(item.isActive ? 'text-white' : 'text-[#A3A8B8]')}`}>
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
