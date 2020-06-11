import React from "react";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Camplist from "./components/Camplist";
import About from "./components/About";
import Press from "./components/Press";
import Footer from "./components/Footer";

const App = () => (
    <>
        <Modal />
        <Navigation />
        <Header />
        <Camplist />
        <About />
        <Press />
        <Footer />
    </>
);

export default App;
