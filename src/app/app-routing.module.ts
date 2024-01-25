import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputFormComponent } from './input-form/input-form.component';
import { authGuard } from './auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'new', component: InputFormComponent, canActivate: [authGuard]},
  {path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
