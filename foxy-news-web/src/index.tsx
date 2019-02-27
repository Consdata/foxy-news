import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {App} from './app';
import {AppStateInitial} from './app-state/app-state-initial';
import './index.scss';
import {Injector} from './injector/injector';
import {multiReducer} from './redux/multi-reducer';
import {addLinkReducer} from './store/add-link.reducer';
import {authenticationReducer} from './store/authentication.reducer';
import {newsletterDraftReducer} from './store/newsletter-draft.reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  multiReducer(
    AppStateInitial,
    [
      authenticationReducer(Injector.injector),
      newsletterDraftReducer(Injector.injector),
      addLinkReducer(Injector.injector),
    ]
  ),
  applyMiddleware(
    sagaMiddleware,
    store => next => action => {
      console.log(`action [${JSON.stringify(action)}]`);
      return next(action);
    }
  )
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('foxy-news')
);
