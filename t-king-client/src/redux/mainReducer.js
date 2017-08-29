import axios from 'axios';

const initialState = {
    currentUser: {},
    userChecked: false,
    tournamentsList: [],
    tournamentData: {},
    testProp: 'hello, redux is working'
}

//----------------------FLAGS---------------------//

//USER

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_PENDING = 'GET_CURRENT_USER_PENDING';
const GET_CURRENT_USER_FULFILLED = 'GET_CURRENT_USER_FULFILLED';

//----------------------ACTIONS---------------------//

//USER

export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER,
        payload: axios.get('/api/user')
    }
}



export default function reducer(state=initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case GET_CURRENT_USER_PENDING:
            console.log('pending')
            return state;
        case GET_CURRENT_USER_FULFILLED:
            console.log(action.payload)
            return Object.assign(
                {},
                state,
                {
                    currentUser: action.payload.data,
                    userChecked: true
                }
            )
        default:
            return state;
    }
}