import * as actions from '../actions/';
import * as types from '../actionTypes';

describe('actions', () => {
  it('should create an action that fetch failed', () => {
    const expectedAction = { type: types.FAILED_FETCH };
    expect(actions.failedFetch()).toEqual(expectedAction);
  });

  it('should a CLEAR action', () => {
    const expectedAction = { type: types.CLEAR_CART };
    expect(actions.clear()).toEqual(expectedAction);
  });
});
