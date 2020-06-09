import { combineReducers } from "redux";
import sessionReducer from '../reducers/sessionReducer';


const rootReducer = combineReducers({
    session: sessionReducer,
    // campData,
});

export default rootReducer;
