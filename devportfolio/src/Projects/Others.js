import Container from 'react-bootstrap/Container';
import { Row, Col, Button, Carousel, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Others() {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <>

            <Row className='ms-3 mt-3 w-auto' data-aos="fade-up">
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '> <a className='project-link' href=''>
                        Homeowners Association DB Application</a>
                    </Row>
                    <Row className='ps-3'>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>HTML5/CSS</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Java</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>MySQL</Col>

                    </Row>
                    <Row className='text-light'>
                        <Col className='col-9 mt-2'>
                        Developed the frontend and backend of a database management application which enhances the
                        management of essential data, providing personnel with efficient and user-friendly tools for information
                        organization and retrieval along with support for CRUD operations.
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    );
}

export default Others;
