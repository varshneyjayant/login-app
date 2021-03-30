import { loginErrorReducer, loginReducer } from "./auth/login.reducer";

export const AppReducers = {
  login: loginReducer,
  loginError: loginErrorReducer,
};
