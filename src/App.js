import React, { useEffect } from "react";
import { connect } from "react-redux";
import Mainpage from "./components/Mainpage";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";

import { loadToken } from "./actions/sessionActions";
import { fetchCamps } from "./actions/campActions";
import { BrowserRouter, Route } from "react-router-dom";
import CampDetailPage from "./components/CampDetailPage";
import ProfilePage from "./components/ProfilePage";

const App = props => {
    useEffect(() => {
        props.loadToken();
    });

    useEffect(() => {
        (async () => {
            await props.fetchCamps();
        })();
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <BrowserRouter>
            <Modal />
            <Navigation />
            <Route exact path="/" component={Mainpage} />
            <Route path="/camps/:campId" component={CampDetailPage} />
            <Route path="/profile" component={ProfilePage} />
        </BrowserRouter>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
        fetchCamps: () => dispatch(fetchCamps()),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(
    App
);
