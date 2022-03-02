import Link from "next/link";
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
      <div onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} className='open cursor-pointer relative w-h h-6'>
        <div className={isMobileMenuOpened ? 'menu active' : 'menu'}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={isMobileMenuOpened ? 'mobile-menu mobile-menu-opened' : 'mobile-menu mobile-menu-closed'}>
        <nav>
          <ul className='flex flex-col justify-start items-stretch'>
            {menuItems.map((item, index) => {
              return (
                <li key={index.toString()} className='menu-item'>
                  <Link href={item.href}>
                    <a className='text-white text-xl py-3 inline-block'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu