import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Customer } from './customer';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) {}

  public getAll() {
    return this.http.get<Customer[]>("http://localhost:8080/getAll");
  }
  public deleteCustomer(id) {
    return this.http.delete("http://localhost:8080/delete/id/" + id);
  }

  public create(customer) {
    return this.http.post("http://localhost:8080/create/userName/" + customer.userName + "/prodName/" + customer.prodName,customer);
  }
  public editCustomer(customer) {
    return this.http.put("http://localhost:8080/update/id/"+ customer.id + "/userName/" + customer.userName + "/prodName/" + customer.prodName,customer);
  }

}
