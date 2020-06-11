import React from "react";

const Signin = () => {
    const handleSubmit = event => {
        event.preventDefault();
        console.log("success");
    };

    return (
        <>
            <div className="modal__header">Welcome back!</div>
            <form className="form__container" onSubmit={handleSubmit}>
                <input type="email" className="form__input" placeholder="Email address" />
                <input type="password" className="form__input" placeholder="Password" />
                <button className="form__button">Log In</button>
            </form>
        </>
    );
}

export default Signin;
