
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


const PRODUCT_MENU_ITEMS = [
    {
        title: 'Build new services',
        image: Feature12,
        url: '/build-new-services',
    },

    {
        title: 'Application Modernization',
        image: Feature11,
        url: '/application-modernization',
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


const RESOURCES_MENU_ITEMS = [
    {
        title: 'Blog',
        image: Feature3,
        url: '/blog',
    },
    {
        title: 'About',
        image: Feature3,
        url: '/about',
    },
    {
        title: 'Team',
        image: Feature3,
        url: '/team',
    },
    {
        title: 'Contact Us',
        image: Feature5,
        url: '/contact-us',
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
                title: 'Products',
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
        title: 'Company',
        align: "end",
        columns: [
            {
                title: 'Resources',
                menuItems: RESOURCES_MENU_ITEMS,
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