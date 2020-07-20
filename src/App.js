import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxWON from './components/BoxWON';
import BoxLOST from './components/BoxLOST';
import { Row,Col,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="background">
      <Container>
        <Row>
          <Col className="parents"><BoxWON wonimage={"rock.png"}/></Col>
          <Col className="parents"><BoxLOST lostimage={"paper.png"}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
