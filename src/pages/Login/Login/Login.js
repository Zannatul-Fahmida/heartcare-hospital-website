import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { setUser, setError, signInUsingGoogle, handleEmail, handlePassword, logInWithEmailAndPassword, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleEmailAndPasswordLogin = ()=>{
        logInWithEmailAndPassword()
        .then(result => {
            setUser(result.user);
            setError('');
            history.push(redirect_uri);
        })
    }

    return (
        <Container>
            <h1 className="text-center my-4">Login</h1>
            <Form>
                <div className="d-flex flex-column align-items-center">
                    <Form.Floating onBlur={handleEmail} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingInputCustom1"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom1">Email address</label>
                    </Form.Floating>
                    <Form.Floating onBlur={handlePassword} className="mb-3 col-12 col-md-4">
                        <Form.Control
                            id="floatingPasswordCustom1"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom1">Password</label>
                    </Form.Floating>
                    <Button variant="danger" className=" col-12 col-md-4 py-3 border-0" onClick={handleEmailAndPasswordLogin}>Log in</Button>
                    <div className="text-center col-12 col-md-4 mt-4">
                        <p className="text-danger">{error}</p>
                        <p>Don't have an account?? <Link to="/signup" className="text-decoration-none fw-bold">Sign Up</Link></p>
                        <Button variant="primary" onClick={handleGoogleLogin}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign in with google</Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
};

export default Login;