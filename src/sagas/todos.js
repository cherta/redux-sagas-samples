import { takeLatest, delay } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../reducers/todos';

function* load(action) {
  yield delay(1000);

  let todos = [];
  if (action.filter === 'all') {
    todos = [
      { id: 1, text: 'learn about JSON', status: 'complete' },
      { id: 2, text: 'learn about redux', status: 'complete' },
      { id: 3, text: 'learn about sagas', status: 'incomplete' },
    ];
  } else {
    todos = [
      { id: 1, text: 'learn about JSON', status: 'complete' },
      { id: 2, text: 'learn about redux', status: 'complete' },
    ];
  }

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
