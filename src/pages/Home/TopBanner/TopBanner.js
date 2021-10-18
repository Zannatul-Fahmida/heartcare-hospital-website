import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/topbanner1.jpg';
import img2 from '../../../images/topbanner2.jpg';

const TopBanner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-black">
                    <h3 className="d-block d-md-block">Healthy heart, healthy family</h3>
                    <p className="d-none d-md-block">HeartCare is a full service cardiovascular practice located in Lakewood Ranch that serves both Sarasota and Bradenton. Our highly qualified team of practitioners provide compassionate, high quality care and service backed by the latest advances in cardiovascular medicine, including complex coronary and vascular interventions.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-black">
                    <FontAwesomeIcon icon={faHeart} className="text-danger fs-1"></FontAwesomeIcon>
                    <h3 className="d-block d-md-block">Your health is your wealth</h3>
                    <p className="d-none d-md-block">Heart Care Consultants is a proud to be affiliated with Lakewood Ranch Medical Center and Doctors Hospital of Sarasota.  Partnering with these facilities enables us to provide inpatient and emergent cardiac care to our patients in an acute hospital setting. Whether you need treatment for a heart condition or guidance to keep your heart healthy for years to come, you can count on us. Our heart specialists work together as a team, putting you at the center, to provide the best diagnosis and treatment possible. Many of our facilities have been accredited by the American Heart Association for exceptional heart attack care and have been named primary and comprehensive stroke centers. This means you have access to the most advanced treatments and technology available. From preventive care to genetic testing and counseling programs to minimally-invasive procedures, such as our innovative TAVR procedure for aortic valve replacement, and advanced heart surgery, we have a treatment option that’s right for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;