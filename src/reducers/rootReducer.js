import { combineReducers } from "redux";
import sessionReducer from "../reducers/sessionReducer";
import modalReducer from "../reducers/modalReducer";
import campReducer from "../reducers/campReducer";
import tripReducer from "../reducers/tripReducer";


const rootReducer = combineReducers({
    session: sessionReducer,
    modal: modalReducer,
    camps: campReducer,
    trips: tripReducer
});

export default rootReducer;
