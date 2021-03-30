import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserDetails } from "../auth/user-details";
import { loggedOut } from "../auth/login.actions";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  user: UserDetails;

  constructor(private store: Store<AppState>) {
    store
      .select("login")
      .subscribe((_user: UserDetails) => (this.user = _user));
  }

  ngOnInit() {}

  logOut() {
    this.store.dispatch(loggedOut());
  }
}
