import { baseUrl } from '../config';

export const LOAD_CAMPS = "justcamp/campData/LOAD_CAMPS";
export const LOAD_CAMP = "justcamp/campData/LOAD_CAMP";

const loadCamps = camps => ({ type: LOAD_CAMPS, camps });
const loadCamp = camp => ({ type: LOAD_CAMP, camp });

export const fetchCamps = () => async (dispatch) => {
    const response = await fetch(`${baseUrl}/camps`);

    if (response.ok) {
        const camps = await response.json();
        dispatch(loadCamps(camps));
    }
}

export const fetchCamp = (campId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/camps/${campId}`);

    if (response.ok) {
        const camp = await response.json();
        dispatch(loadCamp(camp));
    }
}
