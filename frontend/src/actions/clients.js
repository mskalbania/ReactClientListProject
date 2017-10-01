import axios from 'axios';

export const FETCH_CLIENTS = "FETCH_CLIENTS";
const ROOT_URL = 'https://shrouded-cliffs-76885.herokuapp.com/api';


export function fetchAll() {
    const request = axios.get(`${ROOT_URL}/all`);
    return {
        type: FETCH_CLIENTS,
        payload: request
    }
}

export function fetchAllByRegex(regex) {
    const request = axios.get(`${ROOT_URL}/all/${regex}`);
    return{
        type: FETCH_CLIENTS,
        payload: request
    }
}