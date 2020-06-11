import React, { useState } from "react";
import { connect } from "react-redux";

import { createUser } from "../actions/sessionActions";
import { closeModal } from "../actions/modalActions";

const Signup = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState("");

    const updateFirstName = (event) => setFirstName(event.target.value);
    const updateLastName = (event) => setLastName(event.target.value);
    const updateEmail = (event) => setEmail(event.target.value);
    const updatePassword = (event) => setPassword(event.target.value);
    const updateZipcode = (event) => setZipcode(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.createUser(firstName, lastName, email, password, zipcode);
        props.closeModal();
    };

    return (
        <>
            <div className="modal__header">Join Justcamp</div>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="form__input-name-container">
                    <input type="text" onChange={updateFirstName} value={firstName} className="form__input-firstname" placeholder="First name" />
                    <input type="text" onChange={updateLastName} value={lastName} className="form__input-lastname" placeholder="Last name" />
                </div>
                <input type="email" onChange={updateEmail} value={email} className="form__input" placeholder="Email address" />
                <input onChange={updatePassword} value={password} className="form__input" placeholder="Create a password" />
                <input type="number" onChange={updateZipcode} value={zipcode} className="form__input" placeholder="Zip code" />
                <button className="form__button">Join Justcamp</button>
            </form>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (firstName, lastName, email, password, zipcode) => dispatch(createUser(firstName, lastName, email, password, zipcode)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Signup
);
