import reducer from './reducers'
import * as types from './constants/ActionTypes'

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        modalOpen: false,
        registered: false
      }
    )
  });
});
