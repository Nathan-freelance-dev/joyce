import React from "react";
import { Container } from "react-bootstrap";
import MyButton from "../button/button";
import './bookOnline.scss'

const BookingOnline = () => {
    return (
        <>
            <section className="book_online text-center">
                <Container>
                    <h6 className="badge text-white">
                        EASY 3 STEPS ONLINE BOOKING
                    </h6>

                    <h1 className="text-light fw-bold mt-3 mb-3">
                        Ready to get new look?
                    </h1>

                    <MyButton 
                        color="success"
                        text="Book online"
                    />
                </Container>
            </section>
        </>
    )
}

export default BookingOnline;