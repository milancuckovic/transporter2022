import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ZadovoljniKorisnici from '../components/ZadovoljniKorisnici';
import ProcenaTure from '../components/ProcenaTure';
import Hero from '../components/Hero';

const Home = () =>  {
  return (
    <Container fluid>        
      <Row className="justify-content-center p-3">
        <Hero/>
      </Row>
      <Row className='mb-4'>
        <Col className='px-0'>
          <ProcenaTure/>
        </Col>
      </Row>
      <Row>
        <Col className='px-0'>
            <ZadovoljniKorisnici/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
