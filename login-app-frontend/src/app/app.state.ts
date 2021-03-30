import { UserDetails } from "./auth/user-details";

export interface AppState {
    login: UserDetails;
    loginError: number
}