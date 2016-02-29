import * as types from '../constants/actionTypes';
import request from 'superagent';

/* Actions to toggle text*/
export function testToggle(toggleState) {
  return {
    type: types.TEST_TOGGLE,
    payload: {
      testToggle: toggleState,
    },
  };
}

export function requestTestText() {
  return {
    type: types.REQUEST_TEST_TEXT,
    payload: {},
  };
}

export function receiveTestText(text) {
  return {
    type: types.RECEIVE_TEST_TEXT,
    payload: {
      testText: text,
    },
  };
}

export function requestTestTextFailed() {
  return {
    type: types.REQUEST_TEST_TEXT_FAILED,
    payload: {},
  };
}

export function fetchTestText() {
  return dispatch => {
    dispatch(requestTestText);

    request
      .get('/api/testGet')
      .end((err, res) => {
        if (err) {
          console.log(err);
          dispatch(requestTestTextFailed())
        } else {
          dispatch(receiveTestText(res.body.text))
        }
      })
  }
}
