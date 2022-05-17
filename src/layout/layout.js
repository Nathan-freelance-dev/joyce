import React from "react";
import './layout.scss'
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from '../components/about/about'
import Service from "../components/services/service";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Service />
        </>
    )
}

export default Layout;