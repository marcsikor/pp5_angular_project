import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ClaimItemizationComponent } from './claim-itemization/claim-itemization.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    TopBarComponent,
    LandingPageComponent,
    TransactionHistoryComponent,
    ClaimItemizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
