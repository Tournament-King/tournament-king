import axios from 'axios';

const initialState = {
    currentUser: null,
    userChecked: false,
    tournamentList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    tournamentData: {name: 'loading', id: null, rounds: [[],[],[]]},
    tRoom: 0,
    activeMatch: null,
    modalActive: false,
    requestCount: 0,
    testProp: 'hello, redux is working'
}

//----------------------FLAGS---------------------//

//USER

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_PENDING = 'GET_CURRENT_USER_PENDING';
const GET_CURRENT_USER_FULFILLED = 'GET_CURRENT_USER_FULFILLED';
const GET_CURRENT_USER_REJECTED = 'GET_CURRENT_USER_REJECTED';

//MODAL

const TOGGLE_MATCH_MODAL = 'TOGGLE_MATCH_MODAL';

//TOURNAMENTS

const GET_TOURNAMENTS = 'GET_TOURNAMENTS';
const GET_TOURNAMENTS_PENDING = 'GET_TOURNAMENTS_PENDING';
const GET_TOURNAMENTS_FULFILLED = 'GET_TOURNAMENTS_FULFILLED';
const GET_TOURNAMENTS_REJECTED = 'GET_TOURNAMENTS_REJECTED';

const GET_TOURNAMENT = 'GET_TOURNAMENT';
const GET_TOURNAMENT_PENDING = 'GET_TOURNAMENT_PENDING';
const GET_TOURNAMENT_FULFILLED = 'GET_TOURNAMENT_FULFILLED';
const GET_TOURNAMENT_REJECTED = 'GET_TOURNAMENT_REJECTED';

//MATCHES

const GET_MATCH_BY_ID = 'GET_MATCH_BY_ID';
const GET_MATCH_BY_ID_PENDING = 'GET_MATCH_BY_ID_PENDING';
const GET_MATCH_BY_ID_FULFILLED = 'GET_MATCH_BY_ID_FULFILLED';
const GET_MATCH_BY_ID_REJECTED = 'GET_MATCH_BY_ID_REJECTED';

const UPDATE_CURRENT_MATCH = 'UPDATE_CURRENT_MATCH';

const SET_ACTIVE_MATCH = 'SET_ACTIVE_MATCH';


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

//TOURNAMENTS

export function loadTournaments() {
    return {
        type: GET_TOURNAMENTS,
        payload: axios.get('/api/tournaments')
    }
}

export function getTournament(id) {
    return {
        type: GET_TOURNAMENT,
        payload: axios.get(`/api/tournament/${id}`)
    }
}

//MATCHES


export function getMatchById(match_id) {
    return {
        type: GET_MATCH_BY_ID,
        payload: axios.get(`/api/match/${match_id}`)
    }
}

export function updateMatch(update) {
    return {
        type: UPDATE_CURRENT_MATCH,
        payload: update
    }
}

export function setActiveMatch(match) {
    return {
        type: SET_ACTIVE_MATCH,
        payload: match
    }
}

//----------------------REDUCER---------------------//


export default function reducer(state=initialState, action) {


    switch (action.type) {

        //USERS


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
            );

        //TOURNAMENTS


        case GET_TOURNAMENTS_PENDING:
            return state;
        case GET_TOURNAMENTS_FULFILLED:
            console.log(action.payload);
            return state;
        case GET_TOURNAMENTS_REJECTED:
            return state;


        case GET_TOURNAMENT_PENDING:
            return state;
        case GET_TOURNAMENT_FULFILLED:
            return Object.assign(
                {},
                state,
                {tournamentData: action.payload.data}
            );
        case GET_TOURNAMENT_REJECTED:
            return state;

        //MATCHES


        case GET_MATCH_BY_ID_PENDING:
            return(state);
        case GET_MATCH_BY_ID_FULFILLED:
            return Object.assign(
                {},
                state,
                {currentMatch: action.payload.data}
            );
        case GET_MATCH_BY_ID_REJECTED:
            return state;


        case UPDATE_CURRENT_MATCH:
            let makeUpdate = (payload) => {
                let {id, round} = payload;
                let newTourn = Object.assign({}, state.tournamentData)
                let match = newTourn.rounds[round].find(m => {
                    return m.id === id
                })
                match.player1_score = payload.player1_score;
                match.player2_score = payload.player2_score;
                return Object.assign(
                    {},
                    state,
                        {tournamentData: newTourn}
                );
            }
            let incrementCount = () => {
                return Object.assign({}, state, {requestCount: ++state.requestCount});
            }
            if (action.payload.tournament) {
                incrementCount();
                return makeUpdate(action.payload);
            } else if (state.requestCount === 0) {
                return makeUpdate(action.payload);
            } else {
                return Object.assign({}, state, {requestCount: --state.requestCount});
            }


        case SET_ACTIVE_MATCH:
            return Object.assign(
                {},
                state,
                {activeMatch: action.payload}
            );


        default:
            return state;
    }
}