/* @flow */
export type Todo = { status:string, text:string, id:number };
export type LoadAction = { type:string, filter:string };
export type LoadSuccessAction = { type:string, items:Array<Todo> };
export type FailAction = { type:string, error:string };
export type CompleteAction = { type:string, id:number };
export type CompleteSuccessAction = { type:string, item:Todo };
export type Action = LoadAction & LoadSuccessAction & CompleteAction & CompleteSuccessAction & FailAction;
export type State = {
  incomplete: { [id:string]: Todo },
  complete: { [id:string]: Todo },
};
