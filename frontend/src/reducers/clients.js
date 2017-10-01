import {FETCH_CLIENTS} from "../actions/clients";

const INITIAL_STATE = {all: [], selected: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CLIENTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}