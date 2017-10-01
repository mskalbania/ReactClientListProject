import {combineReducers} from "redux";
import ClientsReducer from "./clients";

const rootReducer = combineReducers({
    clients: ClientsReducer,
});

export default rootReducer;