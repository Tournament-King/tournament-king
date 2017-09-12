import {createStore, applyMiddleware} from 'redux';
import io from 'socket.io-client';
import logger from 'redux-logger';
import createSocketIoMiddleware from 'redux-socket.io';
import reducer from './mainReducer';
import promiseMiddleware from 'redux-promise-middleware';

const socket = io();

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

export default createStore(reducer,
    applyMiddleware(
        promiseMiddleware(),
        socketIoMiddleware,
        logger
    )
)
