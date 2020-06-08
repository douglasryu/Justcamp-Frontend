import React from 'react';
import { NavLink, Link, Switch } from "react-router-dom";

const Navigation = () => (
    <>
        <nav className="nav-container">
            <Link exact to="/" className="nav__logo">JUSTCAMP</Link>
            <NavLink to="/discover" className="nav__item">Near me</NavLink>
            <NavLink to="/login" className="nav__item">About</NavLink>
            <NavLink to="/invite" className="nav__item">Earn Jumpcash</NavLink>
            <button to="/login" className="nav__item">Log in</button>
            <button to="/signup" className="nav__item">Sign up</button>
            <NavLink to="/host" className="nav__item nav__host">Start hosting</NavLink>
        </nav>
    </>
);

export default Navigation;
