import axios from 'axios';

const FETCH_CLIENTS = 'FETCH_CLIENTS';
const ROOT_URL = 'https://shrouded-cliffs-76885.herokuapp.com/api';


export function fetchClients() {
    const request = axios.get(`${ROOT_URL}/all`);

    return {
        type: FETCH_CLIENTS,
        payload: request
    }
}