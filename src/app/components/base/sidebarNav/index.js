import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Nav from 'react-bootstrap/Nav';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import history from 'app/routes/history';

const SidebarNav = ({ children, navigation, tag: Element }) => {
    const handleClick = e => {
        e.preventDefault();
        e.currentTarget.parentElement.classList.toggle('open');
    };

    const activeDropdownRoute = url => {
        return history.location.pathname.indexOf(url) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    };

    const navList = items => {
        return items.map(item => {
            const { path, children } = item;
            if (path) {
                return children ? navChildren(item) : navItem(item);
            }
            return navTitle(item);
        });
    };

    const navChildren = item => {
        const { title, path, icon, children } = item;
        const url = path || '';
        const classes = {
            icon: classNames('nav-link-icon', icon),
        };
        return (
            <Nav.Item key={Math.random()} as="li" bsPrefix={activeDropdownRoute(url)}>
                <Nav.Link onClick={handleClick}>
                    {icon && <i className={classes.icon} />}
                    {title}
                    <i className="carret icon-arrow-right" />
                </Nav.Link>
                <Nav as="ul" bsPrefix="nav-dropdown-items">
                    {navList(children)}
                </Nav>
            </Nav.Item>
        );
    };

    const navTitle = item => {
        const { title, icon } = item;
        const classes = {
            title: classNames('nav-title'),
            icon: classNames('nav-link-icon', icon),
        };
        return (
            <li key={Math.random()} className={classes.title}>
                {icon && <i className={classes.icon} />}
                {title}
            </li>
        );
    };

    const navItem = item => {
        const { title, path, icon } = item;
        const url = path || '';
        const classes = {
            link: classNames('nav-link'),
            icon: classNames('nav-link-icon', icon),
        };
        return (
            <Nav.Item key={Math.random()} as="li">
                <Nav.Link as={NavLink} to={url} bsPrefix={classes.link}>
                    {icon && <i className={classes.icon} />}
                    {title}
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <Element className="app-nav">
            <div className="inner-nav">
                <PerfectScrollbar>
                    {navigation && <Nav as="ul">{navList(navigation)}</Nav>}
                    {children}
                </PerfectScrollbar>
            </div>
        </Element>
    );
};

SidebarNav.defaultProps = {
    tag: 'div',
    navigation: [
        {
            title: 'Menu',
            icon: 'icon-grid',
            path: '/default',
            children: [
                {
                    title: 'Sub Menu',
                    path: '/default/detail',
                },
            ],
        },
    ],
};

SidebarNav.propTypes = {
    children: PropTypes.node,
    navigation: PropTypes.any,
    tag: PropTypes.any,
};

export default memo(SidebarNav);
