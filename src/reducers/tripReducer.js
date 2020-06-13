import { MAKE_RESERVATION } from "../actions/tripActions";

const tripReducer = (state, action) => {
    switch (action.type) {
        case MAKE_RESERVATION:
            return state;
        default:
            return state;
    }
};

export default tripReducer;
