import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import RouterApp from 'app/routes/consts';
import { useForm, ErrorMessage } from 'react-hook-form';
import FIELD_LOGIN from './const';
import LoginSchema from './validator';
import { login } from './api';

const Login = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        validationSchema: LoginSchema,
    });

    const handleLogin = data => {
        const { username, password } = data;
        login(username, password);
    };

    return (
        <div className="page-login">
            <div className="content">
                <Container>
                    <Row>
                        <Col xl="4" md="6" className="ml-auto mr-auto">
                            <Card>
                                <Card.Header className="border-bottom-0 bg-white">
                                    <Card.Title as="h2" bsPrefix="card-title">
                                        Login
                                    </Card.Title>
                                    <Card.Text>Sign In to your account</Card.Text>
                                </Card.Header>
                                <Card.Body className="pb-0">
                                    <Form onSubmit={handleSubmit(handleLogin)}>
                                        <Form.Group controlId="formBasicUserName">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupUsername" className="bg-white">
                                                        <i className="icon-user" />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    name={FIELD_LOGIN.USER_NAME}
                                                    type="text"
                                                    ref={register}
                                                    placeholder="Username"
                                                    aria-describedby="inputGroupUsername"
                                                />
                                            </InputGroup>
                                            <ErrorMessage
                                                errors={errors}
                                                name={FIELD_LOGIN.USER_NAME}
                                                as={Form.Text}
                                                className="text-danger"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPassword" className="bg-white">
                                                        <i className="icon-lock" />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    name={FIELD_LOGIN.PASSWORD}
                                                    type="password"
                                                    ref={register}
                                                    placeholder="Password"
                                                    aria-describedby="inputGroupPassword"
                                                />
                                            </InputGroup>
                                            <ErrorMessage
                                                errors={errors}
                                                name={FIELD_LOGIN.PASSWORD}
                                                as={Form.Text}
                                                className="text-danger"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check custom type="checkbox" label="Remember me" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" block size="lg">
                                            Get Started
                                        </Button>
                                    </Form>
                                </Card.Body>
                                <Card.Footer className="border-top-0 bg-white">
                                    <div className="float-left">
                                        <Link to={RouterApp.rRegister}>Create Account</Link>
                                    </div>
                                    <div className="float-right">
                                        <Link to="/">Need help?</Link>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;
