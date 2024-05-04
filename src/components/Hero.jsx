import React, {useState} from 'react';
import { Col, Image, Button, Toast } from 'react-bootstrap';
import heroimage from '../images/heroimage.jpg'; 
const Hero = () => {
    const [kontaktPodaci, setKontaktPodaci] = useState(false);
    const prikaziKontakt = () => setKontaktPodaci(!kontaktPodaci);
    return (
        <>
            <Col md={6} lg={4}>
                <Image src={heroimage} alt="Moja slika" fluid={true} rounded={true}/>
            </Col>
            <Col md={6} lg={4}>
                <h1>Tražiš prevoz?</h1>
                <h2 className='text-success'>Čestitam, na pravom si mestu!</h2>
                <ul>
                    <li>Magacinski transport</li>
                    <li>Transport paletirane robe</li>
                    <li>Transport rinfuzne robe</li>
                    <li>Seldibe</li>
                </ul>
                <Button variant="danger" onClick={prikaziKontakt}>KONTAKTIRAJ ODMAH</Button>
                <div className="position-fixed top-50 start-50 translate-middle toast-container">
                    <Toast show={kontaktPodaci} onClose={prikaziKontakt} >
                        <Toast.Header className="bg-danger text-white">
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                            />
                            <strong className="me-auto">Kontakt</strong>
                        </Toast.Header>
                        <Toast.Body className='py-5 bg-warning fw-bold'>Pozovi odmah <a href="tel:555-666-7777">555-666-7777</a> i zakaži svoj prevoz!</Toast.Body>
                    </Toast>
                </div>
            </Col>
        </>        
    );
};

export default Hero;
