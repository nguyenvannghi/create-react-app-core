import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const AuthLayout = ({ children, className }) => {
    const classes = classNames('auth', className);

    return <div className={classes}>{children}</div>;
};

AuthLayout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default AuthLayout;
