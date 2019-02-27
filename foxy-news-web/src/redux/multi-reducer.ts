import {Action} from 'redux';

export function multiReducer<S>(initialState: S, reducers: ((state: S, action: Action) => S)[]) {
  return (state: S = initialState, action: Action): S =>
    reducers.reduce((state, reducer) => reducer(state, action), state);
}
