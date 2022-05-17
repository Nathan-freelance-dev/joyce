import React from "react";
import './layout.scss'
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from '../components/about/about'

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
        </>
    )
}

export default Layout;