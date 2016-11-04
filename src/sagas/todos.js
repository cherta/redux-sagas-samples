import { takeLatest, delay } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import { fetch } from '../services';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../reducers/todos';

function* load(action) {
  const todos = yield fetch(`/todos?status=${action.filter}`);

  yield put({
    type: LOAD_SUCCESS,
    items: todos,
  })

}

function* smartLoad(action) {
  const isEverythingLoaded = yield select((state) =>
    Object.keys(state.todos.complete).length > 0 &&
    Object.keys(state.todos.incomplete).length > 0
  );
  if (isEverythingLoaded) return;

  const todos = yield fetch(`/todos?status=${action.filter}`);

  yield put({
    type: LOAD_SUCCESS,
    items: todos,
  });

}

function* watchLoad() {
  yield* takeLatest(LOAD, load);
  // yield* takeLatest(LOAD, smartLoad);
}

export default function* watchTodos() {
  yield [
    fork(watchLoad),
  ]
}
