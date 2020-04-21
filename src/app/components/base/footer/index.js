import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = ({ className, tag: Element }) => {
    const classes = classNames('footer', className);
    return (
        <Element className={classes}>
            <Container fluid>
                <Row>
                    <Col>
                        <ListGroup as="ul" bsPrefix="list-inline m-0">
                            <ListGroup.Item as="li" bsPrefix="list-inline-item mr-4">
                                <Link className="text-muted" to="/">
                                    Support
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" bsPrefix="list-inline-item mr-4">
                                <Link className="text-muted" to="/">
                                    Help Center
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" bsPrefix="list-inline-item mr-4">
                                <Link className="text-muted" to="/">
                                    Privacy
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" bsPrefix="list-inline-item">
                                <Link className="text-muted" to="/">
                                    Terms of Service
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="text-right">
                        <p className="m-0">© 2019 - Feelø App</p>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};

Footer.defaultProps = { tag: 'footer' };

Footer.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
};

export default memo(Footer);
