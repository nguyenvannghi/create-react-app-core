import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MultiSelect } from 'app/components/base';

const arrayDATA = [
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

const Home = () => {
    const onGetValues = data => {
        // console.log(data);
    };
    return (
        <div style={{ paddingTop: '20%', paddingBottom: '20%' }}>
            <Row>
                <Col xl="6">
                    <MultiSelect label="name" trackBy="name" options={arrayDATA} value={arrayDataSelected} onGetValues={onGetValues} />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
