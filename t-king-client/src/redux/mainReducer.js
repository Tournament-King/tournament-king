import axios from 'axios';
import {tournamentJSON, tournamentJSONnew} from './dummyData/tournamentJSON';

const initialState = {
    currentUser: {},
    userChecked: false,
    tournamentsList: [],
    tournamentData: {},
    testProp: 'hello, redux is working',
    dummyData: tournamentJSON,
    dummyData2: tournamentJSONnew,
    currentMatch: null,
    modalActive: false
}

//----------------------FLAGS---------------------//

//USER

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_PENDING = 'GET_CURRENT_USER_PENDING';
const GET_CURRENT_USER_FULFILLED = 'GET_CURRENT_USER_FULFILLED';
const GET_CURRENT_USER_REJECTED = 'GET_CURRENT_USER_REJECTED';

//MODAL

const TOGGLE_MATCH_MODAL = 'TOGGLE_MATCH_MODAL';

//----------------------ACTIONS---------------------//

//USER

export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER,
        payload: axios.get('/api/user')
    }
}

//MODAL

export function toggleMatchModal() {
    return {
        type: TOGGLE_MATCH_MODAL,
        payload: null
    }
}



export default function reducer(state=initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case GET_CURRENT_USER_PENDING:
            return state;
        case GET_CURRENT_USER_FULFILLED:
            return Object.assign(
                {},
                state,
                {
                    currentUser: action.payload.data,
                    userChecked: true
                }
            );
        case GET_CURRENT_USER_REJECTED:
            return state;
        case TOGGLE_MATCH_MODAL:
            return Object.assign(
                {},
                state,
                {modalActive: !state.modalActive}
            )
        default:
            console.log(state);
            return state;
    }
}