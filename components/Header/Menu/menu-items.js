
import IconContact from '../../../public/menu/icon-contact.svg';
import IconCustomCode from '../../../public/menu/icon-custom-code.svg';

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

import IconEventDriven from '../../../public/menu/icon-event-driven.svg';
import IconGettingStarted from '../../../public/menu/icon-getting-started.svg';
import IconSyncWithGit from '../../../public/menu/icon-sync-with-git.svg';
import IconBackend from '../../../public/menu/icon-backend.svg';


import IconBlog from '../../../public/menu/icon-blog.svg';
import IconCatalog from '../../../public/menu/icon-catalog.svg';
import IconDiscord from '../../../public/menu/icon-discord.svg';
import IconDocs from '../../../public/menu/icon-docs.svg';
import IconGithub from '../../../public/menu/icon-github.svg';

const PLATFORM_MENU_ITEMS_1 = [

    {
        title: 'Live Templates',
        image: IconBuildNew,
        url: '/live-templates',
        description: 'Tailor-made Templates to Keep Your Services Always Up-to-Date',
    },
    {
        title: 'Plugins',
        image: IconPlugins,
        url: '/extend-with-plugins',
        description: 'Customize Your Development with Amplication’s Plugins',
    },
    {
        title: 'Jovu',
        image: IconBackend,
        url: '/jovu--production-ready-ai-code-generation',
        description: 'From idea to production in minutes',
    },

];

const PRODUCTS_ITEMS_1 = [
    {
        title: 'Enhance platform engineering',
        image: IconBuildNew,
        url: '/platform-engineering',
        description: 'Scaffolding, Golden Paths, standardization, maintenance',
    },
    {
        title: 'Build new services',
        image: IconBuildNew,
        url: '/build-new-services',
        description: 'Production-ready backend with .NET or Node.js',
    },
    {
        title: 'Build APIs on existing DB',
        image: IconAPI,
        url: '/build-api-on-existing-db',
        description: 'Head start development using existing DB',
    },
    {
        title: 'Modernize applications',
        image: IconModernize,
        url: '/application-modernization',
        description: 'Transform and migrate legacy systems',
    },

];





const CUSTOMERS_ITEMS_1 = [
    {
        title: 'IT Services',
        image: IconBuildNew,
        url: '/industries/it-services',
    },
    {
        title: 'Retail',
        image: IconRetails,
        url: '/industries/retail',
    },

    {
        title: 'Healthcare',
        image: IconHealthcare,
        url: '/industries/healthcare',
    },
];
const CUSTOMERS_ITEMS_2 = [
    {
        title: 'Manufacturing',
        image: IconManufacturing,
        url: '/industries/manufacturing',
    },
    {
        title: 'Customer stories',
        image: IconStories,
        url: '/customers',
    },
];


const PRODUCT_MENU_ITEMS = [
    {
        menuItems: PRODUCTS_ITEMS_1,
    },

]


const CUSTOMERS_MENU_ITEMS = [
    {
        menuItems: CUSTOMERS_ITEMS_1,
    },
    {
        menuItems: CUSTOMERS_ITEMS_2,
    }
]

const PLATFORM_MENU_ITEMS = [
    {
        menuItems: PLATFORM_MENU_ITEMS_1,
    },

]






const RESOURCES_MENU_ITEMS = [
    {
        title: 'Docs',
        image: IconDocs,
        url: 'https://docs.amplication.com/',
    },
    {
        title: 'Customer stories',
        image: IconStories,
        url: '/customers',
    },
    {
        title: 'Plugins catalog',
        image: IconCatalog,
        url: '/plugins',
    },
    {
        title: 'Discord community',
        image: IconDiscord,
        url: '/discord',
    },
    {
        title: 'GitHub',
        image: IconGithub,
        url: 'https://github.com/amplication/amplication',
    },
    {
        title: 'Blog',
        image: IconBlog,
        url: '/blog',
    },
]

const USE_AMPLICATION_MENU_ITEMS = [
    {
        title: 'Get started ',
        image: IconGettingStarted,
        url: 'https://docs.amplication.com/first-service/',
    },
    {
        title: 'Custom plugins',
        image: IconPlugins,
        url: 'https://docs.amplication.com/plugins/how-to-create-plugin/',
    },
    {
        title: 'Custom code',
        image: IconCustomCode,
        url: 'https://docs.amplication.com/custom-code/',
    },
    {
        title: 'Sync with Git',
        image: IconSyncWithGit,
        url: 'https://docs.amplication.com/smart-git-sync/',
    },
    {
        title: 'Event-driven architecture',
        image: IconEventDriven,
        url: 'https://docs.amplication.com/concepts/event-driven-architecture/',
    },
    {
        title: 'Break the monolith',
        image: IconBTM,
        url: 'https://docs.amplication.com/break-the-monolith/',
    },


]

const ABOUT_ITEMS = [
    {
        title: 'Company',
        url: '/about',

    },
    {
        title: 'Contact us',
        url: '/contact-us',

    }
]



export const LEFT_MENU_ITEMS = [

];

export const RIGHT_MENU_ITEMS = [

    {
        title: 'Platform',
        align: "start",
        columns: PLATFORM_MENU_ITEMS,
    },
    {
        title: 'Solutions',
        align: "start",
        columns: PRODUCT_MENU_ITEMS,
    },
    {
        title: 'Plugins',
        url: '/plugins',
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
                title: "Resources",
                menuItems: RESOURCES_MENU_ITEMS,
            },

        ],
    },


];




export const LOGIN_MENU_ITEM = {
    title: 'Log In',
    url: 'https://app.amplication.com/login',
    onClickEventName: 'startNowClicked',
    onClickEventParams: {
        buttonLocation: 'header-login',
    },
}


export const FOOTER_GROUPS = [
    {
        title: 'Platform',
        items: [...PLATFORM_MENU_ITEMS_1]

    },

    {
        title: 'Solutions',
        items: [...PRODUCTS_ITEMS_1]

    },
    {
        title: 'Customers',
        items: [...CUSTOMERS_ITEMS_1, ...CUSTOMERS_ITEMS_2]
    },
    {
        title: 'Use Amplication',
        items: USE_AMPLICATION_MENU_ITEMS
    },
    {
        title: 'Resources',
        items: RESOURCES_MENU_ITEMS
    },
    {
        title: 'About',
        items: ABOUT_ITEMS
    }


]