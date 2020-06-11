import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    const [inputValue, setInputValue] = useState("");

    const updateInputValue = event => {
        setInputValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="header__container">
            <div className="header__maintext">Find yourself outside.</div>
            <div className="header__subtext">Book unique camping experiences on over <strong>300,000</strong> campsites, cabins, RV parks, public parks and more.</div>
            <form onSubmit={handleSubmit} className="header__form">
                <SearchIcon className="header__search-icon" style={{ fontSize: 30 }} />
                <input type="search" value={inputValue} onChange={updateInputValue} className="header__input" placeholder="Try Yosemite, Napa, Moab..."></input>
                <select className="header__select">
                    <option>All camping</option>
                    <option>Camping</option>
                    <option>Glamping</option>
                    <option>RVs</option>
                </select>
                <button className="header__form-button">Search</button>
            </form>
        </div>
    );
};

export default Header;
