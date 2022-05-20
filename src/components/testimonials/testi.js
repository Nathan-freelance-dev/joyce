import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './testi.scss'
import { commentData } from '../../data/reviewData'

const Reviews = () => {
    return (
        <>
            <section className="testimonial bg-white" id="testimonials">
                <Container>
                    <h6 className="text-muted">
                        #1 RATED BEAUTY SERVICE IN ABUJA
                    </h6>
                    <h1 className="text-dark fw-bold">
                        Testimonials
                    </h1>

                    <Row className="mt-4">
                        {commentData.map((data, index) => {
                            return (
                                <Col md={4}>
                                    <div className={data.className}>
                                        <div className="client_detail_container d-flex">
                                            <div className="avater_img">
                                                <img src={data.avatar} width={"100%"} className="rounded-circle" />
                                            </div>

                                            <div className="text-start ms-3">
                                                <h6 className="text-dark fw-bold">
                                                    {data.clientName}
                                                </h6>
                                                <small className="text-muted">
                                                    {data.service}
                                                </small>
                                            </div>
                                        </div>

                                        <div className="mt-3 text-muted small">
                                            {data.details}
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Reviews;