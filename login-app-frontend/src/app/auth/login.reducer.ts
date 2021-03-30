import { createReducer, on, Action } from "@ngrx/store";
import { LoginErrorStatus, UserDetails } from "./user-details";
import { loggedIn, loggedOut, loginError } from "./login.actions";

const _loginReducer = createReducer(
  null,
  on(loggedIn, (state: UserDetails, user: UserDetails) => user),
  on(loggedOut, (state) => null)
);

const _loginErrorReducer = createReducer(
  0,
  on(
    loginError,
    (state: number, loginError: LoginErrorStatus) => loginError.status
  )
);

export const loginReducer = (state: UserDetails, action: Action) => {
  return _loginReducer(state, action);
};

export const loginErrorReducer = (state: number, action: Action) => {
  return _loginErrorReducer(state, action);
};
