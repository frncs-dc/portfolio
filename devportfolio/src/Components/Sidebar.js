import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';

// Dynamic Content:
// - Home: Profile (link to about me), 
//         Programming Languages (link to projects),  
//         Talk About My Blog (Link to Blog), 
//         Acknowledgemnets (credits to libraries used)
// - About me: Education,
//             Experience,
//             Interests,
//             Skills,
//             link to resume download
// - Projects: JPDGarage,
//             Grocery App,
//             TellTailTasks,
//             TaftEats,
//             Weather
// - Blog: just showcase wordpress
// - Contact: email, github, linkedin, etc. (use gmail api)

function Sidebar(){

    return(
        <>
            <Container fluid className='p-4 border'>
                <Stack>
                    <div>Home</div>
                    <div>About Me</div>
                    <div>Projects</div>
                    <div>Blog</div>
                </Stack>
            </Container>
        </>
    )
}

export default Sidebar