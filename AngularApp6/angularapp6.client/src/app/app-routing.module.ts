import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [{ path: "signup", component: SignupComponent },
{ path: "signuo", component: LoginComponent },
{ path: "profile", component: ProfileComponent },
  { path: "parent", component: ParentComponent },
  { path: "chiild", component: ChildComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
