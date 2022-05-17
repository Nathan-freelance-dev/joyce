import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as biIcons from 'react-icons/bi'
import './header.scss'
import MyNavbar from "../navbar/navbar";

const Header = () => {
    return (
        <header className="sticky-top">
            <div className="header">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/booking" className="text-light text-decoration-none text-uppercase">
                                Book a seat!
                            </Link>
                        </Col>
                        <Col>
                            <div className="text-end">
                                <span className="text-light me-3 fs-6">CALL US TODAY:</span> <span className="text-light me-1">123-456-7890</span> <biIcons.BiPhone className="fs-5 text-light" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <MyNavbar />
        </header>
    )
}

export default Header;