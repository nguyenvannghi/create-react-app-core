import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { MultiSelect } from 'app/components/base';
import { SINGLE_DATA, MULTI_DATA, MULTI_DATA_SELECTED } from './mock';

const BasicInputs = () => {
    const [optionSingle, stateOptionSingle] = useState(null);
    const [optionMulti, stateOptionMulti] = useState(null);
    const getOptionSingle = data => {
        stateOptionSingle(() => data);
    };
    const getOptionMulti = data => {
        stateOptionMulti(() => data);
    };
    return (
        <div>
            <Row>
                <Col xl="6">
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Single Select (Object)</Card.Title>
                            <Card.Text>The basic single select / dropdown doesn’t require much configuration.</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <MultiSelect
                                options={SINGLE_DATA}
                                onGetValues={getOptionSingle}
                                selectionLabel={props => (
                                    <span>
                                        <strong>{props?.key}</strong> - {props?.value}
                                    </span>
                                )}
                            />
                            <pre className="language-json mt-4">
                                <code className=" language-json">{JSON.stringify(optionSingle)}</code>
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl="6">
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Multiple Select</Card.Title>
                            <Card.Text>
                                To allow multiple selections pass the <code>multiple</code> prop.
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <MultiSelect
                                label="name"
                                trackBy="name"
                                multiple
                                // selectionLabel={props => {
                                //     return props?.map((item, index) => {
                                //         return (
                                //             <span key={index}>
                                //                 <strong>{item?.name}</strong> - {item?.language}
                                //                 {'; '}
                                //             </span>
                                //         );
                                //     });
                                // }}
                                options={MULTI_DATA}
                                value={MULTI_DATA_SELECTED}
                                onGetValues={getOptionMulti}
                            />
                            <pre className="language-json mt-4">
                                <code className=" language-json">{JSON.stringify(optionMulti)}</code>
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default BasicInputs;
