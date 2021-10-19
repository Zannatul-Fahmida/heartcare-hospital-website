import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { handleEmail, handlePassword, handleSignUp, error, handleName, handleConfirmPassword } = useAuth();
    return (
        <Container>
        <h1 className="text-center my-4">Sign Up</h1>
            <Form>
                <div className="d-flex flex-column align-items-center">
                    <Form.Floating onBlur={handleName} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingInputCustom2"
                            type="text"
                            placeholder="name"
                        />
                        <label htmlFor="floatingInputCustom2">Name</label>
                    </Form.Floating>
                    <Form.Floating onBlur={handleEmail} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingInputCustom3"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom3">Email address</label>
                    </Form.Floating>
                    <Form.Floating onBlur={handlePassword} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingPasswordCustom2"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom2">Password</label>
                    </Form.Floating>
                    <Form.Floating onBlur={handleConfirmPassword} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingPasswordCustom3"
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <label htmlFor="floatingPasswordCustom3">Confirm Password</label>
                    </Form.Floating>
                <Button variant="danger" className="col-12 col-md-4 py-3 border-0" onClick={handleSignUp}>Sign up</Button>
                <p className="text-danger">{error}</p>
                <p className="mt-3">Already have an account??
                    <Link to="/login" className="text-decoration-none account-text fw-bold">Login</Link></p>
                </div>
            </Form>
        </Container>
    );
};

export default SignUp;