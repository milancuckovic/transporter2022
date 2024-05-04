import React from 'react';
import { Container } from 'react-bootstrap';

const MyFooter = () => {
    const year = new Date();
    return (
        <footer className="bg-dark text-light py-4 mt-5">
        <Container>
            <div className="text-center">
            <p>© {year.getFullYear()} Transporter2022. Sva prava su zadržana.</p>
            </div>
        </Container>
        </footer>
    );
};

export default MyFooter;
