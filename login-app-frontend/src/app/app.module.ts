import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { LoginService } from "./auth/login.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
