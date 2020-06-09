import { SET_TOKEN, REMOVE_TOKEN } from "../actions/sessionActions";

const initialState = {
    id: null,
    token: null
}

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case SET_TOKEN:
            return Object.assign(nextState, { token: action.token })
        case REMOVE_TOKEN:
            return initialState;
        default:
            return state;
    }
}

export default sessionReducer;
