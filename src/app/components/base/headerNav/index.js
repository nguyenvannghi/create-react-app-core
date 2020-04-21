import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import SidebarToggle from 'app/components/base/sidebarToggle';
import EnglishFlag from 'assets/images/flags/us.png';
import SpanishFlag from 'assets/images/flags/es.png';
import GermanFlag from 'assets/images/flags/de.png';

const HeaderNav = ({ className }) => {
    const classes = classNames('navbar navbar-expand', className);
    return (
        <Navbar className="header-navbar" bsPrefix={classes} bg="light">
            <SidebarToggle className="d-flex mr-2" />
            <Navbar.Collapse id="header-navbar-nav">
                <Nav as="ul" className="navbar-nav ml-auto p-0">
                    <Dropdown as="li" bsPrefix="nav-item dropdown mx-1 notify-dropdown">
                        <Dropdown.Toggle as="a" className="nav-icon no-carret" role="button" id="dropdown-notification">
                            <i className="icon icon-bubble" />
                            <Badge pill variant="primary">
                                5
                            </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0">
                            <Dropdown.Header bsPrefix="dropdown-header bg-light">
                                <strong>You have 4 messages</strong>
                            </Dropdown.Header>
                            <Dropdown.Item href="/">Action</Dropdown.Item>
                            <Dropdown.Item href="/">Another action</Dropdown.Item>
                            <Dropdown.Item href="/">Something else</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item text-center border-top">
                                <strong>View all messages</strong>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as="li" bsPrefix="nav-item dropdown mx-1 notify-dropdown">
                        <Dropdown.Toggle as="a" className="nav-icon no-carret" role="button" id="dropdown-notification">
                            <i className="icon icon-bell" />
                            <Badge pill variant="danger">
                                5
                            </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0">
                            <Dropdown.Header bsPrefix="dropdown-header bg-light">
                                <strong>You have 5 notifications</strong>
                            </Dropdown.Header>
                            <Dropdown.Item href="/">Action</Dropdown.Item>
                            <Dropdown.Item href="/">Another action</Dropdown.Item>
                            <Dropdown.Item href="/">Something else</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item text-center border-top">
                                <strong>View all notifications</strong>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as="li" bsPrefix="nav-item dropdown mx-1">
                        <Dropdown.Toggle as="a" className="nav-flag no-carret" role="button" id="dropdown-notification">
                            <img src={EnglishFlag} width="20" alt="English" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0">
                            <Dropdown.Item href="/">
                                <img className="mr-3" src={EnglishFlag} width="20" alt="English" />
                                English
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                <img className="mr-3" src={SpanishFlag} width="20" alt="Spanish" />
                                Spanish
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                <img className="mr-3" src={GermanFlag} width="20" alt="German" />
                                German
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as="li" bsPrefix="nav-item dropdown mx-2">
                        <Dropdown.Toggle as="a" className="nav-avatar" role="button" id="dropdown-notification">
                            <img
                                className="avatar img-fluid rounded-circle mr-2"
                                src="https://via.placeholder.com/150x150"
                                width="40"
                                alt="user@email.com"
                            />
                            <span className="text-dark mr-1">Chris Wood</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0">
                            <Dropdown.Item href="/">
                                <i className="mr-3 icon-user" />
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                <i className="mr-3 icon-settings" />
                                Setting
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                <i className="mr-3 icon-credit-card" />
                                Payments
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/">
                                <i className="mr-3 icon-lock" />
                                Lock Account
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                <i className="mr-3 icon-logout" />
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

HeaderNav.defaultProps = {};

HeaderNav.propTypes = {
    className: PropTypes.string,
};

export default memo(HeaderNav);
