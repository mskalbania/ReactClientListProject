import axios from 'axios';

export const FETCH_CLIENTS_PENDING = "FETCH_CLIENTS_PENDING";
export const FETCH_CLIENTS_OK = "FETCH_CLIENTS_OK";
export const FETCH_CLIENTS_ERR = "FETCH_CLIENTS_ERR";
export const ADD_CLIENT = "ADD_CLIENT";

const ROOT_URL = 'https://shrouded-cliffs-76885.herokuapp.com/api';

export function clientsLoadError(status) {
    return {
        type: FETCH_CLIENTS_ERR,
        error: status
    }
}

export function clientsLoadPending() {
    return {
        type: FETCH_CLIENTS_PENDING,
    }
}

export function clientsLoadSuccess(clients) {
    return {
        type: FETCH_CLIENTS_OK,
        payload: clients
    }
}

export function fetchAll() {
    return fetch(`${ROOT_URL}/all`);
}


export function fetchAllByRegex(regex) {
    return fetch(`${ROOT_URL}/all/${regex}`);
}

export function postNew(props) {
    const request = axios.post(`${ROOT_URL}/add`, props);
    return {
        type: ADD_CLIENT,
        payload: request
    }
}

function fetch(url) {
    return (dispatch) => {
        dispatch(clientsLoadPending());

        axios.get(url)
            .then((response) => {
                dispatch(clientsLoadSuccess(response));
            })
            .catch((error) => {
                dispatch(clientsLoadError(error.response.status))
            });
    }
}