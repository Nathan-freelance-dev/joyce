import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './about.scss'
import { Carousel } from "react-bootstrap";
import Slider1 from '../../assets/images/slider-img-1.jpg'
import Slider2 from '../../assets/images/slider-img-2.jpg'
import MyButton from "../button/button";
import Brand1 from '../../assets/brand/brand-1.jpg'
import Brand2 from '../../assets/brand/brand-2.jpg'
import Brand3 from '../../assets/brand/brand-3.jpg'
import Brand4 from '../../assets/brand/brand-4.jpg'
 
const About = () => {
    return (
        <>
            <section className="about" id="about">
                <Container>
                    <h1 className="text-center text-dark fw-bold">
                        Welcome to Joyce Beauty Salon
                    </h1>

                    <div className="about_detail text-center text-muted mt-4">
                        <p>
                            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show.
                        </p>
                    </div>

                    <div className="mt-4 position-relative">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img className="d-block w-100" src={Slider1} alt="First slide"/>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={Slider2} alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>

                        <div className="position-absolute service_detail">
                            <Row>
                                <Col md={8}>
                                    <div className="text-light">
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                        </small>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="text-end">
                                        <MyButton
                                            color={"light"}
                                            text={"Book online"}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h6 className="text-muted">Products we use</h6>

                        <Row className="mt-3">
                            <Col md={3} className="text-center">
                                <img src={Brand1} width="80%" />
                            </Col>

                            <Col md={3} className="text-center">
                                <img src={Brand2} width="50%" />
                            </Col>

                            <Col md={3} className="text-center">
                                <img src={Brand3} width="50%" />
                            </Col>

                            <Col md={3} className="text-center">
                                <img src={Brand4} width="80%" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About;