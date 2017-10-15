import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";
import {ToolModule} from "./tool/tool.module";
import {AlertModule} from "ngx-bootstrap";
import {BaseRequestOptions, CookieXSRFStrategy, Headers, HttpModule, RequestOptions, XSRFStrategy} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions{
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,

    HomeModule,
    ToolModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
