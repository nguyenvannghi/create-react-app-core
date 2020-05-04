const authenticationService = () => {
    // case, user not login

    // case, Login success but have no any permission

    // case, Login success but force change password

    // case, F5 browser

    // case, first time login

    return null;
};

const listNamePermissionAccess = (nav, permissions) => {
    const listAccess = [];
    Object.entries(permissions).forEach(([key, value]) => {
        value > 0 && listAccess.push(key.toLowerCase());
    });
    return listAccess;
};

const hasPermissionRoute = (routeNavKey, permissionAccesses) => {
    return permissionAccesses.includes(routeNavKey.toLowerCase());
};

export { authenticationService, listNamePermissionAccess, hasPermissionRoute };
