import React, {useEffect,useState, useRef} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const inputStyles = {    
    width: '70%',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',  
  };


const ProcenaTure = () => {
    const [cityData, setCityData] = useState([]);
    const [tackaA, setTackaA] = useState('');
    const [tackaB, setTackaB] = useState('');
    const [iznosTure, setIznosTure] = useState('');
    const povratnaTura = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://raw.githubusercontent.com/stefancode/Srbija-gradovi/master/srbija-svi-gradovi.json'
          );
          const data = await response.json();
          setCityData(data);
        } catch (error) {
          console.error('Error fetching city data:', error);
        }
      };
  
      fetchData();
    }, []);

    const izracunaj = () =>{
        if(tackaA === '' && tackaB === ''){
            alert("Morate uneti i tačku A i tačku B")
        }
        else{
            const fetchData = async () => {
            const url = 'https://distanceto.p.rapidapi.com/distance/route';
            const options = {
                method: 'POST',
                headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'a6a336033bmsh2ca18f6c623a75cp11db3ajsn167b820fda73',
                'X-RapidAPI-Host': 'distanceto.p.rapidapi.com'
                },
                body: JSON.stringify({
                route: [
                    {
                    country: 'SRB',
                    name: tackaA
                    },
                    {
                    country: 'SRB',
                    name: tackaB
                    }
                ]
                })
            };
        
            try {
                const response = await fetch(url, options);
                const resultString = await response.text();
                const result = JSON.parse(resultString);
                const distanca = result.route.car.distance;
                const cenaPoKm = 200;
                const popust = povratnaTura.current.checked ? 0.15 : 0;
                const iznos = distanca * cenaPoKm;
                const obracunPopust = iznos * popust;
                const ukupanIznos = iznos - obracunPopust;
                setIznosTure(`Procenjen iznos vaše ture je ${ukupanIznos.toFixed(2)} dinara, procenjena distanca je ${distanca.toFixed(2)} km (Nadamo se da nismo mnogo promašili), obračunat popust iznosi ${obracunPopust.toFixed(2)} dinara (${popust*100}% popusta).`);
            } catch (error) {
                console.error(error);
            }
            };
        
            fetchData();
        }
      }
    const odabirTackeA = (event) => {
        setTackaA(event.target.value);
    };

    const odabirTackeB = (event) => {
        setTackaB(event.target.value);
    };
    return (        
        <Container className="bg-custom" fluid>              
            <Row className="pt-5 px-5 pb-3">
                <Col sm={12}>
                <h1 className='fw-bold text-center pb-3'>IZRAČUNAJTE CENU VAŠE TURE</h1>
                <p className="text-white fw-bold ">Unesite vašu početnu <span className="fw-normal">(tačku A)</span> i odredištnu <span className="fw-normal">(tačku B)</span> kako bi smo mogli da Vam izračunamo cenu prevoza od tačke A do tačke B. <span className="text-danger fw-bolder"> Ukoliko imate povratnu turu ostvarićete 15% popusta na obe ture.</span> Povratnu turu smatramo time da ćemo i na tački odredišta izvršiti utovar robe koju ćemo prevesti na željenu adresu, naravno potrebno je da izračunate i razdaljinu između te dve tačke, takođe sa čekiranom povratnom turom, jer će se ova tura posebno naplatiti, ali sa takođe ćete ostvariti popust.</p>
                </Col>            
            </Row>
            <Row className="px-5 pb-5">                
                <Col md={3} sm={12} className='p-2'>
                    <label htmlFor="citiesA" className='px-2 fw-bolder'>Tačka A: </label>
                    <input
                        list="citiesA"
                        value={tackaA}
                        style={inputStyles}
                        onChange={odabirTackeA}
                        placeholder="Unesite mesto/grad"
                    />
                    <datalist id="citiesA" >
                        {cityData.map((city, index) => (
                        <option key={index} value={city.city}/>
                        ))}
                    </datalist>
                </Col>
                <Col md={3} sm={12} className='p-2'>
                    <label htmlFor="citiesB" className='px-2 fw-bolder'>Tačka B: </label>
                    <input
                        list="citiesB"
                        value={tackaB}
                        onChange={odabirTackeB}
                        style={inputStyles}
                        placeholder="Unesite mesto/grad"
                    />
                    <datalist id="citiesB">
                        {cityData.map((city, index) => (
                        <option key={index} value={city.city} />
                        ))}
                    </datalist>
                </Col>
                <Col md={3} sm={12} className='p-2'>
                    <label htmlFor="povratnaTura" className='px-2 fw-bolder'>Obezbeđena povratna tura</label>
                    <input type="checkbox" id="povratnaTura" ref={povratnaTura} />
                </Col>
                <Col md={3} sm={12} className='p-2'>
                  <Button onClick={izracunaj} className="btn-success px-5 fw-bolder">IZRAČUNAJ!</Button>
                </Col>
           </Row>
           <Row className='pb-4'>
                <Col md={12} sm={12} className='px-5'>
                    <p className="fw-bolder">{iznosTure}</p>
                </Col>
           </Row>
        </Container>
    );
};

export default ProcenaTure;
