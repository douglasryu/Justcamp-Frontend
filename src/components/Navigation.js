import React from 'react';
import { BrowserRouter, Route, NavLink, Link, Switch } from "react-router-dom";
// import App from "../App";

const Navigation = () => (
    <BrowserRouter>
        <nav className="nav-container">
            <Link exact to="/" className="nav__logo">JUSTCAMP</Link>
            <NavLink to="/discover" className="nav__item">Near me</NavLink>
            <NavLink to="/login" className="nav__item">About</NavLink>
            <NavLink to="/invite" className="nav__item">Earn Jumpcash</NavLink>
            <button to="/login" className="nav__item">Log in</button>
            <button to="/signup" className="nav__item">Sign up</button>
            <button to="/host" className="nav__host">Start hosting</button>
        </nav>
        {/* <Switch>
            <Route path="/discover" />
        </Switch> */}
    </BrowserRouter>
);

export default Navigation;
