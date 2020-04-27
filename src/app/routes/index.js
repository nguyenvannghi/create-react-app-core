import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import PrimaryLayout from 'app/layouts/primaryLayout';
import { listCookieStorageName, getCookie } from 'app/utils/cookieStorage';
import history from 'app/routes/history';
import { listNamePermissionAccess, hasPermissionRoute } from 'app/services/authentication';
// import useAuthNav from 'app/hooks/useAuthNav';
import { RouteNavConfig } from './config';
import RouterApp from './consts';

const AppRoutes = () => {
    const routesMatch = [];
    // const [hasAuthenticated, setAuthenticated] = useState(false);
    // const [hasPermission, setPermission] = useState(false);
    // const data = useAuthNav({ tokenAccess: getCookie(listCookieStorageName.ACCESS_TOKEN), hasAuthenticated, hasPermission });
    const tokenAccess = getCookie(listCookieStorageName.ACCESS_TOKEN);
    const tokenDecoded = jwtDecode(tokenAccess);
    const listPermissions = listNamePermissionAccess(RouteNavConfig, tokenDecoded.permissions);
    const onceRouter = route => {
        const { component: Component, layout: Layout = PrimaryLayout, path, exact, accessKey } = route;
        const isAccess = accessKey && hasPermissionRoute(accessKey, listPermissions);
        return Component ? (
            <Route
                key={Math.random()
                    .toString(36)
                    .substr(2, 5)}
                path={path}
                exact={exact}
                render={props => <Layout>{isAccess ? <Component {...props} /> : <>No Permission</>}</Layout>}
            />
        ) : (
            <Fragment
                key={Math.random()
                    .toString(36)
                    .substr(2, 5)}>
                No Component Imported
            </Fragment>
        );
    };

    const routerListNav = data => {
        data.forEach(route => {
            if (Object.prototype.hasOwnProperty.call(route, 'children')) {
                routerListNav(route.children);
                if (route.path) {
                    const routeParent = {
                        title: route.title,
                        path: route.path,
                        component: route.component,
                    };
                    routesMatch.push(onceRouter(routeParent));
                }
            } else {
                route.path && routesMatch.push(onceRouter(route));
            }
        });
        return routesMatch;
    };

    return (
        <ConnectedRouter history={history}>
            <Switch>
                {routerListNav(RouteNavConfig)}
                <Redirect path="*" to={RouterApp.rHome} />
            </Switch>
        </ConnectedRouter>
    );
};

export default AppRoutes;
