import React from "react";

const Campcard = () => (
    <article className="campentry">
        <div className="campentry__photo-container">
            <img src={require("../assets/2.jpg")} className="campentry__photo" />
        </div>
        <div className="campentry__text-contianer">
            <div className="campentry__text-header">Sky Ranch North Shelter</div>
            <div className="campentry__text">Sky Ranch Terlingua</div>
            <div className="campentry__price">$30/night</div>
        </div>
    </article>
);

export default Campcard;
