import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404-error.png';

const NotFound = () => {
    return (
        <div className="text-center">
        <Link to="/">
        <Button className="my-3">Go Back</Button>
        </Link>
            <img style={{width: '100%'}} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;