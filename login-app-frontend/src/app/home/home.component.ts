import { Component, Input, OnInit } from "@angular/core";
import { EventEmitter } from "events";
import { UserDetails } from "../auth/user-details";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  user: UserDetails;
  @Input() userLoginEvent: EventEmitter;

  constructor() {}

  ngOnInit() {
    this.user = <UserDetails>JSON.parse(localStorage.getItem("user"));
  }

  logOut() {
    localStorage.removeItem("user");
    this.userLoginEvent.emit("logout");
  }
}
