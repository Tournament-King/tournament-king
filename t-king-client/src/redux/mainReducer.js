import axios from 'axios';

const initialState = {
    currentUser: null,
    userChecked: false,
    userUpdated: false,
    tournamentList: null,
    tournamentData: {name: 'loading', description: '--', id: null, rounds: [[],[],[]]},
    activeMatch: null,
    modalActive: false
}

//----------------------FLAGS---------------------//

//USER

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_PENDING = 'GET_CURRENT_USER_PENDING';
const GET_CURRENT_USER_FULFILLED = 'GET_CURRENT_USER_FULFILLED';
const GET_CURRENT_USER_REJECTED = 'GET_CURRENT_USER_REJECTED';

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED';
const UPDATE_USER_REJECTED = 'UPDATE_USER_REJECTED';


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

const ADVANCE_WINNER = 'ADVANCE_WINNER';

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

export function updateUser(body) {
    return {
        type: UPDATE_USER,
        payload: axios.patch('/api/user', body)
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

export function joinRoom(id) {
  return {
    type: 'server/room',
    data: id
  }
}

export function leaveRoom(id) {
  return {
    type: 'server/leave room',
    data: id
  }
}



//MATCHES

export function updateMatchEmit(match) {
    return {
        type: 'server/update match',
        data: match
    }
}

export function setWinner(data) {
    return {
        type: 'server/set winner',
        data: data
    }
}


export function getMatchById(match_id) {
    return {
        type: GET_MATCH_BY_ID,
        payload: axios.get(`/api/match/${match_id}`)
    }
}

export function updateMatch(update) {
    return {
        type: 'UPDATE MATCH',
        payload: update
    }
}

export function advanceWinner(body) {
    return {
        type: ADVANCE_WINNER,
        payload: body
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
        case UPDATE_USER_PENDING:
            return state;
        case UPDATE_USER_FULFILLED:
            return Object.assign(
                {},
                state,
                {userUpdated: true}
            );
        case UPDATE_USER_REJECTED:
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
            return Object.assign(
                {},
                state,
                {tournamentList: action.payload.data}
            );
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

        case 'UPDATE MATCH':
          let match = action.payload;
          let newTourn = Object.assign({}, state.tournamentData)
          let roundIdx = null;
          let matchIdx = null;
          for (var i=0; i<newTourn.rounds.length; i++) {
            for (var j=0; j<newTourn.rounds[i].length; j++) {
              let testMatch = newTourn.rounds[i][j]
              if (testMatch.id === match.id) {
                roundIdx = i;
                matchIdx = j;
                break;
              }
            }
            if (matchIdx !== null) {
              break;
            }
          }
          newTourn.rounds[roundIdx].splice(matchIdx, 1, action.payload)
          return Object.assign({}, state, { tournamentData: newTourn, activeMatch: action.payload })

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
