import React, { useEffect } from "react";

import { store } from "../index";
import { connect } from "react-redux";

const CampDetailHeader = props => {
    console.log(props);
    // let campDetailObj;
    const campId = parseInt(props.match.params.campId, 10);
    // console.log(campId);

    // let campDetailObj;
    // useEffect(() => {
    // (async () => {
    const campDetailObj = props.campsList[campId];
    // console.log(campDetailObj);
    // })();
    // });
    // console.log(props.campsList);
    // console.log(campDetailObj);
    // console.log(campDetailObj);
    // console.log(store.getState());

    const tentIconUrl = "../assets/camp_icons/tent.png";
    // console.log(props.campsList[campId].campfire);

    const campfireText = props.campsList[campId].campfire ? "Campfires allowed" : "No campfire";
    const toiletText = props.campsList[campId].toilet ? "Toilet availabe" : "No toilet";
    const petText = props.campsList[campId].pet ? "Pets allowed" : "No pets";
    const waterText = props.campsList[campId].water ? "Portable water available" : "No portable water";
    const kitchentext = props.campsList[campId].kitchen ? "Kitchen available" : "No kitchen";
    const picnicText = props.campsList[campId].picnic ? "Picnic table availabe" : "No picnic table";
    const showerText = props.campsList[campId].shower ? "Showers available" : "No showers";
    const binText = props.campsList[campId].trash ? "Bins available" : "No bins";
    const wifiText = props.campsList[campId].wifi ? "Wifi available" : "No wifi";


    return (
        <>
            <div className="booking__form-container">
                <form className="booking__form">
                    <div className="booking__form-price">${campDetailObj.price}</div>
                    <div className="booking__pernight">per night</div>
                    <div className="booking__logistics">
                        <div className="booking__form-checkin">Check in
                            <input className="booking__form-checkin-input" type="date" placeholder="Select date" />
                        </div>
                        <div className="booking__form-checkout">Check out
                            <input className="booking__form-checkout-input" type="date" placeholder="Select date" />
                        </div>
                        <div className="booking__form-guest">Guests
                            <input className="booking__form-guest-input" type="number" placeholder="0" />
                        </div>
                    </div>
                    <div className="booking__form-subtotal-container">
                        <div className="booking__form-subtotal">Subtotal</div>
                        <div className="booking__form-subtotal-value">$70</div>
                    </div>
                    <button type="submit" className="booking__form-button">Instant book</button>
                </form>
            </div>
            <div className="camp-header__container">
                <div className="previous">❮</div>
                <div className="camp-header__image-container">
                    <img className="camp-header__image" src={require("../assets/1.jpg")} />
                    <img className="camp-header__image" src={require("../assets/2.jpg")} />
                    <img className="camp-header__image" src={require("../assets/3.jpg")} />
                </div>
                <div className="next">❯</div>
                <div className="camp-header__header">{campDetailObj.campName}</div>
                <div className="camp-header__host-details">
                    <img className="camp-header__host-image" src={require("../assets/app_logos/logoblack.svg")} />
                    <div className="camp-header__hostedby">Hosted by</div>
                    <div className="camp-header__host-name">{campDetailObj.host}</div>
                    <p className="camp-header__details-summary">{campDetailObj.campDescription}</p>
                </div>
            </div>
            <div className="camp-information__container">
                <div className="camparea__container">
                    <div className="camparea__header">Campsite area
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/tent.png")} />
                            <div className="camparea__type">{campDetailObj.campType}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/numsites.png")} />
                            <div className="camparea__type">{campDetailObj.numSites}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/maxcapacity.png")} />
                            <div className="camparea__type">Up to {campDetailObj.maxCapacity} guests per site</div>
                        </div>
                    </div>
                    <div className="camparea__header">Essentials
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/campfire.png")} />
                            <div className="camparea__type">{campfireText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/toilet.png")} />
                            <div className="camparea__type">{toiletText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/pet.png")} />
                            <div className="camparea__type">{petText}</div>
                        </div>
                    </div>
                    <div className="camparea__header">Amenities
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/water.png")} />
                            <div className="camparea__type">{waterText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/kitchen.png")} />
                            <div className="camparea__type">{kitchentext}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/picnic.png")} />
                            <div className="camparea__type">{picnicText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/shower.png")} />
                            <div className="camparea__type">{showerText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/bin.png")} />
                            <div className="camparea__type">{binText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/wifi.png")} />
                            <div className="camparea__type">{wifiText}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="camp-activities__container">
                <div className="camp-activities__container">
                    <div className="camp-activities__header">Activities</div>
                    <div className="camp-activities__text">Offered on the Host's property or nearby.</div>
                    <div className="camp-activities__icon-container">
                        <div className="camp-activities__icon"></div>
                        <div className="camp-activities__icon-text"></div>
                    </div>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        campsList: state.camps
    }
}

export default connect(
    mapStateToProps,
    null
)(
    CampDetailHeader
);
