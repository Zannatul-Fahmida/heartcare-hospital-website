import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import serviceFakedata from '../../../FakeData/FakeData';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
        const matchedService = serviceFakedata.find(service => service.id.toString() === serviceId.toString());
        setService(matchedService); 
    },[serviceId])
    return (
        <Container className="text-center my-5">
            <Image src={service.img} fluid />
            <h3 className="text-primary fw-bold my-2">{service.name}</h3>
            <p className="w-50 mx-auto">{service.fullDescription}</p>
        </Container>
    );
};

export default ServiceDetails;