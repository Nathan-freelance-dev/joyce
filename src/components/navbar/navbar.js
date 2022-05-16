import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Brand from '../../assets/brand/brand.png'
import './navbar.scss'

const MyNavbar = () => {
    return (
        <Navbar bg="white" expand="lg" className="sticky-top shadow">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Brand} width="65%" alt="brand" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#work">Our Work</Nav.Link>
                        <Nav.Link href="#faq">Faq</Nav.Link>
                        <Nav.Link href="#vouchers">Vouchers</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;