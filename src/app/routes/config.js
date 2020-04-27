import PrimaryLayout from 'app/layouts/primaryLayout';
import AuthLayout from 'app/layouts/authLayout';
import RouterApp, { ACCESS_MENU_KEYS } from './consts';
import {
    AsyncLogin,
    AsyncRegister,
    AsyncHome,
    AsyncCategories,
    AsyncNews,
    AsyncCategory,
    AsyncCategoryDetail2,
    AsyncStandardTable,
    AsyncDataTable,
    AsyncFormInputs,
} from './asyncComponent';

const RouteNavConfig = [
    {
        title: 'Page',
    },
    {
        title: 'Home',
        icon: 'icon-user',
        path: RouterApp.rHome,
        exact: true,
        component: AsyncHome,
        layout: PrimaryLayout,
    },
    {
        title: 'Login',
        icon: 'icon-login',
        path: RouterApp.rLogin,
        exact: true,
        component: AsyncLogin,
        layout: AuthLayout,
    },
    {
        title: 'Register',
        icon: 'icon-user-follow',
        path: RouterApp.rRegister,
        exact: true,
        component: AsyncRegister,
        layout: AuthLayout,
    },
    {
        title: 'Authentication',
        // icon: 'icon-user',
    },
    {
        accessKey: ACCESS_MENU_KEYS.KEY_NEWS,
        title: 'News',
        icon: 'icon-grid',
        path: RouterApp.rNews,
        component: AsyncNews,
        layout: PrimaryLayout,
    },
    {
        accessKey: ACCESS_MENU_KEYS.KEY_CATEGORIES,
        title: 'Categories',
        icon: 'icon-grid',
        path: RouterApp.rCategories,
        component: AsyncCategories,
        layout: PrimaryLayout,
        children: [
            {
                accessKey: ACCESS_MENU_KEYS.KEY_CATEGORIES,
                title: 'Category Level 1',
                path: `${RouterApp.rCategories}/detail`,
                component: AsyncCategory,
                children: [
                    {
                        accessKey: ACCESS_MENU_KEYS.KEY_CATEGORIES,
                        title: 'Category Level 2',
                        path: `${RouterApp.rCategories}/detail/detail2`,
                        component: AsyncCategoryDetail2,
                    },
                ],
            },
        ],
    },
    {
        title: 'Tools & Components',
    },
    {
        title: 'Forms',
        icon: 'icon-disc',
        path: RouterApp.rForm,
        exact: true,
        layout: PrimaryLayout,
        children: [
            {
                title: 'Basic Inputs',
                path: `${RouterApp.rForm}/basic-inputs`,
                component: AsyncFormInputs,
            },
            {
                title: 'Input Groups',
                path: `${RouterApp.rForm}/input-groups`,
            },
        ],
    },
    {
        title: 'Tables',
        icon: 'icon-grid',
        path: RouterApp.rTable,
        exact: true,
        layout: PrimaryLayout,
        children: [
            {
                title: 'Standard Table',
                path: `${RouterApp.rTable}/standard-table`,
                component: AsyncStandardTable,
            },
            {
                title: 'Data Table',
                path: `${RouterApp.rTable}/data-table`,
                component: AsyncDataTable,
            },
        ],
    },
];

const routeNoAuthNavConfig = [
    {
        title: 'Login',
        icon: 'icon-login',
        path: RouterApp.rLogin,
        exact: true,
        component: AsyncLogin,
        layout: AuthLayout,
    },
    {
        title: 'Register',
        icon: 'icon-user-follow',
        path: RouterApp.rRegister,
        exact: true,
        component: AsyncRegister,
        layout: AuthLayout,
    },
];

export { RouteNavConfig, routeNoAuthNavConfig };

// https://github.com/coreui/coreui-react/blob/master/src/SidebarNav.md
