import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'; //will help when action dispatch

import allReducers from './reducer';

const store=createStore(allReducers,{},applyMiddleware(thunk))

export default store;