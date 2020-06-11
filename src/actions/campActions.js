import { baseUrl } from '../config';

export const LOAD_CAMPS = "justcamp/campData/LOAD_CAMPS";
export const LOAD_CAMP = "justcamp/campData/LOAD_CAMP";

const loadCamps = camps => ({ type: LOAD_CAMPS, camps });
const loadCamp = camp => ({ type: LOAD_CAMP, camp });

export const fetchCamps = () => async (dispatch) => {
    const token = window.localStorage.getItem("justcamp/authentication/token");
    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await fetch(`${baseUrl}/camps`, options);

    if (response.ok) {
        const camps = await response.json();
        dispatch(loadCamps(camps));
    }
}

export const fetchCamp = (campId) => async (dispatch) => {
    const token = window.localStorage.getItem("justcamp/authentication/token");
    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await fetch(`${baseUrl}/camps/${campId}`, options);

    if (response.ok) {
        const camp = await response.json();
        dispatch(loadCamp(camp));
    }
}
