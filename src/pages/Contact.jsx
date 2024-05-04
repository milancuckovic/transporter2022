import React, {useState, useRef} from 'react'
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';

const Contact = () => {
  const [poruka, setPoruka] = useState('');
  const [prikazPoruke, setPrikazPoruke] = useState(false);
  const prikaziPoruku = () => setPrikazPoruke(!prikazPoruke);
  
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);


  const slanjeMejla = (e) => {
    e.preventDefault();
    if(proveraPopunjenosti()){
      proveraVremena();
      setPrikazPoruke(true);
    }    
  }
  const customAlert = (text) => {
    setPoruka(text);
    setPrikazPoruke(true);
  }
  const proveraPopunjenosti = () => {
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
      customAlert('Molimo vas popunite sva polja.');
      return false;
    }
    else{
      return true;
    }
  }
  const proveraEmaila = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = e.target.value;
    if (!emailRegex.test(email)) {
      customAlert('Unesite ispravnu email adresu.');
      e.target.focus();
    }
  }
  const proveraVremena = () => {
    const vreme = new Date();
    const sati = vreme.getHours();
    if(sati >= 16 && sati <= 24){
      setPoruka("Poslali ste mejl van našeg radnog vremena, dobićete odgovor sutra u periodu od 08-16h.");
    }
    else if(sati >= 8 && sati < 16){
      setPoruka("Poslali ste mejl u toku našeg radnog vremena, potrudićemo se da dobijete odgovor u toku našeg radnog vremena, ukoliko ne stignemo dobićete odgovor sutra u periodu od 08-16h.");
    }
    else{
      setPoruka("Još nismo počeli danas da radimo, očekujte odgovor na vašu poruku danas do 16h.");
    }
  }
  return (
    <Container fluid>
      <Row className="p-md-5">
        <Col md={12} sm={12} className='px-md-5'>
          <h1>Kontakt</h1>
          <hr></hr>
          <Form onSubmit={slanjeMejla}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="vaša_email_adresa@mail.com" onBlur={proveraEmaila} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Naslov poruke</Form.Label>
              <Form.Control ref={subjectRef} type="text" placeholder="Naslov poruke" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sadržaj poruke</Form.Label>
              <Form.Control ref={messageRef} as="textarea" rows={5} />
            </Form.Group>
            <Button type="submit">POŠALJI</Button>
          </Form>
          <div className="position-fixed top-50 start-50 translate-middle toast-container">
              <Toast show={prikazPoruke} onClose={prikaziPoruku} >
                  <Toast.Header className="bg-warning text-white">
                      <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                      />
                      <strong className="me-auto">Obaveštenje</strong>
                  </Toast.Header>
                  <Toast.Body className='py-5 fw-bold'>{poruka}</Toast.Body>
              </Toast>
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}
export default Contact;
