import { baseUrl } from "../config";

export const MAKE_RESERVATION = "justcamp/trips/MAKE_RESERVATION";

const bookReservation = () => ({ type: MAKE_RESERVATION });

export const makeReservation = (user_id, campsite_id, start_date, end_date, totalCost) => async (dispatch) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, campsite_id, start_date, end_date, totalCost })
    };

    const response = await fetch(`${baseUrl}/reservations`, options);

    if (response.ok) {
        dispatch(bookReservation());
    }
}
