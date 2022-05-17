import React from "react";
import './hero.scss'
import MyButton from '../button/button'
import { Container } from "react-bootstrap";

const Hero = () => {
    return (
        <>
            <section className="hero" id="hero"> 
                <Container>
                    <div className="hero_text">
                        <h6 className="text-light fw-light text-uppercase">Hair dressing, makeup, nails</h6>

                        <h1 className="text-white mt-3">Beauty Salon <br/> Abuja City</h1>

                        <div className="mt-3">
                            <MyButton
                                color={"success"}
                                text={"Book online"}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero;