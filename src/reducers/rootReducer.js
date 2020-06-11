import { combineReducers } from "redux";
import sessionReducer from "../reducers/sessionReducer";
import modalReducer from "../reducers/modalReducer";
import campReducer from "../reducers/campReducer";


const rootReducer = combineReducers({
    session: sessionReducer,
    modal: modalReducer,
    camps: campReducer,
});

export default rootReducer;
