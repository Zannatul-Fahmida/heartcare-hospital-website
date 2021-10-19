import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faqs = () => {
    return (
        <Container className="my-4">
            <div className="text-center">
                <h4 className="text-danger">Feel Free For</h4>
                <h1 className="mb-4">ANY FAQ’S</h1>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How much you charge for consultancy?</Accordion.Header>
                    <Accordion.Body>
                        Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the chest and meniscus injuries of the heart, with an initial focus on the highly developed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What kind of patients do you treat?</Accordion.Header>
                    <Accordion.Body>
                        We treat all kind of patients who have heart problems. Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the chest and meniscus injuries of the heart, with an initial focus on the highly developed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Where does my refering Cardiologist go?</Accordion.Header>
                    <Accordion.Body>
                        Here we have the most of the expert surgeons. Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the chest and meniscus injuries of the heart, with an initial focus on the highly developed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How much cost on cardiac surgery?</Accordion.Header>
                    <Accordion.Body>
                        It costs low from other hospitals. Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the chest and meniscus injuries of the heart, with an initial focus on the highly developed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>How much cost on pacemaker placement?</Accordion.Header>
                    <Accordion.Body>
                        It costs low from other hospitals. Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the chest and meniscus injuries of the heart, with an initial focus on the highly developed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>How much cost on angiography?</Accordion.Header>
                    <Accordion.Body>
                        It costs low from other hospitals. Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the chest and meniscus injuries of the heart, with an initial focus on the highly developed.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Faqs;