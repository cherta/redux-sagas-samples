/* @flow */
import type {
  LoadAction, LoadSuccessAction, Todo, FailAction,
  CompleteAction, CompleteSuccessAction
} from './todos-types';

export const LOAD = 'todos/LOAD';
export const LOAD_SUCCESS = 'todos/LOAD_SUCCESS';
export const LOAD_FAIL = 'todos/LOAD_FAIL';
export const COMPLETE = 'todos/COMPLETE';
export const COMPLETE_SUCCESS = 'todos/COMPLETE_SUCCESS';
export const COMPLETE_FAIL = 'todos/COMPLETE_FAIL';

export const load = (filter:string):LoadAction => ({ type: LOAD, filter })
export const loadSuccess = (items:Array<Todo>):LoadSuccessAction => ({ type: LOAD_SUCCESS, items })
export const loadFail = (error:string):FailAction => ({ type: LOAD_FAIL, error })
export const complete = (id:number):CompleteAction => ({ type: COMPLETE, id })
export const completeSuccess = (item:Todo):CompleteSuccessAction => ({ type: COMPLETE_SUCCESS, item })
export const completeFail = (error:string):FailAction => ({ type: COMPLETE_FAIL, error })
