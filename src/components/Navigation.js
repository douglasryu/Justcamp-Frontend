import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { openModal } from "../actions/modalActions";

const Navigation = props => {
    return (
        <BrowserRouter>
            <nav className="nav-container">
                <Link exact to="/" className="nav__logo">JUSTC<img src={require("../assets/app_logos/logoblack.svg")} className="nav__icon" />MP</Link>
                <Link to="/discover" className="nav__item">Near me</Link>
                <Link to="/about" className="nav__item">About</Link>
                <Link to="/invite" className="nav__item">Earn Jumpcash</Link>
                <button onClick={() => props.openModal("login")} className="nav__item">Log in</button>
                <button onClick={() => props.openModal("signup")} className="nav__item">Sign up</button>
                <button className="nav__host">Start hosting</button>
            </nav>
            {/* <Switch>
                <Route path="/discover" />
            </Switch> */}
        </BrowserRouter>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Navigation
);
