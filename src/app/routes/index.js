import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import DefaultLayout from 'app/layouts/defaultLayout';
import history from './history';
import RouteNavConfig from './config';
import RouterApp from './consts';

const AppRoutes = () => {
    const routesMatch = [];

    const onceRouter = route => <Route key={Math.random()} {...route} />;

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
            <DefaultLayout>
                <Switch>
                    {routerListNav(RouteNavConfig)}
                    <Redirect path="*" to={RouterApp.rFileManager} />
                </Switch>
            </DefaultLayout>
        </ConnectedRouter>
    );
};

export default AppRoutes;
