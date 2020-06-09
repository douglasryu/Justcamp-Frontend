import { combineReducers } from "redux";
import sessionReducer from "../reducers/sessionReducer";
import campReducer from "../reducers/campReducer";


const rootReducer = combineReducers({
    session: sessionReducer,
    camps: campReducer,
});

export default rootReducer;
