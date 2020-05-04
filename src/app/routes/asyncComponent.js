import AsyncComponent from 'app/components/asyncComponent';

const AsyncLogin = AsyncComponent(() => import('app/pages/login/index'));
const AsyncRegister = AsyncComponent(() => import('app/pages/register/index'));
const AsyncHome = AsyncComponent(() => import('app/pages/home/index'));
const AsyncNews = AsyncComponent(() => import('app/pages/news/index'));
const AsyncCategories = AsyncComponent(() => import('app/pages/categories/index'));
const AsyncCategory = AsyncComponent(() => import('app/pages/categories/category/index'));
const AsyncCategoryDetail2 = AsyncComponent(() => import('app/pages/categories/category-detail2/index'));
const AsyncStandardTable = AsyncComponent(() => import('app/pages/tables/standardTable/index'));
const AsyncDataTable = AsyncComponent(() => import('app/pages/tables/dataTable/index'));
const AsyncFormInputs = AsyncComponent(() => import('app/pages/forms/basicInputs/index'));

export {
    AsyncLogin,
    AsyncRegister,
    AsyncHome,
    AsyncNews,
    AsyncCategories,
    AsyncCategory,
    AsyncCategoryDetail2,
    AsyncStandardTable,
    AsyncDataTable,
    AsyncFormInputs,
};
