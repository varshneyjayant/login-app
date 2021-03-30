import { Injectable } from "@angular/core";
import { LoginDetails } from "./login-details";
import { environment } from "../../environments/environment";
import { API_URLS } from "../config/api-urls";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { LoginErrorStatus, UserDetails } from "./user-details";
import { Store } from "@ngrx/store";
import { loggedIn, loginError } from "./login.actions";
import { AppState } from "../app.state";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient, private store: Store<AppState>) {}

  tryLoginUser(loginDetails: LoginDetails) {
    this.store.dispatch(loginError(<LoginErrorStatus>{ status: 0 }));
    this.httpClient
      .post(`${environment.server}${API_URLS.LOGIN}`, loginDetails, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .subscribe(
        (user: UserDetails) => {
          this.store.dispatch(loggedIn(user));
        },
        (error: HttpErrorResponse) => {
          this.store.dispatch(loginError({ status: error.status }));
        }
      );
  }
}
