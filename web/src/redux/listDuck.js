import axios from "axios";

//1. Constants
const INITIAL_STATE = {
    list: null,
    loading: false
};

const URL_BASE = 'https://random-app-dairon.herokuapp.com';
const GET_LIST = 'GET_LIST';
const GENERATE_LIST = 'GENERATE_LIST';

//2. Reducers
export default function listReducer(state = INITIAL_STATE, action) {
        switch (action.type) {
        case GET_LIST:
            return {...state, list: action.payload};
        case GENERATE_LIST:
            return {...state, list: [action.payload]};
        default:
            return state;
    }
}


//3. Actions

export const getList = () => async (dispatch) => {
    try {
        const response = await axios.get(`${URL_BASE}/random`);
        dispatch({
            type: GET_LIST,
            payload: response.data
        });
    } catch (e) {
        console.error(e);
    }
}

export const generateList = (lista) => async (dispatch) => {
    try {
        let body = {
            list: lista
        }
        const response = await axios.post(`${URL_BASE}/random`, body);
        dispatch({
            type: GENERATE_LIST,
            payload: response.data
        })
    } catch (e) {
        console.error(e);
    }
}
