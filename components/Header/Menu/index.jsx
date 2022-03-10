import Link from "next/link";
import Button from "../../Common/Button";
import {useState} from 'react';

const menuItems = [
  {
    title: 'Docs',
    href: '/docs',
  },
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Community',
    href: '/community',
  },
  {
    title: 'Careers',
    href: '/careers',
  },
  {
    title: 'Roadmap',
    href: '/roadmap',
  },
];

const Menu = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return(
    <div className=''>
      <div onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} className='cursor-pointer relative w-h h-6 laptop:hidden'>
        <div className={'burger-menu' + (isMobileMenuOpened ? ' burger-menu--active' : '')}>
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
        </div>
      </div>
      <div className={`menu ${isMobileMenuOpened ? 'menu--opened' : 'menu--closed'}`}>
        <nav>
          <ul className='flex flex-col justify-start items-stretch laptop:flex-row justify:end items:center'>
            {menuItems.map((item, index) => {
              return (
                <li key={index.toString()} className='menu__item laptop:mx-4'>
                  <Link href={item.href}>
                    <a className='text-xl py-3 inline-block laptop:text-base laptop:p-1 text-[#A3A8B8] hover:text-white'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>
        <div className='hidden laptop:inline-block'>
          <Button
            text='Login'
            backgroundColor='purpleBright'
            />
        </div>
      </div>
    </div>
  )
}

export default Menu
