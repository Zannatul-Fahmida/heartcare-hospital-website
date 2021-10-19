import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col className="order-2 order-md-1 mt-3 mt-md-0">
                    <h4 className="text-danger">Welcome to our</h4>
                    <h1>HeartCare Hospital</h1>
                    <p>HeartCare Hospital is a state-of-the-art tertiary care hospital in Dhaka city. It was founded in 2013, today it is one of the most preferred hospital not only in Dhaka but also nationally and internationally owing to the exclusive services and excellent medical outcomes delivered. HeartCare Hospital brings the best in Heart treatment to the state of Dhaka.HeartCare Hospital has a knowledge sharing arrangement with Mount Sinai Hospital New York USA, which has been internationally recognized for its top-performing physicians and revolutionary research centres.HeartCare Hospital has emerged as a destination of choice for many national and international patients owing to the exclusive services and excellent medical outcomes delivered at HeartCare HOSPITAL.HeartCare hospital is the only hospital of the state with JCI (Joint Commission International)- USA Based organization accreditation. This accreditation is a testimony to HeartCare Hospital’s constant endeavor to provide world-class patient care and maintain the highest standards in healthcare delivery. All construction and adaptation of technology has been done in adherence to international norms. </p>
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center order-1 order-md-2">
                    <Image src={about} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default About;