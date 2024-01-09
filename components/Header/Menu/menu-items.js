
import Icon1 from '../../../public/menu/icon-box.svg';
import Icon2 from '../../../public/menu/icon-backend.svg';
import Icon3 from '../../../public/menu/icon-blog.svg';
import Icon4 from '../../../public/menu/icon-contact.svg';
import Icon5 from '../../../public/menu/icon-custom-code.svg';
import Icon6 from '../../../public/menu/icon-db.svg';
import Icon7 from '../../../public/menu/icon-discord.svg';
import Icon8 from '../../../public/menu/icon-docs.svg';
import Icon9 from '../../../public/menu/icon-events.svg';
import Icon10 from '../../../public/menu/icon-github.svg';
import Icon11 from '../../../public/menu/icon-microservices.svg';
import Icon12 from '../../../public/menu/icon-plugin.svg';
import Icon13 from '../../../public/menu/icon-video.svg';
import Icon14 from '../../../public/menu/icon-api.svg';


const PRODUCT_MENU_ITEMS = [
    {
        title: 'Build new services',
        image: Icon1,
        url: '/build-new-services',
    },

    {
        title: 'Application Modernization',
        image: Icon11,
        url: '/application-modernization',
    },

]



const ABOUT_MENU_ITEMS = [
    {
        title: 'Blog',
        image: Icon3,
        url: '/blog',
    },
    {
        title: 'About',
        image: Icon4,
        url: '/about',
    },
    {
        title: 'Team',
        image: Icon5,
        url: '/team',
    },
    {
        title: 'Contact Us',
        image: Icon4,
        url: '/contact-us',
    },
]

const RESOURCES_MENU_ITEMS = [
    {
        title: 'Docs',
        image: Icon8,
        url: 'https://docs.amplication.com/',
    },
    {
        title: 'GitHub',
        image: Icon10,
        url: 'https://github.com/amplication/amplication',
    },
    {
        title: 'Discord Community',
        image: Icon7,
        url: '/discord',
    },
    {
        title: 'Plugins Catalog',
        image: Icon12,
        url: '/plugins',
    },
]



export const LEFT_MENU_ITEMS = [

];

export const RIGHT_MENU_ITEMS = [

    {
        title: 'Docs',
        url: 'https://docs.amplication.com/',
        target: '_blank',
    },
    {
        title: 'Product',
        align: "start",
        columns: [
            {
                menuItems: PRODUCT_MENU_ITEMS,
            }
        ],
    },
    {
        title: 'Enterprise',
        url: '/enterprise',
    },
    {
        title: 'Pricing',
        url: '/pricing',
    },
    {
        title: 'Learn',
        align: "end",
        columns: [
            {
                title: "Resources",
                menuItems: RESOURCES_MENU_ITEMS,
            },
            {
                title: "company",
                menuItems: ABOUT_MENU_ITEMS,
            },
        ],
    }


];

export const LOGIN_MENU_ITEM = {
    title: 'Log In',
    url: 'https://app.amplication.com/login',
    onClickEventName: 'startNowClicked',
    onClickEventParams: {
        buttonLocation: 'header-login',
    },
}