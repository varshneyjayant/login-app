import { Component, OnInit } from "@angular/core";
import { EventEmitter } from "events";
import { Store } from "@ngrx/store";
import { UserDetails } from "../auth/user-details";
import { AppState } from "../app.state";
import * as Rx from "RxJS";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  isLoggedIn: boolean;
  user: UserDetails;

  constructor(private store: Store<AppState>) {
    store
      .select("login")
      .subscribe((_user: UserDetails) => (this.user = _user));
  }

  ngOnInit() {}
}
