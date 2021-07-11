import counterReducer from "./counter";
import { combineReducers } from "redux";

const allreducers = combineReducers({
    counter: counterReducer,
});

export default allreducers;
