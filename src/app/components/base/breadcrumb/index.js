import React, { memo } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

let routerAccess;
let routeNav;
let matchRoutes = [];

const getPaths = pathname => {
    const paths = ['/'];
    if (pathname === '/') return paths;
    pathname.split('/').reduce((prev, curr) => {
        const currPath = `${prev}/${curr}`;
        paths.push(currPath);
        return currPath;
    });
    return paths;
};

const findRoute = url => {
    const { matchPath } = routerAccess;
    const aroute = matchRoutes.find(route => matchPath(url, { path: route.path, exact: true }));
    return aroute && aroute.title ? aroute.title : null;
};

const BreadcrumbItem = ({ match }) => {
    if (match) {
        const { isExact, url } = match;
        const title = findRoute(match.url);
        if (title) {
            return isExact ? (
                <Breadcrumb.Item active>{title}</Breadcrumb.Item>
            ) : (
                <Breadcrumb.Item as="li" linkAs="span">
                    <NavLink to={url || '/'}>{title}</NavLink>
                </Breadcrumb.Item>
            );
        }
    }
    return null;
};

BreadcrumbItem.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string,
        isExact: PropTypes.bool,
    }),
};

const BreadcrumbComp = args => {
    const { Route, matchPath } = routerAccess;
    const paths = getPaths(args && args.location.pathname);
    const matchRouteDefault = routeNav.find(route => matchPath('/', { path: route.path, exact: route.exact }));
    const matchRoute = routeNav.find(route => matchPath(args && args.match.url, { path: route.path, exact: route.exact }));
    matchRoutes.push(matchRouteDefault);
    getMatchRoutes(matchRoute);
    const breadcrumbs = paths.map((path, index) => <Route key={index} path={path} component={BreadcrumbItem} />);
    return <Breadcrumb bsPrefix="breadcrumb bg-white m-0">{breadcrumbs}</Breadcrumb>;
};

const getMatchRoutes = matchRoute => {
    if (!matchRoute) return matchRoutes;
    matchRoutes.push(matchRoute);
    if (matchRoute.children && matchRoute.children.length > 0) {
        matchRoute.children.forEach(item => {
            getMatchRoutes(item);
        });
    }
    return matchRoutes;
};

const NavBreadcrumb = ({ className, tag: Element, router, appRoutes }) => {
    const classes = classNames('navbreadcrumb', className);
    const { Route } = router;
    routerAccess = router;
    routeNav = appRoutes;
    matchRoutes = [];

    return (
        <Element className={classes}>
            <Route path="/:path" component={BreadcrumbComp} />
        </Element>
    );
};

NavBreadcrumb.defaultProps = { tag: 'div' };

NavBreadcrumb.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
    router: PropTypes.any,
    appRoutes: PropTypes.array,
};
export default withRouter(memo(NavBreadcrumb));
