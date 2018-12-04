import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RouterModule, Routes } from '@angular/router';
import {AlertsService } from 'angular-alert-module';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
  providers:[ CustomerService ]
})
export class CreateCustomerComponent{

  customer: Customer = new Customer(); //new object
  showAlert : boolean = false;
  showError : boolean = false;
  constructor( private customerService: CustomerService, private alerts: AlertsService) {}

  create(): void {
	if (typeof this.customer.userName === "undefined" || typeof this.customer.prodName === "undefined")
	{
		this.alerts.setMessage("Input something",'error');	
		this.showError = true;
	}
	else if (this.customer.userName === '' || this.customer.prodName === '')
	{
		this.alerts.setMessage("Input something",'error');	
		this.showError = true;
	}
	else
	{
		this.customerService.create(this.customer)
			.subscribe( data => {
			  this.alerts.setMessage("Order created successfully.",'success');
		 });
		this.customer.prodName='';
		this.customer.userName='';
		this.showAlert = true;
	}
    };
	
	ok()
	{
		this.showAlert = false;
		this.showError = false;
		this.customer.prodName='';
		this.customer.userName='';
	}
  
  
}
