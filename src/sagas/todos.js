import { takeLatest, takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import { fetch, update } from '../services';
import {
  LOAD, LOAD_SUCCESS, LOAD_FAIL,
  COMPLETE, COMPLETE_SUCCESS, COMPLETE_FAIL,
} from '../reducers/todos';

function* load(action) { // eslint-disable-line no-unused-vars
  const todos = yield fetch(`/todos?status=${action.filter}`);

  try {
    yield put({ type: LOAD_SUCCESS, items: todos })
  }
  catch (e) {
    if (e instanceof Error) throw e;
    yield put({ ...action, type: LOAD_FAIL, error: e.resource });
  }
}

function* smartLoad(action) { // eslint-disable-line no-unused-vars
  const isEverythingLoaded = yield select((state) =>
    Object.keys(state.todos.complete).length > 0 &&
    Object.keys(state.todos.incomplete).length > 0
  );
  if (isEverythingLoaded) return;

  const todos = yield fetch(`/todos?status=${action.filter}`);

  try {
    yield put({ type: LOAD_SUCCESS, items: todos });
  }
  catch (e) {
    if (e instanceof Error) throw e;
    yield put({ ...action, type: LOAD_FAIL, error: e.resource });
  }
}

function* complete(action) {
  const result = yield update(`/todos?id=${action.id}`);
  try {
    yield put({ type: COMPLETE_SUCCESS, item: result })
  }
  catch (e) {
    if (e instanceof Error) throw e;
    yield put({ ...action, type: COMPLETE_FAIL, error: e.resource });
  }
}

function* watchLoad() {
  // yield* takeLatest(LOAD, load);
  yield* takeLatest(LOAD, smartLoad);
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
