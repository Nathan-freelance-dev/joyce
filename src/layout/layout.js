import React from "react";
import './layout.scss'
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from '../components/about/about'
import Service from "../components/services/service";
import Reviews from "../components/testimonials/testi";
import BookingOnline from "../components/bookOnline/onlineBooking";
import Work from "../components/work/work";
import Faqs from "../components/faq/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Service />
            <Reviews />
            <BookingOnline />
            <Work />
            <Faqs />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout;