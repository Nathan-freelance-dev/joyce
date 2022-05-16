import React from "react";
import './layout.scss'
import Header from "../components/header/header";
import MyNavbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";

const Layout = () => {
    return (
        <>
            <Header />
            <MyNavbar />
            <Hero />
        </>
    )
}

export default Layout;