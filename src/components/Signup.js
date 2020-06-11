import React from "react";

const Signup = () => {
    const handleSubmit = event => {
        event.preventDefault();
        console.log("success");
    };

    return (
        <>
            <div className="modal__header">Join Justcamp</div>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="form__input-name-container">
                    <input type="text" className="form__input-firstname" placeholder="First name" />
                    <input type="text" className="form__input-lastname" placeholder="Last name" />
                </div>
                <input type="email" className="form__input" placeholder="Email address" />
                <input className="form__input" placeholder="Create a password" />
                <input type="number" className="form__input" placeholder="Zip code" />
                <button className="form__button">Join Justcamp</button>
            </form>
        </>
    );
}

export default Signup;
