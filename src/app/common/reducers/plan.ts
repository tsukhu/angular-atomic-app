import { ActionReducer, Action } from '@ngrx/store';
import { Plan } from 'angular-atomic-library';

export const ADD_PLANS = 'ADD_PLANS';

export const planInitState: Plan[] = [];

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function planReducer(state: Plan[] = [], action: ActionWithPayload<any>): Plan[] {
  switch (action.type) {
    case ADD_PLANS:
      return action.payload;
    default:
      return state;
  }
};
