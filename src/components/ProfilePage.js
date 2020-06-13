import React, { useEffect } from "react";

import ProfileHeader from "./ProfileHeader";
import Footer from "./Footer";

const ProfilePage = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <ProfileHeader {...props} />
            <Footer />
        </>
    );
}

export default ProfilePage;
