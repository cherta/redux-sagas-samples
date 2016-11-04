import { takeLatest, takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import { fetch, update } from '../services';
import {
  LOAD, LOAD_SUCCESS, LOAD_FAIL,
  COMPLETE, COMPLETE_SUCCESS, COMPLETE_FAIL,
} from '../reducers/todos';

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

function* complete(action) {
  const result = yield update(`/todos?id=${action.id}`);
  yield put({
    type: COMPLETE_SUCCESS,
    item: result,
  })
}

function* watchLoad() {
  yield* takeLatest(LOAD, load);
  // yield* takeLatest(LOAD, smartLoad);
}

function* watchComplete() {
  yield* takeEvery(COMPLETE, complete);
}

export default function* watchTodos() {
  yield [
    fork(watchLoad),
    fork(watchComplete),
  ]
}
