import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  providers:[ CustomerService ]
})
export class CustomersListComponent implements OnInit{

	customers: Customer[]; //array
	customer: Customer = new Customer(); //new object
	showEdit: boolean;
	//editIndex : number;
	edituserName : string;
	editprodName : string;
	i: number;
 	constructor( private customerService: CustomerService) {}
 	ngOnInit() {
	    this.customerService.getAll()
	      .subscribe( data => {
	        this.customers = data;
	      });
	};
	deleteCustomer(customer: Customer): void {
	    this.customerService.deleteCustomer(customer.id)
	    .subscribe(data => {
	    this.customers = this.customers.filter( u => u !== customer);
	    });
	};
	editCustomer(): void {
		this.showEdit = false;
		this.customers[this.i].userName = this.edituserName;
		this.customers[this.i].prodName = this.editprodName;	  	
	    this.customerService.editCustomer(this.customers[this.i])
		.subscribe( data => {
	      });
	};
	cancelCustomer()
	{
		this.showEdit = false;
	}
	 edit(i)
	{
	this.showEdit = true;
	this.i = i;
	this.edituserName = this.customers[i].userName;
	this.editprodName = this.customers[i].prodName;
  }
}
