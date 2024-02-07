
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


const CUSTOMERS_MENU_ITEMS = [
    {
        title: 'Customer Stories',
        image: Icon7,
        url: '/customers',
    },
    {
        title: 'Retail',
        image: Icon1,
        url: '/build-new-services',
    },
    {
        title: 'Manufacturing',
        image: Icon11,
        url: '/application-modernization',
    },
    {
        title: 'Healthcare',
        image: Icon11,
        url: '/application-modernization',
    },

]


const ABOUT_MENU_ITEMS = [

    {
        title: 'Company',
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
        title: 'Customer Stories',
        image: Icon7,
        url: '/customers',
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
    {
        title: 'GitHub',
        image: Icon10,
        url: 'https://github.com/amplication/amplication',
    },
    {
        title: 'Blog',
        image: Icon3,
        url: '/blog',
    },
]

const USE_AMPLICATION_MENU_ITEMS = [
    {
        title: 'Get started ',
        image: Icon8,
        url: 'https://docs.amplication.com/first-service/',
    },
    {
        title: 'Build APIs on legacy DB',
        image: Icon7,
        url: 'https://docs.amplication.com/how-to/import-prisma-schema/',
    },
    {
        title: 'Event-Driven architecture',
        image: Icon10,
        url: 'https://docs.amplication.com/',
    },
    {
        title: 'Break the monolith',
        image: Icon12,
        url: 'https://docs.amplication.com/break-the-monolith/#how-to-use-break-the-monolith',
    },
    {
        title: 'Custom plugins',
        image: Icon12,
        url: 'https://docs.amplication.com/plugins/how-to-create-plugin/',
    },

]




export const LEFT_MENU_ITEMS = [

];

export const RIGHT_MENU_ITEMS = [

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
        title: 'Customers',
        align: "end",
        columns: [
            {
                menuItems: CUSTOMERS_MENU_ITEMS,
            }
        ],
    },
    {
        title: 'Learn',
        align: "end",
        columns: [
            {
                title: "Use Amplication",
                menuItems: USE_AMPLICATION_MENU_ITEMS,
            },
            {
                title: "Resource",
                menuItems: RESOURCES_MENU_ITEMS,
            },

        ],
    },
    {
        title: 'About',
        align: "end",
        columns: [

            {
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