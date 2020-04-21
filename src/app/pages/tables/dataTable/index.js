import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataGrid from 'react-data-grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'react-data-grid/dist/react-data-grid.css';
import createRowData from './createRowData';

const defaultColumnProperties = {
    sortable: true,
    width: 140,
};

const columns = [
    {
        key: 'id',
        name: 'ID',
        frozen: true,
        sortDescendingFirst: true,
    },
    {
        key: 'title',
        name: 'Title',
    },
    {
        key: 'firstName',
        name: 'First Name',
    },
    {
        key: 'lastName',
        name: 'Last Name',
    },
    {
        key: 'email',
        name: 'Email',
    },
    {
        key: 'street',
        name: 'Street',
    },
    {
        key: 'zipCode',
        name: 'ZipCode',
    },
    {
        key: 'date',
        name: 'Date',
    },
    {
        key: 'bs',
        name: 'bs',
    },
    {
        key: 'catchPhrase',
        name: 'Catch Phrase',
    },
    {
        key: 'companyName',
        name: 'Company Name',
    },
    {
        key: 'sentence',
        name: 'Sentence',
    },
].map(c => ({ ...c, ...defaultColumnProperties }));

const initialRows = createRowData(100);

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
        if (sortDirection === 'ASC') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }
        if (sortDirection === 'DESC') {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
        return 1;
    };
    return sortDirection === 'NONE' ? initialRows : [...rows].sort(comparer);
};

const DataTable = ({ className }) => {
    const classes = classNames('inner-box', className);
    const [rows, setRows] = useState(initialRows);
    return (
        <div className={classes}>
            <h3>DataTable</h3>
            <Row>
                <Col>
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>React Data Grid Table</Card.Title>
                            <Card.Text>React Data Grid is an excel like data grid component.</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <DataGrid
                                columns={columns}
                                rows={rows}
                                height={600}
                                onGridSort={(sortColumn, sortDirection) => {
                                    console.log(sortColumn);
                                    console.log(sortDirection);
                                    setRows(sortRows(initialRows, sortColumn, sortDirection));
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

DataTable.defaultProps = {};

DataTable.propTypes = { className: PropTypes.string };

export default memo(DataTable);
