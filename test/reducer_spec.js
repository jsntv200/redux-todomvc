import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        todos: [
          {id: 1, text: 'React',     status: 'active'},
          {id: 2, text: 'Redux',     status: 'active'},
          {id: 3, text: 'Immutable', status: 'completed'},
        ]
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React',     status: 'active'},
        {id: 2, text: 'Redux',     status: 'active'},
        {id: 3, text: 'Immutable', status: 'completed'},
      ]
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        todos: [
          {id: 1, text: 'React',     status: 'active'},
          {id: 2, text: 'Redux',     status: 'active'},
          {id: 3, text: 'Immutable', status: 'completed'},
        ]
      }
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React',     status: 'active'},
        {id: 2, text: 'Redux',     status: 'active'},
        {id: 3, text: 'Immutable', status: 'completed'},
      ]
    }));
  });
});
