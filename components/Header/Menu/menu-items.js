
import Icon3 from '../../../public/menu/icon-blog.svg';
import Icon4 from '../../../public/menu/icon-contact.svg';
import Icon5 from '../../../public/menu/icon-custom-code.svg';
import Icon7 from '../../../public/menu/icon-discord.svg';
import Icon8 from '../../../public/menu/icon-docs.svg';
import Icon10 from '../../../public/menu/icon-github.svg';
import Icon12 from '../../../public/menu/icon-plugin.svg';

import IconAPI from '../../../public/menu/icon-api.svg';
import IconBTM from '../../../public/menu/icon-break-the-monolith.svg';
import IconBuildNew from '../../../public/menu/icon-build-new-services.svg';
import IconDotNet from '../../../public/menu/icon-dot-net.svg';
import IconModernize from '../../../public/menu/icon-modernize-applications.svg';
import IconPlugins from '../../../public/menu/icon-plugins.svg';

import IconHealthcare from '../../../public/menu/icon-healthcare.svg';
import IconManufacturing from '../../../public/menu/icon-manufacturing.svg';
import IconRetails from '../../../public/menu/icon-retail.svg';
import IconStories from '../../../public/menu/icon-stories.svg';



const PRODUCT_MENU_ITEMS =
    [
        {
            title: 'Products',
            menuItems: [
                {
                    title: 'Build new services',
                    image: IconBuildNew,
                    url: '/build-new-services',
                    description: 'Production-ready backend with .NET or Node.js',
                },

                {
                    title: 'Modernize applications',
                    image: IconModernize,
                    url: '/application-modernization',
                    description: 'Transform and migrate legacy systems',
                },
                {
                    title: 'Build APIs on existing DB',
                    image: IconAPI,
                    url: '/database-first-api',
                    description: 'Head start development using existing DB',
                },


            ],
        },
        {
            title: ' ',
            menuItems: [
                {
                    title: 'Break the monolith',
                    image: IconBTM,
                    url: '/break-the-monolith',
                    description: 'Shift to microservices seamlessly',
                },

                {
                    title: 'Plugins',
                    image: IconPlugins,
                    url: '/plugins',
                    description: 'Extend and customize your services',
                },
                {
                    title: 'Build with .NET',
                    image: IconDotNet,
                    url: '/dot-net',
                    description: 'Enterprise-grade .NET backend services',
                },


            ],
        }
    ]



const CUSTOMERS_MENU_ITEMS = [
    {
        menuItems: [

            {
                title: 'Retail',
                image: IconRetails,
                url: '/industries/retail',
            },
            {
                title: 'Manufacturing',
                image: IconManufacturing,
                url: '/industries/manufacturing',
            },
            {
                title: 'Healthcare',
                image: IconHealthcare,
                url: '/industries/healthcare',
            },

        ],
    },
    {
        menuItems: [
            {
                title: 'Customer Stories',
                image: IconStories,
                url: '/customers',
            },


        ],
    }
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
        columns: PRODUCT_MENU_ITEMS,
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
        columns: CUSTOMERS_MENU_ITEMS,
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