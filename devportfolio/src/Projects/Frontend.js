import Container from 'react-bootstrap/Container';
import { Row, Col, Button, Carousel, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Frontend() {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <>
            <Row className='ms-3 mt-3 w-auto' data-aos="fade-up">
                <Col className='col-2 p-2 '>
                    <Carousel>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\Motorcycle\Administrator Control Center Page.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\Motorcycle\Check Out - Delete Items.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\Motorcycle\Sales Page - Incoming Payments.png'></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '><a className='project-link' href='https://github.com/briangabini/CSSWENG-IMS'>Inventory System Website for a Local Motorcycle Parts Business</a></Row>
                    <Row className='ps-3'>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>MERN Stack</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Javascript</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Bootstrap</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Sprint Methodologies</Col>
                    </Row>
                    <Row className='text-light'>
                        <Col className='col-9 mt-2'>
                            Spearheaded the frontend development of the website and collaborated with the client to revise the designs
                            using prototyping tools like Figma. Improved the website to make it more user-friendly.
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='ms-3 mt-3 w-auto' data-aos="fade-up">
                <Col className='col-2 p-2 '>
                    <Carousel>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\Spotfinder\Home Page - with Login.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\Spotfinder\Host-Form Page 4.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\Spotfinder\Parking Slot Host.png'></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '><a className='project-link' href='https://github.com/frncs-dc/SpotFinder'>Spotfinder: A Web Application to Reserve Parking Spots</a></Row>
                    <Row className='ps-3'>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Javascript</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>HTML5/CSS</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>NodeJS</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>MongoDB</Col>
                    </Row>
                    <Row className='text-light'>
                        <Col className='col-9 mt-2'>
                            Developed the frontend and backend of a parking spot reservation system through a web application. 
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='ms-3 mt-3 w-auto' data-aos="fade-up">
                <Col className='col-2 p-2 '>
                    <Carousel>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\TellTail Tasks\TellTail Tasks - 1.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\Projects\TellTail Tasks\TellTail Tasks - 2.png'></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '><a className='project-link' href='https://github.com/frncs-dc/telltail-tasks'>TellTail Tasks: To Do List with Game Concepts</a></Row>
                    <Row className='ps-3'>
                        <Col md='auto' className=' rounded-pill me-2 text-dark'>MERN Stack</Col>
                    </Row>
                    <Row className='text-light'>
                        <Col className='col-9 mt-2'>
                        A productivity tool which motivates users to do their tasks through storytelling and game-related concepts
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Frontend;
