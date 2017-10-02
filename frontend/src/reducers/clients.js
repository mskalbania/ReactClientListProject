import {FETCH_CLIENTS_OK} from "../actions/clients";
import {FETCH_CLIENTS_ERR} from "../actions/clients";


const INITIAL_STATE = {all: [], selected: null, err: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CLIENTS_OK:
            return {...state, all: action.payload.data, err: null};
        case FETCH_CLIENTS_ERR:
            return {...state, err: action.error};
        default:
            return state;
    }
}