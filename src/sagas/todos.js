import { takeLatest, delay } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { fetch } from '../services';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../reducers/todos';

function* load(action) {
  yield delay(1000);

  const todos = yield fetch(`/todos?status=${action.filter}`);

  yield put({
    type: LOAD_SUCCESS,
    items: todos,
  })

}

function* watchLoad() {
  yield* takeLatest(LOAD, load);
}

export default function* watchTodos() {
  yield [
    fork(watchLoad),
  ]
}
