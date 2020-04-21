import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as router from 'react-router-dom';
import { SidebarNav, SidebarBrand, HeaderNav, Content, Footer, NavBreadcrumb } from 'app/components/base';
import RouteNavConfig from 'app/routes/config';
import { makeSelectSidebarToggle } from 'app/redux/common/selector';

const DefaultLayout = ({ children }) => {
    const isToogle = useSelector(makeSelectSidebarToggle());
    const classes = classNames('sidebar', isToogle && 'sidebar-show');

    return (
        <div className="app-body">
            <div className={classes}>
                <SidebarBrand />
                <SidebarNav navigation={RouteNavConfig} />
            </div>
            <div className="main">
                <div className="inner-main">
                    <header className="f-header f-header-fixed">
                        <HeaderNav />
                        <NavBreadcrumb router={router} appRoutes={RouteNavConfig} />
                    </header>
                    <Content>{children}</Content>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
