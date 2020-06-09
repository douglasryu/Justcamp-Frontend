import { baseUrl } from '../config';

const LOAD_CAMPS = "justcamp/campData/LOAD_CAMPS";
const LOAD_CAMP = "justcamp/campData/LOAD_CAMP";

const loadCamps = camps => ({ type: LOAD_CAMPS, camps });
const loadCamp = camp => ({ type: LOAD_CAMP, camp });

export const loadCamps = () => async (dispatch) => {
    const response = await fetch(`${baseUrl}/camps`);

    if (response.ok) {
        const camps = await response.json();
        dispatch(loadCamps(camps));
    }
}

export const loadCamp = (campId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/camps/${campId}`);

    if (response.ok) {
        const camp = await response.json();
        dispatch(loadCamp(camp));
    }
}
