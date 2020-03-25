import React from 'react';
import {Button, Container, Col, Row, Form} from "react-bootstrap";

function RewardsSignUp() {
        return (
            <div>
                <Container className="bg-dark text-warning my-4 py-3 rounded">
                    <h1 style={{textAlign: "center"}}>Sign Up</h1>
                        <Form className="font-weight-bold my-5">
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />      
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />      
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    First Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="First Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Last Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="Last Name" />
                                </Col>
                            </Form.Group>

                            <Row className="justify-content-center">
                                <Button type="submit" className="bg-warning text-dark shadow-none border-0 
                                 font-weight-bold">Submit</Button>
                            </Row>
                        </Form>
                </Container>
            </div>
        )
}

export default RewardsSignUp
