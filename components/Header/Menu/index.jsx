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
  const [isOpened, setIsOpened] = useState(false);

  return(
    <div className='overflow-hidden'>
      <div onClick={() => setIsOpened(!isOpened)} className='w-6 h-6 cursor-pointer relative'>
        <span className='burger-line translate-y-[-200%]'></span>
        <span className='burger-line translate-y-[0]'></span>
        <span className='burger-line translate-y-[200%]'></span>
      </div>
      <div className={isOpened ? 'mobile-menu-opened' : 'mobile-menu-closed'}>
        <nav>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index.toString()}>
                  <Link href={item.href}>
                    <a>
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
