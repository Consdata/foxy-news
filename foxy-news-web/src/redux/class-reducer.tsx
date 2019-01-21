import {Reducer} from 'redux';

export abstract class ClassReducer<State> {

  reducer(): Reducer<State> {
    return (state: State = this.initialState(), action: any) => this.reduce(state, action);
  }

  abstract reduce(state: State, action: any): State;

  abstract initialState(): State;

}
