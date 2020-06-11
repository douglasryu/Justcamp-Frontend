import { LOAD_CAMPS, LOAD_CAMP } from "../actions/campActions";

const campReducer = (state = {}, action) => {
    // Object.freeze(state);

    // let nextState = Object.assign([], state);

    switch (action.type) {
        case LOAD_CAMPS:
            // let newState = [];
            // action.camps.forEach(camp => newState[camp.id] = camp)
            // return Object.assign(nextState, newState);
            return {
                ...state,
                list: action.list
            }
        case LOAD_CAMP:
            // return Object.assign(nextState, { [action.camp.id]: action.camp });
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
    }
};

export default campReducer;
