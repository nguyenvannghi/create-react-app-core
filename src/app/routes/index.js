import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrimaryLayout from 'app/layouts/primaryLayout';
import history from './history';
import RouteNavConfig from './config';
import RouterApp from './consts';

const AppRoutes = () => {
    const routesMatch = [];

    const onceRouter = route => {
        const { component: Component, layout: Layout = PrimaryLayout, path, exact } = route;
        return Component ? (
            <Route
                key={Math.random()
                    .toString(36)
                    .substr(2, 5)}
                path={path}
                exact={exact}
                render={props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )}
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
