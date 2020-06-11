import React from "react";

import Header from "./Header";
import Camplist from "./Camplist";
import About from "./About";
import Press from "./Press";
import Footer from "./Footer";

const Mainpage = () => {
    return (
        <>
            <Header />
            <Camplist />
            <About />
            <Press />
            <Footer />
        </>
    );
}

export default Mainpage;
