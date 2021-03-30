import { Component, Input, OnInit } from "@angular/core";
import { LoginDetails } from "../auth/login-details";
import { UserDetails } from "../auth/user-details";
import { LoginService } from "../auth/login.service";
import { MESSAGES } from "../config/messages";
import { HttpErrorResponse } from "@angular/common/http";
import { EventEmitter } from "events";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLoading: boolean;
  loginDetails: LoginDetails = <LoginDetails>{};
  loginErrors: string;
  showLoginError: boolean;

  @Input() userLoginEvent: EventEmitter;

  constructor(
    private loginService: LoginService,
    private store: Store<AppState>
  ) {
    this.store.select("loginError").subscribe((status: number) => {
      if (status !== 0) {
        if (status === 401) {
          this.loginErrors = MESSAGES.AUTHENTICATION_ERROR;
        } else {
          this.loginErrors = MESSAGES.UNKNOWN_ERROR;
        }
        this.isLoading = false;
        this.showLoginError = true;
      } else {
        this.showLoginError = false;
      }
    });
  }

  ngOnInit() {}

  validateForm() {
    if (
      !this.loginDetails.username ||
      this.loginDetails.username.trim() === ""
    ) {
      this.loginErrors = MESSAGES.MISSING_USERNAME;
      return false;
    }
    if (
      !this.loginDetails.password ||
      this.loginDetails.password.trim() === ""
    ) {
      this.loginErrors = MESSAGES.MISSING_PASSWORD;
      return false;
    }
    if (
      this.loginDetails.password.trim().length < 6 ||
      this.loginDetails.password.trim().length > 20
    ) {
      this.loginErrors = MESSAGES.PASSWORD_LENGHT_INCORRECT;
      return false;
    }
    return true;
  }

  submitForm() {
    this.showLoginError = false;
    if (!this.validateForm()) {
      this.showLoginError = true;
    } else {
      this.isLoading = true;
      this.showLoginError = false;
      this.loginService.tryLoginUser(this.loginDetails);
    }
  }
}
