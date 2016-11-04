import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../reducers/todos';

function* load(action) {
  console.log(action);
}

function* watchLoad() {
  yield* takeLatest(LOAD, load);
}

export default function* watchTodos() {
  yield [
    fork(watchLoad),
  ]
}
