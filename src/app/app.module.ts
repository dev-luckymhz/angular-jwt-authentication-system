import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AuthenticatedComponent } from './component/authenticated/authenticated.component';
import {ToastComponent} from "./component/toast/toast.component";
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {WithCredentialInterceptor} from "./interceptors/with-credential.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToastComponent,
    AuthenticatedComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: WithCredentialInterceptor,
    multi: true
  },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
