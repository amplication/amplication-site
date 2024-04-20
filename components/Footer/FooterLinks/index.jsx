import Link from 'next/link';
import Image from 'next/image';
import youtubeIcon from '../../../public/images/icons/youtube.svg';
import TwitterIcon from '../../../public/images/icons/twitter_v2.svg';
import { FOOTER_GROUPS } from '../../Header/Menu/menu-items';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-footer tablet:grid-cols-footer-medium laptop:grid-cols-footer-large gap-8 py-8 px-8 tablet:px-32 my-8 text-sm justify-center ">
      {FOOTER_GROUPS.map((group, index) => (
        <div key={index} className="flex flex-col gap-2 max-w-[200px]">
          {group.title && <p className="text-white font-bold">{group.title}</p>}
          {group.items.map((item, index) => (
            <Link key={index} href={item.url}>
              {group.title ? (
                <a className="text-gray hover:text-white">{item.title}</a>
              ) : (
                <a className="text-white font-bold hover:text-white">
                  {item.title}
                </a>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
