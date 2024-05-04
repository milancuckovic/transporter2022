import React, { useState } from 'react';
import { Container,Row, Col, Card, Carousel } from 'react-bootstrap';

const ZadovoljniKorisnici = () => {
    const [korisnici] = useState([
        { ime: "CIAK", slika: require('../images/ciak.png') },
        { ime: "MB Trans", slika: require('../images/mbtrans.png') },
        { ime: "Plastik Gogić", slika: require('../images/gogic.png') },
        { ime: "Milsped", slika: require('../images/milsped.png') },
        { ime: "Gasteh Inđija", slika: require('../images/gasteh.png') },
        { ime: "Transfera", slika: require('../images/logo-transfera.webp') }
    ]);
    return (
        <div className="divZadovoljni">
            <h2 className="text-center">Zadovoljni korisnici:</h2>
            <Container fluid>
                <Row>
                    <Col md={4} sm={4} xs={4}  className="px-0">
                        <Carousel interval={3000} controls={false} pause={false} indicators={false}>
                        {(() => {
                            const uklonjenElement = korisnici.shift(); 
                            korisnici.push(uklonjenElement);
                            return korisnici.map((korisnik, index) => (
                                <Carousel.Item key={index}>
                                    <Card className="border-0">
                                        <Card.Img variant="top" src={korisnik.slika} className='slikaKorisnika'/>
                                        <Card.Body className="hideBody">
                                            <Card.Title className='text-center' style={{ cursor: 'default' }}>{korisnik.ime}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            ));
                        })()}
                        </Carousel>  
                    </Col>
                    <Col md={4} sm={4} xs={4}  className="px-0">
                        <Carousel interval={3000} controls={false} pause={false} indicators={false}>
                            {(() => {
                                const uklonjenElement = korisnici.shift(); 
                                korisnici.push(uklonjenElement); 

                                return korisnici.map((korisnik, index) => (
                                    <Carousel.Item key={index}>
                                        <Card className="border-0">
                                            <Card.Img variant="top" src={korisnik.slika} className='slikaKorisnika'/>
                                            <Card.Body className="hideBody">
                                                <Card.Title className='text-center'>{korisnik.ime}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                ));
                            })()}
                        </Carousel>  
                    </Col>
                    <Col md={4} sm={4} xs={4} className="px-0"> 
                        <Carousel interval={3000} controls={false} pause={false} indicators={false}>
                            {(() => {
                                const uklonjenElement = korisnici.shift();
                                korisnici.push(uklonjenElement);

                                return korisnici.map((korisnik, index) => (
                                    <Carousel.Item key={index}>
                                        <Card className="border-0">
                                            <Card.Img variant="top" src={korisnik.slika} className='slikaKorisnika'/>
                                            <Card.Body className="hideBody">
                                                <Card.Title className='text-center'>{korisnik.ime}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                ));
                            })()}
                        </Carousel>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ZadovoljniKorisnici;
