import AsyncComponent from 'app/components/asyncComponent';
import RouterApp from './consts';

const AsyncHome = AsyncComponent(() => import('app/pages/home/index'));
const AsyncFileManager = AsyncComponent(() => import('app/pages/fileManager/index'));
const AsyncCategories = AsyncComponent(() => import('app/pages/categories/index'));
const AsyncCategory = AsyncComponent(() => import('app/pages/categories/category/index'));
const AsyncCategoryDetail2 = AsyncComponent(() => import('app/pages/categories/category-detail2/index'));
const AsyncStandardTable = AsyncComponent(() => import('app/pages/tables/standardTable/index'));
const AsyncDataTable = AsyncComponent(() => import('app/pages/tables/dataTable/index'));
const AsyncFormInputs = AsyncComponent(() => import('app/pages/forms/basicInputs/index'));

const RouteNavConfig = [
    {
        title: 'Home',
        icon: 'icon-user',
        path: RouterApp.rHome,
        exact: true,
        component: AsyncHome,
    },
    {
        title: 'File Manager',
        icon: 'icon-picture',
        path: RouterApp.rFileManager,
        exact: true,
        component: AsyncFileManager,
    },
    {
        title: 'Title',
        // icon: 'icon-user',
    },
    {
        title: 'Categories',
        icon: 'icon-grid',
        path: RouterApp.rCategories,
        component: AsyncCategories,
        children: [
            {
                title: 'Category Level 1',
                path: `${RouterApp.rCategories}/detail`,
                component: AsyncCategory,
                children: [
                    {
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

export default RouteNavConfig;

// https://github.com/coreui/coreui-react/blob/master/src/SidebarNav.md
