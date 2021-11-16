import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { MCompanyComponent } from './admin/m-company/m-company.component';
import { MExchangeComponent } from './admin/m-exchange/m-exchange.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: DashboardComponent,
    children :[
      {
        path : 'import-data',
        component: ImportDataComponent
      },
      {
        path : 'manage-company',
        component:MCompanyComponent
      },
      {
        path : 'manage-exchange',
        component:MExchangeComponent
      },
      {
        path : 'update-ipo',
        component:UpdateIpoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
