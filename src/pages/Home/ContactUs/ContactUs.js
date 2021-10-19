import { faHeartbeat, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container>
            <h2 className="text-center my-5 text-primary fw-bold">Contact Us</h2>
            <Row>
                <Col className="bg-light p-3 rounded me-0 me-md-3 mb-3 mb-md-0">
                    <h2 className="mb-3 text-center text-danger">Working Hour</h2>
                    <Container>
                       <Row>
                       <Col>
                        <p className="fw-bold">MON – WED</p>
                        <p className="fw-bold">THU</p>
                        <p className="fw-bold">SAT – SUN</p>
                        <p className="fw-bold">FRI</p>
                        </Col>
                        <Col>
                        <p>8AM – 7PM</p>
                        <p>8AM – 5PM</p>
                        <p>8AM – 5PM</p>
                        <p>Closed</p>
                        </Col>
                       </Row>
                    </Container>
                    <Container className="d-flex">
                        <FontAwesomeIcon className="fs-5 pt-1 text-danger" icon={faPhone} />
                        <div className="ms-3">
                            <h5>CALL US ANYTIME</h5>
                            <p>01293-3467-862</p>
                        </div>
                    </Container>
                    <Container className="d-flex">
                        <FontAwesomeIcon className="fs-5 pt-1 text-danger" icon={faMapMarkerAlt} />
                        <div className="ms-3">
                            <h5>VISIT US ANYTIME</h5>
                            <p>27th Avenue, Dhaka, Bangladesh</p>
                        </div>
                    </Container>
                    <Container className="d-flex">
                        <FontAwesomeIcon className="fs-5 pt-1 text-danger" icon={faHeartbeat} />
                        <div className="ms-3">
                            <h5>BOOK AN APPOINTMENT</h5>
                            <p>You can book an appointment anytime</p>
                        </div>
                    </Container>
                </Col>
                <Col className="bg-light p-3 rounded text-center d-flex flex-column justify-content-center">
                    <h2 className="mb-3">Get Appointment</h2>
                    <Form>
                        <Row className="mb-2">
                            <Col>
                                <Form.Control type="text" className="mb-2" placeholder="Full Name" />
                                <Form.Control type="email" name="email" id="" className="mb-2" placeholder="Your Email" />
                                <Form.Control type="text" placeholder="Date" />
                            </Col>
                            <Col>
                                <Form.Control type="number" name="phone" id="" className="mb-2" placeholder="Your Phone" />
                                <Form.Control type="text" className="mb-2" placeholder="Visit Reason" />
                                <Form.Control type="text" placeholder="Time" />
                            </Col>
                        </Row>
                        <Form.Control as="textarea" rows={3} className="mb-2" placeholder="Extra Note" />
                        <Button variant="danger" className="w-100 rounded-pill" type="submit">Book Appointment</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;