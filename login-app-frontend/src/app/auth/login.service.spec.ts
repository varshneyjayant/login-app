import { inject, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";
import { LoginDetails } from "./login-details";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { LoginService } from "./login.service";
import { UserDetails } from "./user-details";

describe("LoginService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    })
  );

  it("should be created", () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it("should get user", inject(
    [HttpTestingController, LoginService],
    (httpClient: HttpTestingController, loginService: LoginService) => {
      expect(loginService).toBeTruthy();
    }
  ));
});
