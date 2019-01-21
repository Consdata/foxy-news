import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './app';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'
import {AppState} from './app-state';
import createSagaMiddleware from 'redux-saga'
import {Injector} from './injector';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers<AppState>({
  authentication: Injector.injector.authenticationReducer.reducer()
});
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
);
