import React, { useEffect } from "react";
import { connect } from "react-redux";

import ReviewHeader from "./ReviewHeader";
import Footer from "./Footer";


const ReviewPage = props => {
    const userId = props.userId || window.localStorage.getItem("USER_ID");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <ReviewHeader {...props} />
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    return {
        userId: state.session.id
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchReservation: (userId) => dispatch(fetchReservation(userId)),
//         fetchReview: (userId) => dispatch(fetchReview(userId)),
//     };
// };

export default connect(
    mapStateToProps,
    null
)(
    ReviewPage
);


// export default ProfilePage;
