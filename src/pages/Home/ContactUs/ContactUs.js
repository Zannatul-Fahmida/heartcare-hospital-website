import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container>
            <h2 className="text-center my-5 text-primary fw-bold">Contact Us</h2>
            <Row>
                <Col>

                </Col>
                <Col>
                    <h2>Get Appointment</h2>
                    <Form>
                        <Row className="mb-2">
                            <Col>
                                <input type="text" className="w-100 mb-2 border border-light" placeholder="Full Name" />
                                <input type="email" name="email" id="" className="w-100 mb-2" placeholder="Your Email" />
                                <input type="text" className="w-100" placeholder="Date" />
                            </Col>
                            <Col>
                                <input type="number" name="phone" id="" className="w-100 mb-2" placeholder="Your Phone" />
                                <input type="text" className="w-100 mb-2" placeholder="Visit Reason" />
                                <input type="text" className="w-100" placeholder="Time" />
                            </Col>
                        </Row>
                        <textarea name="text" id="" className="w-100 mb-2" placeholder="Extra Note" />
                        <Button variant="danger" className="w-100 rounded-pill">Book Appointment</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;