import { createAction, props } from "@ngrx/store";
import { LoginErrorStatus, UserDetails } from "./user-details";

export const loggedIn = createAction("[Auth] LoggedIn", props<UserDetails>());
export const loggedOut = createAction("[Auth] LoggedOut");
export const loginError = createAction(
  "[Auth] Error",
  props<LoginErrorStatus>()
);
