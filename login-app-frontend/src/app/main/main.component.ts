import { Component, OnInit } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  isLoggedIn: boolean;
  userLoginEvent = new EventEmitter();

  constructor() {
    this.isLoggedIn = false;
    this.userLoginEvent.on("loginSuccess", () => {
      this.isLoggedIn = true;
    });
    this.userLoginEvent.on("logout", () => {
      this.isLoggedIn = false;
    });
  }

  ngOnInit() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      if (user.name) {
        this.isLoggedIn = true;
      }
    }
  }
}
