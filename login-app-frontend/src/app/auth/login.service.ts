import { Injectable } from "@angular/core";
import { LoginDetails } from "./login-details";
import { environment } from "../../environments/environment";
import { API_URLS } from "../config/api-urls";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserDetails } from "./user-details";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  tryLoginUser(loginDetails: LoginDetails): Observable<UserDetails> {
    return <Observable<UserDetails>>this.httpClient.post(
      `${environment.server}${API_URLS.LOGIN}`,
      loginDetails,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      }
    );
  }
}
