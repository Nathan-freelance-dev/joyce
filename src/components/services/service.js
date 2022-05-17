import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { joyceServiceData } from '../../data/serviceData';
import './service.scss'

const Service = () => {
    return (
        <>
            <section className='bg-light service-container' id='service'>
                <Container>
                    <Row>
                        {joyceServiceData.map((data, index) => {
                            return (
                                <Col md={4}>
                                    <div className='service-card bg-white text-center text-dark p-5'>
                                        <h1 className='fs-1'>
                                            {data.icon}
                                        </h1>

                                        <h3 className='mt-3 fw-bold text-uppercase'>
                                            {data.title}
                                        </h3>

                                        <div className='mt-3 text-mutes'>
                                            <small>
                                                {data.detail}
                                            </small>
                                        </div>

                                        <div className='mt-3'>
                                            <h3>
                                                {data.price}
                                            </h3>
                                        </div>

                                        <div className='mt-3'>
                                            <Link to={'/booking'} className="text-success">
                                                {data.link}
                                            </Link>
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

export default Service;