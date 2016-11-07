/* @flow */
import { takeLatest, takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import { fetch, update } from '../lib/services';
import {
  LOAD, loadSuccess, loadFail,
  COMPLETE, completeSuccess, completeFail,
} from './todos-actions';
import type { Todo, LoadAction } from './todos-types';

// eslint-disable-next-line
function* load(action:LoadAction) {
  const todos:Array<Todo> = yield fetch(`/todos?status=${action.filter}`);

  try {
    yield put(loadSuccess(todos));
  }
  catch (e) {
    if (e instanceof Error) throw e;
    yield put(loadFail(e));
  }
}

function* smartLoad(action:LoadAction) {
  const isEverythingLoaded = yield select((state) =>
    Object.keys(state.todos.complete).length > 0 &&
    Object.keys(state.todos.incomplete).length > 0
  );
  if (isEverythingLoaded) return;

  const todos:Array<Todo> = yield fetch(`/todos?status=${action.filter}`);

  try {
    yield put(loadSuccess(todos));
  }
  catch (e) {
    if (e instanceof Error) throw e;
    yield put(loadFail(e));
  }
}

function* complete(action) {
  const result:Todo = yield update(`/todos?id=${action.id}`);
  try {
    yield put(completeSuccess(result));
  }
  catch (e) {
    if (e instanceof Error) throw e;
    yield put(completeFail(e));
  }
}

function* watchLoad() {
  // yield* takeLatest(LOAD, load);
  yield* takeLatest(LOAD, smartLoad);
}

function* watchComplete() {
  yield* takeEvery(COMPLETE, complete);
}

export default function* watchTodos():any {
  yield [
    fork(watchLoad),
    fork(watchComplete),
  ]
}
