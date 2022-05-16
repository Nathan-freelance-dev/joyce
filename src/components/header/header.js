import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as biIcons from 'react-icons/bi'
import './header.scss'

const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col>
                            <Link to="/booking" className="text-light text-decoration-none text-uppercase">
                                Book a seat
                            </Link>
                        </Col>
                        <Col>
                            <div className="text-end">
                                <span className="text-light me-3">CALL US TODAY:</span> <span className="text-light me-1">123-456-7890</span> <biIcons.BiPhone className="fs-5 text-light" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header;