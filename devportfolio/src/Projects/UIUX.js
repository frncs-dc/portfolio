import Container from 'react-bootstrap/Container';
import { Row, Col, Button, Carousel, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function UIUX() {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <>
            <Row className='ms-3 mt-3 w-auto' data-aos="fade-up">
                <Col className='col-2 p-2 '>
                    <Carousel>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Food Storage\Desktop - 1.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Food Storage\Desktop - 2.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Food Storage\Desktop - 3.png'></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '><a className='project-link' href='https://www.figma.com/file/jp7bZbjmtTcDZqSwICasxf/STHCIUX---MCO2---Protoyping?type=design&node-id=0%3A1&mode=design&t=M8GNrDlDy9j1WEQf-1'>UI/UX R&D of Food Storage Management Application</a></Row>
                    <Row className='ps-3'>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Figma</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>UX Research</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Thematic Analysis</Col>
                    </Row>
                    <Row className='text-light'>
                        <Col className='col-9 mt-2'>
                        Spearheaded and designed an intuitive and visually appealing user interface, optimizing the user’s experience
                        in storing and managing their food. Backed up by a needfinding study and qualitative analysis. Includes
                        usage of research concepts, prototyping and testing.
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='ms-3 mt-3 w-auto' data-aos="fade-up">
                <Col className='col-2 p-2 '>
                    <Carousel>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Motorcycle\Administrator Control Center Page.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Motorcycle\Check Out - Delete Items.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Motorcycle\Sales Page - Incoming Payments.png'></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '> <a className='project-link' href='https://www.figma.com/file/kaXc82UqQPUg6YVhUMMfkh/Motorcycle-Shop-Inventory-Web-App?type=design&node-id=0%3A1&mode=design&t=2YJvAn01PnG375jJ-1'>Inventory System Website for a Local Motorcycle Parts Business</a></Row>
                    <Row className='ps-3'>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>MERN Stack</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Javascript</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Bootstrap</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Figma</Col>
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
                            <Image rounded fluid src='\portfolio\Projects\Spotfinder\Home Page - with Login.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Spotfinder\Host-Form Page 4.png'></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image rounded fluid src='\portfolio\Projects\Spotfinder\Parking Slot Host.png'></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='ms-2'>
                    <Row className='fs-4 text-light mb-2 '><a className='project-link' href='https://www.figma.com/file/ss8fPAQWGKzITobwlHjtxF/PARKING-SPACE?type=design&node-id=0%3A1&mode=design&t=qa24X6evbkNJ6oPU-1'>Spotfinder: A Web Application to Reserve Parking Spots </a></Row>
                    <Row className='ps-3'>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>Javascript</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>HTML5/CSS</Col>
                        <Col md='auto'className=' rounded-pill me-2 text-dark'>NodeJS</Col>
                    </Row>
                    <Row className='text-light'>
                        <Col className='col-9 mt-2'>
                            Developed the frontend and backend of a parking spot reservation system through a web application. 
                        </Col>
                    </Row>
                </Col>
            </Row>
            

        </>
    );
}

export default UIUX;
