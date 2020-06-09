import React from "react";

const About = () => (
    <div className="about__container">
        <div className="section1">
            <img className="about__image" alt="about_image_1" src={require("../assets/s1.svg")} />
            <div className="about__header">Justcamp empowers people to share their ladn with campers.</div>
        </div>
        <div className="section2">
            <img className="about__image" alt="about_image_2" src={require("../assets/s2.svg")} />
            <div className="about__header">Creating sustainable revenue and fostering community.</div>
        </div>
        <div className="section3">
            <img className="about__image" alt="about_image_3" src={require("../assets/s3.svg")} />
            <div className="about__header">Unlocking access to incredible new places to camp.</div>
        </div>
    </div>
);

export default About;
