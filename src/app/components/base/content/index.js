import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';

const Content = ({ className, children, tag: Element }) => {
    const classes = classNames('content', className);
    return (
        <Element className={classes}>
            <Container fluid bsPrefix="container-fluid" className="p-0">
                {children}
            </Container>
        </Element>
    );
};

Content.defaultProps = { tag: 'main' };

Content.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.string,
};

export default memo(Content);
