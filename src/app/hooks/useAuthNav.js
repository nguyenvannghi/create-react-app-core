import jwtDecode from 'jwt-decode';
import { RouteNavConfig, routeNoAuthNavConfig } from 'app/routes/config';

const listNamePermissionAccess = (nav, permissions) => {
    const listAccess = [];
    Object.entries(permissions).forEach(([key, value]) => {
        value > 0 && listAccess.push(key.toLowerCase());
    });
    return listAccess;
};

const useAuthNav = ({ tokenAccess, hasAuthenticated = false, hasPermission = false }) => {
    let routes = [];
    // case, user not login
    if (!tokenAccess) {
        // redirect login
    }
    const tokenDecoded = jwtDecode(tokenAccess);
    const now = Date.now().valueOf() / 1000;
    if (typeof tokenDecoded.exp !== 'undefined' && tokenDecoded.exp < now) {
        // redirect login
    }
    const list = tokenDecoded.permissions && listNamePermissionAccess(RouteNavConfig, tokenDecoded.permissions);
    // case, Login success but have no any permission
    if (hasAuthenticated && !hasPermission) {
    }

    // case, Login success but force change password

    // case, F5 browser

    // case, first time login
    return {
        routes,
        tokenAccess,
        hasAuthenticated,
        hasPermission,
    };
};

export default useAuthNav;
