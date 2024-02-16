import { NgModule } from '@angular/core';
import {mapToCanActivate, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {AuthenticatedComponent} from "./component/authenticated/authenticated.component";
import {AuthGuard} from "./guards/auth.guard";
import {LogoutComponent} from "./component/logout.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'signup', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'dashboard', component: AuthenticatedComponent, data: { title: 'Dashboard' }, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
