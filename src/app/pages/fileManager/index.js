import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FileManager = () => {
    return (
        <div>
            <Row>
                <Col xl="6">
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Single Select (Object)</Card.Title>
                            <Card.Text>The basic single select / dropdown doesn’t require much configuration.</Card.Text>
                        </Card.Header>
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default FileManager;
