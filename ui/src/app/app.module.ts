import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { MCompanyComponent } from './admin/m-company/m-company.component';
import { MExchangeComponent } from './admin/m-exchange/m-exchange.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ImportDataComponent,
    MCompanyComponent,
    MExchangeComponent,
    UpdateIpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
