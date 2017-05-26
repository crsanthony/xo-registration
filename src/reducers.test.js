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

  it('should handle a request to open the modal', () => {
    expect(
      reducer({}, {
        type: types.TOGGLE_MODAL
      })
    ).toEqual(
      {
        modalOpen: true
      }
    )
  });

  it('should handle a successfull form submission', () => {
    expect(
      reducer({}, {
        type: types.SUBMIT_FORM,
        data: {}
      })
    ).toEqual(
      {
        registered: true
      }
    )
  })
});
