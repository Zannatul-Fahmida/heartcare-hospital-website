import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3"><FontAwesomeIcon icon={faHeartbeat} className="text-danger"></FontAwesomeIcon> <span className="text-danger">Heart</span>Care</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home" className="text-dark text-center">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="text-dark text-center">About</Nav.Link>
                    <div className="d-flex">
                        <Nav.Link as={Link} to="/login" className="text-dark fw-bold text-center">Login</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;