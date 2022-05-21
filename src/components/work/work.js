import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './work.scss'
import { clientGallary } from "../../data/workData";

const columnNumnber = {
    colNum: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}

const Work = () => {
    return (
        <>
            <section className="work_container bg-light" id="work_container">
                <Container>
                    <h6 className="text-muted text-uppercase">Our recent works</h6>
                    <h1 className="fw-bold">Client Gallary</h1>

                    <Row className="mt-4">
                        {clientGallary.map((data, index) => {
                            return (
                                <Col md={columnNumnber.colNum[1]} key={index} className="h-100 p-1">
                                    <img src={data.clientImage} alt="clients" className="work_img" width="100%"/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Work;