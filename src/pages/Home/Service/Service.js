import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, img, name, shortDescription } = props.service;
    return (
        <Col>
            <Card className="hover-effect h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-danger">{name}</Card.Title>
                    <Card.Text>{shortDescription}</Card.Text>
                    <Link className="text-decoration-none text-dark" to={"/details/" + id}>
                        <Button variant="outline-primary">See details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Service;