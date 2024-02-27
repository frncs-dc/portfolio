import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function MiniNavBar() {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Container className='d-flex flex-column mini-navbar w-auto'>
                {visible && <Button className='mb-2 socmed-btn' href="#about-me">Home</Button>}
                {visible && <Button className='mb-2 socmed-btn' href="#preprofessional">Pre Professional</Button>}
                {visible && <Button className='mb-2 socmed-btn' href="#projects">Projects</Button>}
                {visible && <Button className='mb-2 socmed-btn' href="">Contact Me</Button>}
                {!visible && <Button className='socmed-btn' onClick={() => setVisible(true)}>Expand</Button>}
                {visible && <Button className='socmed-btn' onClick={() => setVisible(false)}>Hide</Button>}
            </Container>
        </>
    );
}

export default MiniNavBar;
