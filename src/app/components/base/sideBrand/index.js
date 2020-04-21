import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Navbar from 'react-bootstrap/Navbar';
import LogoAsset from 'assets/images/logo.svg';

const SidebarBrand = ({ className }) => {
    const classes = classNames('app-brand', className);
    return (
        <Navbar.Brand as={Link} to="/" bsPrefix={classes}>
            <img src={LogoAsset} alt="Feelø App" width="46" />
            <h1 className="logo">Feelø App</h1>
        </Navbar.Brand>
    );
};

SidebarBrand.defaultProps = {};

SidebarBrand.propTypes = {
    className: PropTypes.string,
};

export default memo(SidebarBrand);
