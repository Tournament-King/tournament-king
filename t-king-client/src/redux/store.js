import {createStore, applyMiddleware} from 'redux';
import io from 'socket.io-client';
import logger from 'redux-logger';
import createSocketIoMiddleware from 'redux-socket.io';
import reducer from './mainReducer';
import promiseMiddleware from 'redux-promise-middleware';

const socket = io();

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

var store;

if (process.env.NODE_ENV === "development") {
    store = createStore(reducer,
        applyMiddleware(
            promiseMiddleware(),
            socketIoMiddleware,
            logger
        )
    )
} else {
    store = createStore(reducer,
        applyMiddleware(
            promiseMiddleware(),
            socketIoMiddleware
        )
    )
}

export default store;
