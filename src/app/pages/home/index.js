import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { MultiSelect } from 'app/components/base';

const arrayDATA1 = [
    { name: 'Vue.js', language: 'JavaScript' },
    { name: 'Rails', language: 'Ruby' },
    { name: 'Sinatra', language: 'Ruby' },
    { name: 'Laravel', language: 'PHP' },
    { name: 'Phoenix', language: 'Elixir' },
];

const arrayDataSelected = [
    { name: 'Vue.js', language: 'JavaScript' },
    { name: 'Sinatra', language: 'Ruby' },
];

const arrayDATA2 = [
    { key: 'Vue.js', value: 'JavaScript' },
    { key: 'Rails', value: 'Ruby' },
    { key: 'Sinatra', value: 'Ruby' },
    { key: 'Laravel', value: 'PHP' },
    { key: 'Phoenix', value: 'Elixir' },
];

const Home = () => {
    const [state1, setstate1] = useState(null);
    const [state2, setstate2] = useState(null);
    const onGetValues1 = data => {
        setstate1(() => data);
    };
    const onGetValues2 = data => {
        setstate2(() => data);
    };
    return (
        <div style={{ paddingTop: '10%', paddingBottom: '20%' }}>
            <Row>
                <Col xl="6">
                    <Card className="mb-5">
                        <Card.Header>
                            <Card.Title>Single Select (Object)</Card.Title>
                            <Card.Text>The basic single select / dropdown doesn’t require much configuration.</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <MultiSelect
                                options={arrayDATA2}
                                onGetValues={onGetValues2}
                                selectionLabel={props => (
                                    <span>
                                        <strong>{props?.key}</strong> - {props?.value}
                                    </span>
                                )}
                            />
                            <pre className="language-json mt-4">
                                <code className=" language-json">{JSON.stringify(state2)}</code>
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
                                selectionLabel={props => {
                                    return props?.map((item, index) => {
                                        return (
                                            <span key={index}>
                                                <strong>{item?.name}</strong> - {item?.language}
                                                {'; '}
                                            </span>
                                        );
                                    });
                                }}
                                options={arrayDATA1}
                                value={arrayDataSelected}
                                onGetValues={onGetValues1}
                            />
                            <pre className="language-json mt-4">
                                <code className=" language-json">{JSON.stringify(state1)}</code>
                            </pre>
                            <pre className="language-json mt-4">
                                <code className=" language-json">{state1 && state1.length}</code>
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
