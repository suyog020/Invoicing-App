import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './components/Create/create-invoice/create-invoice.component';
import { CustomerComponent } from './components/Customer/customer/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoicePdfComponent } from './components/Create/invoice-pdf/invoice-pdf.component';
import { InvoiceComponent } from './components/Invoice/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"customers",
    component:CustomerComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:"invoice",
    component:InvoiceComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"createInvoice",
    component:CreateInvoiceComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"pdfInvoice",
    component:InvoicePdfComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
