import React from "react";
import { Container } from "react-bootstrap";
import './faq.scss'
import { faqsUiData } from "../../data/faqData";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
    return (
        <>
            <section className="faq_container">
                <Container>
                    <h1 className="text-center fw-bold">FAQs</h1>

                    {faqsUiData.map((data, index) => {
                        return (
                            <Accordion defaultActiveKey="0" key={index} flush>
                                <Accordion.Item eventKey={data.id}>
                                    <Accordion.Header className="border-bottom">{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        {data.detail}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
                </Container>
            </section>
        </>
    )
}

export default Faqs;