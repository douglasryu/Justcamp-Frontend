import { LOAD_CAMPS } from "../actions/campActions";

const campReducer = (state = {}, action) => {
    // Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_CAMPS:
            let newState = {};
            action.list.campSites.forEach(camp => newState[camp.id] = camp)
            return Object.assign(nextState, newState);
        // case LOAD_CAMP:
        //     // return Object.assign(nextState, { [action.camp.id]: action.camp });
        //     return {
        //         ...state,
        //         list: action.list
        //     }
        default:
            return state;
    }
};

export default campReducer;
