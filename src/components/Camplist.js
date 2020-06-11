import React, { useEffect } from "react";
import { connect } from "react-redux";
import Campcard from "./Campcard";

const Camplist = props => {
    const list = props.campsList;
    console.log(list);

    // const list = props.campsList;
    // list.forEach(listitem => console.log(listitem));
    // const list = props.campsList[campSites];
    // console.log(list);

    return (
        <div className="camplist">
            {/* {list.campSites.map(site => {
                return (
                    <div>{site.name}</div>
                );
            })} */}
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
            <Campcard />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        campsList: state.camps.list
    }
}

export default connect(
    mapStateToProps,
    null
)(
    Camplist
);
