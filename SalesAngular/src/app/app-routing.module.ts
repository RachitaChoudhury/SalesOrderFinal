import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'list', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
	{ path: 'home', component: HomeComponent }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
