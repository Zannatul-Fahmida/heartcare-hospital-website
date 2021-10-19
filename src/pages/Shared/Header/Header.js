import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3"><FontAwesomeIcon icon={faHeartbeat} className="text-danger"></FontAwesomeIcon> <span className="text-danger">Heart</span>Care</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home" className="text-dark text-center">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="text-dark text-center">About</Nav.Link>
                    {user.email ?
                        <div className="d-flex flex-md-row flex-column align-items-center">
                            <span className="pe-0 pe-md-3 text-center pb-2 pb-md-0">{user.displayName}</span>
                            <Button variant="danger" onClick={logOut} className="px-4 py-2">logout</Button>
                        </div>
                        :
                        <div className="d-flex justify-content-center">
                            <Nav.Link as={Link} to="/login" className="text-dark fw-bold">Login</Nav.Link>
                        </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;