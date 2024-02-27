import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState, useRef  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiniNavBar from '../Components/MiniNavBar';
import Frontend from '../Projects/Frontend';
import UIUX from '../Projects/UIUX';
import Others from '../Projects/Others';


function Home(){

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    const [frontendVis, setFrontendVis] = useState(true);
    const [uiuxVis, setUiuxVis] = useState(false);
    const [othersVis, setOthersVis] = useState(false);

    const handleFrontEndVis = () =>{
        setFrontendVis(true)
        setUiuxVis(false)
        setOthersVis(false)
    }

    const handleUIUXVis = () => {
        setFrontendVis(false)
        setUiuxVis(true)
        setOthersVis(false)
    }

    const handleOthersVis = () => {
        setFrontendVis(false)
        setUiuxVis(false)
        setOthersVis(true)
    }

    return(
        <>

            <MiniNavBar></MiniNavBar>

            <Container id='about-me' fluid className=' p-4 home-section d-flex align-items-center justify-content-center'>
                <Row className="d-flex align-items-top justify-content-center "
                        data-aos="fade-up">
                    <Col md="auto" className='d-flex'>
                        <img className='rounded-4 picture ms-5' src='portfolio\Portfolio Pic\Picture.png'></img>
                    </Col>
                    
                    <Col className='me-5 d-flex flex-column'>
                        <Row className='display-4 fw-semibold'>
                            Hello! I'm Frances Dela Cruz
                        </Row>
                        <Row className=''>
                            A DLSU undergraduate taking BS Computer Science Majoring in Software Technology.
                            Having worked in many projects, I'm heavily interested in the areas of frontend development and Human
                            Computer Interaction. I'm currently part of the Center For Complexity & Emerging Technologies (COMET), 
                            a research laboratory at DLSU. 
                        </Row>

                        <Row className='mt-3'>
                            <Col md='auto'>
                                Programming Languages:
                            </Col>
                            <Col>
                                Javascript, Python, SQL, HTML/CSS, Bootstrap, Java
                            </Col>
                        </Row>

                        <Row className='fw-medium mt-2'>
                            Contact me here:
                        </Row>
                        <Row>
                            <span className='w-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </span>
                            <span className='w-auto'>
                                Email: frances_julianne_delacruz@dlsu.edu.ph
                            </span>
                        </Row>
                        <Row>
                            <span className='w-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </span>
                            <span className='w-auto'>
                                Email: delacruzfrancesjulianne@gmail.com
                            </span>
                        </Row>
                        <Row className='mb-2'>
                            <Col md='auto'>
                                Click here to access my resume: 
                                <a target='_blank' href='https://drive.google.com/file/d/1cMcCQ5tCK6k0NRPBmJ6hCpSnLWPMA-oO/view?usp=sharing' className='ms-2'>Link to Resume</a>
                            </Col>
                        </Row>
                        <Row className='mt-auto'>
                            <Button className='w-auto me-3 socmed-btn' href='https://www.linkedin.com/in/frances-dela-cruz-78a217239/'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                                </svg>
                                <span className='ms-2 '>LinkedIn</span>
                            </Button>
                            <Button className='w-auto socmed-btn' href='https://github.com/frncs-dc'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                                <span className='ms-2'>Github</span>
                            </Button>
                        </Row>
                        
                    </Col>
                    
                </Row>

                
           </Container>

            <Container id='preprofessional' fluid className=' section-1 d-flex flex-column align-items-center justify-content-center'>
                <Row className='d-flex display-3 ' data-aos="fade-up">
                    Pre-Professional Experience
                </Row>
                <Row className='mt-3 text-center mx-4 ' data-aos="fade-up">
                    During the course of my college years, I joined organizations to develop my sense of design and pratice following
                    existing branding and documentation.
                    I developed publicity materials such as layouts, logos and animations for events, announcements
                    and general information dissemination. I also had the experience to develop plans and design for the
                    themes of events.
                </Row>
                <Row className="mt-2 d-flex align-items-top justify-content-center ">
                    <Col className='d-flex'>
                        <Card className='p-3 w-100 h-100' data-aos="fade-up">
                            <Container>
                                <Row className='display-6 fw-bold'>
                                    CATCH2T25
                                </Row>
                                <Row>
                                    2022 - 2023
                                </Row>
                                <Row className='fw-medium'>
                                    Associate VP in Publicity
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                    <Col className='d-flex'>
                        <Card className='p-3 w-100 h-100' data-aos="fade-up">
                            <Container>
                                <Row className='display-6 fw-bold'>
                                    DLSU SPRINT
                                </Row>
                                <Row>
                                    2022 - 2023
                                </Row>
                                <Row className='fw-medium'>
                                Executive at Integrated Marketing and Communications
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                </Row>
           </Container>

           <Container  fluid className='ps-5 section-2 align-items-center justify-content-center pt-3'>
                <Row id='projects' className='d-flex display-4 mb-3 text-light' data-aos="fade-up">
                    <Col md='auto'>Projects</Col>
                </Row>
                <Row className="">
                    <Col className='mt-2 ' md='auto' data-aos="fade-up">
                        <Button className={`rounded-pill px-3 me-2 ${frontendVis ? 'selected-btn' : 'unselected-btn'}`}
                                onClick={handleFrontEndVis}>Frontend</Button>
                        <Button className={`rounded-pill px-3 me-2 ${uiuxVis  ? 'selected-btn' : 'unselected-btn'}`}
                                onClick={handleUIUXVis}>UI/UX</Button>
                        <Button className={`rounded-pill px-3 mx-2 ${othersVis ? 'selected-btn' : 'unselected-btn'}`}
                                onClick={handleOthersVis}>Others</Button>
                    </Col>
                </Row>
                <Row>
                    {frontendVis && <Frontend></Frontend> }
                    {uiuxVis && <UIUX></UIUX>}
                    {othersVis && <Others></Others>}
                </Row>
           </Container>
        </>
    )
}

export default Home