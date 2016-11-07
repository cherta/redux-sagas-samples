/* @flow */
import { fork } from 'redux-saga/effects';
import { sagas as todos } from '../todos';

export default function* root():any {
 yield [
   fork(todos),
 ];
}
