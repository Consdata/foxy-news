import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {App} from './app';
import {AppState} from './app-state';
import {authenticationReducer} from './authentication/authentication-reducer';
import './index.scss';
import {Injector} from './injector/injector';

const injector = Injector.injector;
const rootReducer = combineReducers<AppState>({
  authentication: authenticationReducer(injector)
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

console.log(store.getState().authentication);
store.dispatch({
  type: 'test',
  user: 'Grzegorz'
});
console.log(store.getState().authentication);

ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
);
