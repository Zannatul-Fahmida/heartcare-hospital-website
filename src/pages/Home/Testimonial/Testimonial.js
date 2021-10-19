import React from 'react';
import './Testimonial.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <Container>
            <h2 className="text-center my-5 text-primary fw-bold">Testimonials</h2>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="testimonial h-100 p-3">
                        <div className="text-center mb-2">
                            <FontAwesomeIcon icon={faUser} className="icon text-secondary" />
                        </div>
                        <Card.Body>
                            <Card.Text>"Professionals in their work, the surgery went well and I was able to go on with my life within just a few weeks. Recommended!"</Card.Text>
                            <Card.Title>-LARAINE FLEMMING</Card.Title>
                            <h6 className="text-danger">CBR</h6>
                        </Card.Body>
                    </Card>
                </Col >
                <Col>
                    <Card className="testimonial h-100 p-3">
                        <div className="text-center mb-2">
                            <FontAwesomeIcon icon={faUser} className="icon text-secondary" />
                        </div>
                        <Card.Body>
                            <Card.Text>"I am deeply grateful to Dr. Chase for his expertise and care. He practices both the science and the art of cardiac surgery."</Card.Text>
                            <Card.Title>-HERBIE HAYNES</Card.Title>
                            <h6 className="text-danger">Valve Prolapse Repair</h6>
                        </Card.Body>
                    </Card>
                </Col >
                <Col>
                    <Card className="testimonial h-100 p-3">
                        <div className="text-center mb-2">
                            <FontAwesomeIcon icon={faUser} className="icon text-secondary" />
                        </div>
                        <Card.Body>
                            <Card.Text>"They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and grandchildren."</Card.Text>
                            <Card.Title>-ELLEN NORTON</Card.Title>
                            <h6 className="text-danger">Pacemaker implantation</h6>
                        </Card.Body>
                    </Card>
                </Col >
            </Row>
        </Container>
    );
};

export default Testimonial;