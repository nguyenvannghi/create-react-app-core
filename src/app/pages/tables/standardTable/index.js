import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Avatar2 from 'assets/images/avatars/avatar-2.jpg';
import Avatar3 from 'assets/images/avatars/avatar-3.jpg';
import Avatar4 from 'assets/images/avatars/avatar-4.jpg';
import Avatar5 from 'assets/images/avatars/avatar-5.jpg';

const StandardTable = ({ className }) => {
    const classes = classNames('inner-box', className);
    return (
        <div className={classes}>
            <h3>Tables</h3>
            <Row>
                <Col md={12} xl={6}>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Basic Table</Card.Title>
                            <Card.Text>Using the most basic table markup, here’s how .table-based tables look in Bootstrap.</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>DOB</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ashley Briggs </td>
                                        <td>864-348-0485</td>
                                        <td>June 21, 1961 </td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Carl Jenkins</td>
                                        <td>914-939-2458</td>
                                        <td>May 15, 1948</td>
                                        <td>
                                            <Badge variant="secondary">Inactive</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bertha Martin</td>
                                        <td>704-993-5435</td>
                                        <td>September 14, 1965</td>
                                        <td>
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Stacie Hall</td>
                                        <td>765-382-8195</td>
                                        <td>April 2, 1971</td>
                                        <td>
                                            <Badge variant="danger">Banned</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Amanda Jones</td>
                                        <td>202-672-1407</td>
                                        <td>October 12, 1966</td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Striped Table</Card.Title>
                            <Card.Text>
                                Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>
                                .
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>DOB</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ashley Briggs </td>
                                        <td>864-348-0485</td>
                                        <td>June 21, 1961 </td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Carl Jenkins</td>
                                        <td>914-939-2458</td>
                                        <td>May 15, 1948</td>
                                        <td>
                                            <Badge variant="secondary">Inactive</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bertha Martin</td>
                                        <td>704-993-5435</td>
                                        <td>September 14, 1965</td>
                                        <td>
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Stacie Hall</td>
                                        <td>765-382-8195</td>
                                        <td>April 2, 1971</td>
                                        <td>
                                            <Badge variant="danger">Banned</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Amanda Jones</td>
                                        <td>202-672-1407</td>
                                        <td>October 12, 1966</td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Condensed Table</Card.Title>
                            <Card.Text>
                                Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bsPrefix="table table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>DOB</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ashley Briggs </td>
                                        <td>864-348-0485</td>
                                        <td>June 21, 1961 </td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Carl Jenkins</td>
                                        <td>914-939-2458</td>
                                        <td>May 15, 1948</td>
                                        <td>
                                            <Badge variant="secondary">Inactive</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bertha Martin</td>
                                        <td>704-993-5435</td>
                                        <td>September 14, 1965</td>
                                        <td>
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Stacie Hall</td>
                                        <td>765-382-8195</td>
                                        <td>April 2, 1971</td>
                                        <td>
                                            <Badge variant="danger">Banned</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Amanda Jones</td>
                                        <td>202-672-1407</td>
                                        <td>October 12, 1966</td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Hoverable Rows</Card.Title>
                            <Card.Text>
                                Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>DOB</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle">1</td>
                                        <td className="align-middle">
                                            <img className="rounded-circle mr-3" src={Avatar2} width="48" alt="Avatar" />
                                            Ashley Briggs
                                        </td>
                                        <td className="align-middle">864-348-0485</td>
                                        <td className="align-middle">June 21, 1961 </td>
                                        <td className="align-middle">
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">2</td>
                                        <td className="align-middle">
                                            <img className="rounded-circle mr-3" src={Avatar3} width="48" alt="Avatar" />
                                            Carl Jenkins
                                        </td>
                                        <td className="align-middle">May 15, 1948</td>
                                        <td className="align-middle">
                                            <Badge variant="secondary">Inactive</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">3</td>
                                        <td className="align-middle">
                                            <img className="rounded-circle mr-3" src={Avatar4} width="48" alt="Avatar" />
                                            Bertha Martin
                                        </td>
                                        <td className="align-middle">704-993-5435</td>
                                        <td className="align-middle">September 14, 1965</td>
                                        <td className="align-middle">
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">4</td>
                                        <td className="align-middle">
                                            <img className="rounded-circle mr-3" src={Avatar5} width="48" alt="Avatar" />
                                            Stacie Hall
                                        </td>
                                        <td className="align-middle">765-382-8195</td>
                                        <td className="align-middle">April 2, 1971</td>
                                        <td className="align-middle">
                                            <Badge variant="danger">Banned</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Bordered Table</Card.Title>
                            <Card.Text>
                                Add <code>.table-bordered</code> for borders on all sides of the table and cells.
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>DOB</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ashley Briggs </td>
                                        <td>864-348-0485</td>
                                        <td>June 21, 1961 </td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Carl Jenkins</td>
                                        <td>914-939-2458</td>
                                        <td>May 15, 1948</td>
                                        <td>
                                            <Badge variant="secondary">Inactive</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bertha Martin</td>
                                        <td>704-993-5435</td>
                                        <td>September 14, 1965</td>
                                        <td>
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Stacie Hall</td>
                                        <td>765-382-8195</td>
                                        <td>April 2, 1971</td>
                                        <td>
                                            <Badge variant="danger">Banned</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Amanda Jones</td>
                                        <td>202-672-1407</td>
                                        <td>October 12, 1966</td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Contextual Classes</Card.Title>
                            <Card.Text>Use contextual classes to color table rows or individual cells.</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>DOB</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-primary">
                                        <td>1</td>
                                        <td>Ashley Briggs </td>
                                        <td>864-348-0485</td>
                                        <td>June 21, 1961 </td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Carl Jenkins</td>
                                        <td>914-939-2458</td>
                                        <td>May 15, 1948</td>
                                        <td>
                                            <Badge variant="secondary">Inactive</Badge>
                                        </td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>3</td>
                                        <td>Bertha Martin</td>
                                        <td>704-993-5435</td>
                                        <td>September 14, 1965</td>
                                        <td>
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Stacie Hall</td>
                                        <td>765-382-8195</td>
                                        <td>April 2, 1971</td>
                                        <td>
                                            <Badge variant="danger">Banned</Badge>
                                        </td>
                                    </tr>
                                    <tr className="table-warning">
                                        <td>5</td>
                                        <td>Amanda Jones</td>
                                        <td>202-672-1407</td>
                                        <td>October 12, 1966</td>
                                        <td>
                                            <Badge variant="success">Active</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

StandardTable.defaultProps = {};

StandardTable.propTypes = { className: PropTypes.string };

export default memo(StandardTable);
