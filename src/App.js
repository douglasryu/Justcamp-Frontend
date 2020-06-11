import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Camplist from "./components/Camplist";
import About from "./components/About";
import Press from "./components/Press";
import Footer from "./components/Footer";

import { loadToken } from "./actions/sessionActions";
import { fetchCamps } from "./actions/campActions";

const App = props => {
    useEffect(async () => {
        await props.loadToken();
    });

    useEffect(async () => {
        await props.fetchCamps();
    });

    return (
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
};


const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
        fetchCamps: () => dispatch(fetchCamps())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    App
);
