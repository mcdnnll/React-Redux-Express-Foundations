import * as types from '../constants/actionTypes';

const initialState = {
  testToggle: false,
};

export default function home(state = initialState, action) {
  switch (action.type) {

    case types.TEST_TOGGLE:
      return Object.assign({}, state, {
        testToggle: action.payload.testToggle,
      });

    case types.REQUEST_TEST_TEXT:
      return Object.assign({}, state, {
        fetchingData: true,
      });

    case types.REQUEST_TEST_TEXT_FAILED:
      return Object.assign({}, state, {
        fetchingData: false,
        loadFailed: true,
      });

    case types.RECEIVE_TEST_TEXT:
      return Object.assign({}, state, {
        fetchingData: false,
        testText: action.payload.testText,
      });

    default:
      return state;
  }
}
