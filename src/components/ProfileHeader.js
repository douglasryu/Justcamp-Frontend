import React, { useEffect } from "react";

const ProfileHeader = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    return (
        <>
            <div className="profile__left">
                <div className="profile__userinfo-container">
                    <div className="profile__userinfo-picname">
                        <img className="profile__pic" src={require("../assets/app_logos/logoblack.svg")} alt="profile-logo" />
                        <div className="profile__name">Douglas R.</div>
                    </div>
                    <div className="profile__userinfo-since"><span role="img" aria-label="love">❤️</span> Justcamper since 2020</div>
                    <div className="profile__userinfo-from"><img className="profile__userinfo-from-icon" src={require("../assets/camp_icons/from.png")} alt="profile-from" /> Where are you from?</div>
                    <div className="profile__userinfo-bio"><span className="profile__userinfo-intro">Intro:</span> Introduce yourself to the community! Add a short bio...</div>
                </div>
                <div className="profile__trusted">
                    <div className="profile__trusted-header">Trusted Justcamper</div>
                    <div className="profile__trusted-email"><img className="profile__trusted-icon" src={require("../assets/camp_icons/check.png")} alt="profile-trusted" /> Email address</div>
                    <div className="profile__trusted-fbconnect">
                        <div className="profile__trusted-fb">facebook</div>
                        <div className="profile__trusted-connect">+Connect</div>
                    </div>
                </div>
            </div>
            <div className="profile__right">
                <div className="profile__tripreview-container">
                    <div className="profile__trip">
                        <div className="profile__trip-num">7</div>
                        <div className="profile__trip-text">Trips</div>
                    </div>
                    <div className="profile__review">
                        <div className="profile__review-num">2</div>
                        <div className="profile__review-text">Reviews</div>
                    </div>
                </div>
                <div className="profile__item-container">

                </div>
            </div>
        </>
    )
}

export default ProfileHeader;
