import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar';
import {Col, Row} from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';


function App() {
  return (
    <>
      {/* <NavigationBar></NavigationBar> */}
      <Row>
        {/* <Col className="App col-2">
          <Sidebar></Sidebar>
        </Col> */}
        
        <Col>
          <Home></Home>
        </Col>

      </Row>
    </>
  );
}

export default App;
