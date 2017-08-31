import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './mainReducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer,
    applyMiddleware(
        promiseMiddleware(),
        logger
    )
)
