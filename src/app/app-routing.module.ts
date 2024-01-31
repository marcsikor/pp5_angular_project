import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputFormComponent } from './input-form/input-form.component';
import { authGuard } from './auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'new', component: InputFormComponent, canActivate: [authGuard]},
  {path: 'signin', component: SignInComponent},
  {path: 'history', component: TransactionHistoryComponent, canActivate: [authGuard]},
  {path: 'details/:id', component: TransactionDetailsComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
