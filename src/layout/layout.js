import React from "react";
import './layout.scss'
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from '../components/about/about'
import Service from "../components/services/service";
import Reviews from "../components/testimonials/testi";
import BookingOnline from "../components/bookOnline/onlineBooking";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Service />
            <Reviews />
            <BookingOnline />
        </>
    )
}

export default Layout;