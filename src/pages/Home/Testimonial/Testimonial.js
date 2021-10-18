import React from 'react';
import './Testimonial.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
            <Container>
                <h2 className="text-center my-5 text-primary fw-bold">Testimonials</h2>
                <Row>
                    <Col className="testimonial border rounded me-2 p-3">
                        <div className="text-center mb-2">
                            <FontAwesomeIcon icon={faUser} className="icon text-secondary" />
                        </div>
                        <p>"Professionals in their work, the surgery went well and I was able to go on with my life within just a few weeks. Recommended!"</p>
                        <h5>-LARAINE FLEMMING</h5>
                        <h6 className="text-danger">CBR</h6>
                    </Col>
                    <Col className="testimonial border rounded me-2 p-3">
                        <div className="text-center mb-2">
                            <FontAwesomeIcon icon={faUser} className="icon text-secondary" />
                        </div>
                        <p>"I am deeply grateful to Dr. Chase for his expertise and care. He practices both the science and the art of cardiac surgery."</p>
                        <h5>-HERBIE HAYNES</h5>
                        <h6 className="text-danger">Valve Prolapse Repair</h6>
                    </Col>
                    <Col className="testimonial border rounded p-3">
                        <div className="text-center mb-2">
                            <FontAwesomeIcon icon={faUser} className="icon text-secondary" />
                        </div>
                        <p>"They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and grandchildren."</p>
                        <h5>-ELLEN NORTON</h5>
                        <h6 className="text-danger">Pacemaker implantation</h6>
                    </Col>
                </Row>
            </Container>
    );
};

export default Testimonial;