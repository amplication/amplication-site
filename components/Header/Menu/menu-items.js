
import Feature1 from '../../../public/images/features/feature-icon-1.svg';
import Feature2 from '../../../public/images/features/feature-icon-2.svg';
import Feature3 from '../../../public/images/features/feature-icon-3.svg';
import Feature4 from '../../../public/images/features/feature-icon-4.svg';
import Feature5 from '../../../public/images/features/feature-icon-5.svg';
import Feature6 from '../../../public/images/features/feature-icon-6.svg';
import Feature7 from '../../../public/images/features/feature-icon-7.svg';
import Feature8 from '../../../public/images/features/feature-icon-8.svg';
import Feature9 from '../../../public/images/features/feature-icon-9.svg';
import Feature10 from '../../../public/images/features/feature-icon-10.svg';
import Feature11 from '../../../public/images/features/feature-icon-11.svg';
import Feature12 from '../../../public/images/features/feature-icon-12.svg';


const PRODUCT_MENU_ITEMS_2 = [
    {
        title: 'Build new services',
        image: Feature12,
        description: 'a short description of the item',
        url: '/developers',
    },

    {
        title: 'Build APIs on existing DB',
        image: Feature11,
        description: 'a short description of the item',
        url: '/developers',
    },
    {
        title: 'Event-Driven architecture',
        image: Feature11,
        description: 'a short description of the item',
        url: '/developers',
    },
]


const PRODUCT_MENU_ITEMS = [
    {
        title: 'Continuous Backend Generator ',
        image: Feature11,
        description: 'a short description of the item',
        url: '/developers',
    },
    {
        title: 'Digital transformation and modernization ',
        image: Feature11,
        description: 'a short description of the item',
        url: '/developers',
    },
    {
        title: 'Break the monolith',
        image: Feature11,
        description: 'a short description of the item',
        url: '/developers',
    },
    {
        title: 'Standardize backend infrastructure ',
        image: Feature11,
        description:
            'a longer description of the item a longer description of the item',
        url: '/developers',
    },

]

const FEATURE_MENU_ITEMS = [

    {
        title: 'GraphQL',
        image: Feature5,
        url: '/developers',
    },
    {
        title: 'REST API',
        image: Feature4,
        url: '/about',
    },
    {
        title: 'Identity & Permissions',
        image: Feature3,
        url: '/team',
    },
    {
        title: 'React Admin UI',
        image: Feature2,
        url: '/team',
    },
    {
        title: 'Custom Code',
        image: Feature1,
        url: '/contact-us',
    },
]

const CUSTOMERS_MENU_ITEMS = [
    {
        title: 'Manufacturing',
        image: Feature12,
        description: 'a short description of the item',
        url: '/developers',
    },
    {
        title: 'Retail',
        image: Feature11,
        description:
            'a longer description of the item a longer description of the item',
        url: '/developers',
    },
    {
        title: 'Healthcare',
        image: Feature11,
        description:
            'a longer description of the item a longer description of the item',
        url: '/developers',
    },
]

const GET_STARTED_MENU_ITEMS = [
    {
        title: 'Why Amplication',
        url: '/docs/why',
        image: Feature7,
        target: '_docs',
    },
    {
        title: 'Build your first service with Amplication',
        url: '/docs/getting-started',
        image: Feature8,
        target: '_docs',
    },
    {
        title: 'Build API on your existing DB',
        url: '/docs/getting-started',
        image: Feature9,
        target: '_docs',
    },
    {
        title: 'Event-driven architecture',
        url: '/docs/getting-started',
        image: Feature10,
        target: '_docs',
    }
]

const RESOURCES_MENU_ITEMS = [
    {
        title: 'Docs',
        image: Feature2,
        url: 'https://docs.amplication.com',
    },
    {
        title: 'Blog',
        image: Feature3,
        url: '/blog',
    },
    {
        title: 'GitHub',
        image: Feature4,
        url: 'https://github.com/amplication/amplication',
    },
    {
        title: 'Discord Community',
        image: Feature6,
        url: 'https://amplication.com/discord',
        target: '_blank',
    },
    {
        title: 'Video',
        image: Feature5,
        url: '/contact-us',
    },
    {
        title: 'Contact Us',
        image: Feature5,
        url: '/contact-us',
    },
]




export const LEFT_MENU_ITEMS = [
    {
        title: 'Product2',
        align: "start",
        columns: [
            {
                title: 'Products',
                menuItems: [...PRODUCT_MENU_ITEMS, ...PRODUCT_MENU_ITEMS_2],
            },
            {
                title: '',
                menuItems: FEATURE_MENU_ITEMS,
            },
        ],
    },
    {
        title: 'Product',
        align: "start",
        columns: [
            {
                title: 'Products',
                menuItems: PRODUCT_MENU_ITEMS,
            },
            {
                title: '',
                menuItems: PRODUCT_MENU_ITEMS_2,
            },
        ],
    },
    {
        title: 'Customers',
        align: "start",
        columns: [
            {
                title: 'Customers',
                menuItems: CUSTOMERS_MENU_ITEMS,
            }

        ],

    },
    {
        title: 'Pricing',
        url: '/pricing',
    },
    {
        title: 'Enterprise',
        url: '/enterprise',
    }
];

export const RIGHT_MENU_ITEMS = [
    {
        title: 'Docs',
        url: 'https://docs.amplication.com/',
        target: '_blank',
    },
    {
        title: 'Learn',
        align: "end",
        columns: [
            {
                title: 'Get Started',
                menuItems: GET_STARTED_MENU_ITEMS,
            },
            {
                title: 'Resources',
                menuItems: RESOURCES_MENU_ITEMS,
            },
        ],
    },

    {
        title: 'Log In',
        url: 'https://app.amplication.com/login',
        onClickEventName: 'startNowClicked',
        onClickEventParams: {
            buttonLocation: 'header-login',
        },
    },
];